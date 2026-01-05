// Type definitions for vue3-img-lazy-plugin
// Project: https://github.com/fyh-mengxiang/vue3-plugins/tree/master/vue3-img-lazy-plugin
// Definitions by: Your Name <https://github.com/yourusername>

import { App } from 'vue';

// 图片选项接口
export interface ImgOptions {
  error?: string;
  loading?: string;
  attr?: string;
  attrImg?: string;
}

// 观察器选项接口
export interface ObserveOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

// 插件选项接口
export interface PluginOptions {
  name?: string;
}

// LazyLoad类接口
export declare class LazyLoad {
  constructor(imgOps?: ImgOptions, obsOps?: ObserveOptions);
  
  static init(imgOps?: ImgOptions, obsOps?: ObserveOptions): LazyLoad;
  
  install(app: App, options?: PluginOptions): void;
  
  use(el: string | Element | NodeList | HTMLCollection | Array<Element>): void;
  
  observe(el: Element): void;
  
  unobserve(el: Element): void;
  
  destroy(): void;
}

export default LazyLoad;