/**
 * Vue 3 EventBus 核心实现
 * 支持事件订阅、发布、取消订阅等功能
 * 支持事件缓存，解决先执行顺序先emit后on的问题
 */

class EventBus {
  constructor(options = {}) {
    // 存储事件订阅者
    this.events = {}
    // 存储已发布但未被订阅的事件（事件缓存）
    this.eventCache = {}
    // 配置选项
    this.options = {
      // 是否启用事件缓存
      enableCache: options.enableCache !== false,
      // 每个事件的最大缓存数量，0表示不限制
      maxCacheSize: options.maxCacheSize || 10,
      // 是否在订阅后自动清除缓存
      clearCacheAfterSubscribe: options.clearCacheAfterSubscribe !== false,
      ...options,
    }
  }

  /**
   * 订阅事件
   * @param {string} eventName - 事件名称
   * @param {Function} callback - 回调函数
   * @param {Object} options - 选项配置
   * @param {boolean} options.once - 是否只触发一次
   * @returns {Function} - 取消订阅的函数
   */
  on(eventName, callback, options = {}) {
    if (typeof callback !== 'function') {
      throw new TypeError('回调函数必须是函数类型')
    }

    if (!this.events[eventName]) {
      this.events[eventName] = []
    }

    // 创建订阅者对象
    const subscriber = {
      callback,
      once: !!options.once,
    }

    this.events[eventName].push(subscriber)

    // 检查是否有缓存的事件，如果有则触发
    if (this.options.enableCache && this.eventCache[eventName]) {
      // 复制缓存列表，防止在处理过程中修改
      const cachedEvents = [...this.eventCache[eventName]]

      // 触发所有缓存的事件
      cachedEvents.forEach((cached) => {
        try {
          callback(...cached.args)
        } catch (error) {
          console.error(`EventBus 缓存事件 "${eventName}" 回调执行出错:`, error)
        }

        // 如果是一次性事件，触发后移除订阅
        if (subscriber.once) {
          this.off(eventName, callback)
        }
      })

      // 根据配置清除缓存
      if (this.options.clearCacheAfterSubscribe) {
        delete this.eventCache[eventName]
      }
    }

    // 返回取消订阅的函数，方便在组件中使用
    return () => this.off(eventName, callback)
  }

  /**
   * 订阅一次事件
   * @param {string} eventName - 事件名称
   * @param {Function} callback - 回调函数
   * @returns {Function} - 取消订阅的函数
   */
  once(eventName, callback) {
    return this.on(eventName, callback, { once: true })
  }

  /**
   * 取消订阅事件
   * @param {string} eventName - 事件名称
   * @param {Function} [callback] - 可选的回调函数，不提供则取消该事件的所有订阅
   */
  off(eventName, callback) {
    if (!this.events[eventName]) {
      return
    }

    if (!callback) {
      // 取消该事件的所有订阅
      delete this.events[eventName]
      return
    }

    // 取消指定的订阅
    this.events[eventName] = this.events[eventName].filter(
      (listener) => listener.callback !== callback,
    )

    // 如果没有订阅者了，清理该事件
    if (this.events[eventName].length === 0) {
      delete this.events[eventName]
    }
  }

  /**
   * 发布/触发事件
   * @param {string} eventName - 事件名称
   * @param {...any} args - 传递给回调函数的参数
   */
  emit(eventName, ...args) {
    let hasListeners = false

    // 如果有订阅者，直接触发
    if (this.events[eventName]) {
      hasListeners = true
      // 复制一份订阅者列表，防止在触发过程中修改订阅列表
      const listeners = [...this.events[eventName]]

      listeners.forEach((listener) => {
        try {
          listener.callback(...args)
        } catch (error) {
          console.error(`EventBus 事件 "${eventName}" 回调执行出错:`, error)
        }

        // 如果是一次性事件，触发后自动取消订阅
        if (listener.once) {
          this.off(eventName, listener.callback)
        }
      })
    }

    // 如果没有订阅者且启用了事件缓存，将事件缓存起来
    if (!hasListeners && this.options.enableCache) {
      // 初始化缓存数组
      if (!this.eventCache[eventName]) {
        this.eventCache[eventName] = []
      }

      // 添加到缓存
      this.eventCache[eventName].push({
        args: [...args],
        timestamp: Date.now(),
      })

      // 限制缓存数量
      if (this.options.maxCacheSize > 0) {
        const overflow = this.eventCache[eventName].length - this.options.maxCacheSize
        if (overflow > 0) {
          // 移除最早的缓存
          this.eventCache[eventName].splice(0, overflow)
        }
      }
    }
  }

  /**
   * 获取指定事件的订阅者数量
   * @param {string} eventName - 事件名称
   * @returns {number} - 订阅者数量
   */
  listenerCount(eventName) {
    return this.events[eventName] ? this.events[eventName].length : 0
  }

  /**
   * 获取指定事件的缓存数量
   * @param {string} eventName - 事件名称
   * @returns {number} - 缓存事件数量
   */
  cacheCount(eventName) {
    return this.eventCache[eventName] ? this.eventCache[eventName].length : 0
  }

  /**
   * 清除所有事件订阅
   * @param {boolean} clearCache - 是否同时清除事件缓存
   */
  clear(clearCache = true) {
    this.events = {}
    if (clearCache) {
      this.clearCache()
    }
  }

  /**
   * 清除事件缓存
   * @param {string} [eventName] - 可选，指定要清除的事件缓存，不提供则清除所有
   */
  clearCache(eventName) {
    if (eventName) {
      delete this.eventCache[eventName]
    } else {
      this.eventCache = {}
    }
  }

  /**
   * 获取所有订阅的事件名称
   * @returns {string[]} - 事件名称数组
   */
  getEvents() {
    return Object.keys(this.events)
  }

  /**
   * 获取所有缓存的事件名称
   * @returns {string[]} - 事件名称数组
   */
  getCachedEvents() {
    return Object.keys(this.eventCache)
  }

  /**
   * 获取事件缓存配置
   * @returns {Object} - 配置选项
   */
  getOptions() {
    return { ...this.options }
  }

  /**
   * 更新事件缓存配置
   * @param {Object} newOptions - 新的配置选项
   */
  updateOptions(newOptions) {
    this.options = { ...this.options, ...newOptions }
  }
}

export default EventBus
