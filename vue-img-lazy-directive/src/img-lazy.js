class LazyLoad {
    constructor(imgOps, obsOps) {
        this.element = [];
        this.imgOptions = Object.assign(this.defaulImgOps, imgOps|| {});
        this.observeOptions =  Object.assign(this.defaultObserveOptions, obsOps || {});
        this.observer = null;
        // 初始化观察器实例
        this.initObserver();
    }

    /**
     * 静态初始化方法
     * @param {*} imgOps 图片选项
     * @param {*} obsOps 观察器选项
     * @returns LazyLoad实例
     */
    static init (imgOps, obsOps) {
      return new LazyLoad(imgOps, obsOps);
    }

    /**
     * 默认的观察选项
     * @returns 默认的观察选项
     */
   get defaultObserveOptions() {
        return {
            threshold: 0.1, // 元素进入视口的比例10%
            root: null, // 根元素，默认是视口
            rootMargin: '10px', // 根元素的外边距
        }
    }

    /**
     * 默认的图片选项
     * @returns 默认的图片选项
     */
    get defaulImgOps() {
        return {
            // 失败占位图
            error: '', // 失败图片地址,
            loading: '', // 加载占位图
            // 懒加载图片的属性
            attr: 'data-src',
            attrImg: 'src'
        };
    }

    /**
     * 初始化观察器实例
     */
    initObserver() {
        if (!this.observer) {
            this.observer = new IntersectionObserver(this.observeHandler.bind(this), this.observeOptions);
        }
    }

    /**
     * 初始化元素节点
     * @param {*} el 元素节点或选择器
     * @returns 元素节点数组
     */
    elementInit(el) {
        if (!el) {
            throw new Error('el元素节点参数不能为空');
        }
        
        let elements = [];
        
        if (typeof el === 'string') {
            // 如果是选择器，查询元素
            elements = document.querySelectorAll(el);
        } else if (el.nodeType === 1) {
            // 如果是单个DOM元素
            elements = [el];
        } else if (el instanceof NodeList || el instanceof HTMLCollection) {
            // 如果是NodeList或HTMLCollection
            elements = Array.from(el);
        } else if (Array.isArray(el)) {
            // 如果是数组
            elements = el;
        }
        
        return elements;
    }

    /**
     * 安装插件
     * @param {*} app vue实例
     * @param {*} options 插件选项
     */
    install(app, options) {
       const _this = this;
       options = options || {};
       // 默认指令名称lazy
       const directiveName = options.name || 'lazy';
        app.directive(directiveName, {
            bind(el, binding) {
                // 将当前图片url绑定到data-src属性，方便后面加载到指令中
                el.setAttribute('data-src', binding.value);
                // 设置加载占位图
                if (_this.imgOptions.loading) {
                    el.src = _this.imgOptions.loading;
                }
            },
            inserted(el, binding) {
                // 使用 Intersection Observer 监听元素
                _this.observe(el);
            },
            componentUpdated(el, binding) {
                // 当图片地址改变时，重新设置data-src属性
                el.setAttribute('data-src', binding.value);
                // 重新开始观察
                _this.observe(el);
            },
            unbind(el) {
                // 移除 Intersection Observer 监听
                _this.unobserve(el);
            },
        })
    }

    // 手动调用use执行监听指定元素, 确保data-src属性存在,不然加载图片会失败
    /**
     * 手动调用使用插件
     * @param {*} el 元素节点或选择器
     */
    use(el) {
        this.element = this.elementInit(el);
        // 对每个元素都监听
        this.element.forEach(el => {
            // 设置加载占位图
            if (this.imgOptions.loading) {
                el.src = this.imgOptions.loading;
            }
            this.observe(el);
        })
    }

    /**
     * 观察元素进入视口的回调函数
     * @param {*} entries 观察元素的信息数组
     */
    observeHandler (entries) { 
         entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 元素进入视口，加载图片
                const img = entry.target;
                const dataSrc = img.getAttribute('data-src');
                if (dataSrc) {
                    // 设置图片加载成功和失败的处理
                    img.onload = () => {
                        // 图片加载成功，移除事件监听
                        img.onload = null;
                        img.onerror = null;
                    };
                    
                    img.onerror = () => {
                        // 图片加载失败，使用失败占位图
                        if (this.imgOptions.error) {
                            img.src = this.imgOptions.error;
                        }
                        img.onload = null;
                        img.onerror = null;
                    };
                    
                    img.src = dataSrc; // 加载真实图片
                    img.removeAttribute('data-src');
                    // 停止观察该元素
                    this.unobserve(img);
                }
            }
        });
    }
    
    /**
     * 监听元素
     * @param {Element} el DOM元素
     */
    observe (el) {
        // 确保观察器实例存在
        this.initObserver();
        // 如果元素已经有data-src属性且不在观察中，则开始观察
        if (el.getAttribute('data-src') && !this.isObserving(el)) {
            this.observer.observe(el);
            el.dataset.isObserving = 'true';
        }
    }

    /**
     * 检查元素是否正在被观察
     * @param {Element} el DOM元素
     * @returns {boolean} 是否正在被观察
     */
    isObserving(el) {
        // 检查元素是否有被观察的标记
        return el.dataset.isObserving === 'true';
    }

    /**
     * 取消监听元素
     * @param {Element} el DOM元素
     */
    unobserve(el) {
        if (this.observer) {
            this.observer.unobserve(el);
            // 移除观察标记
            delete el.dataset.isObserving;
        }
    }

    /**
     * 销毁观察器
     */
    destroy() {
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }
        this.element = [];
    }
}


if (window) {
    window.LazyLoad = LazyLoad;
}

//  ES Module
export default LazyLoad;
// commonJS 环境
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LazyLoad;
}
