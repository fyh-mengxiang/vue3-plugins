/**
 * Vue 3 EventBus 主入口文件
 * 支持 Vue.use() 安装方式
 */

import EventBus from './src/EventBus.js'

// 创建单例实例，支持通过 install 方法传递选项
let eventBusInstance = new EventBus()

/**
 * Vue 3 插件安装函数
 * @param {import('vue').App} app - Vue 应用实例
 * @param {Object} options - 插件选项
 */
function install(app, options = {}) {
  // 如果提供了 EventBus 配置，重新创建实例
  if (options.eventBusOptions) {
    eventBusInstance = new EventBus(options.eventBusOptions)
  }

  // 全局注入 eventBus，支持 Composition API
  app.provide('eventBus', eventBusInstance)

  // 添加到全局属性，支持 Option API
  app.config.globalProperties.$eventBus = eventBusInstance

  // 可选：在控制台输出安装信息
  if (options.debug) {
    console.log('Vue 3 EventBus 已安装', { options })
  }
}

// 导出插件
export default {
  install,
}

// 导出单例实例，支持直接使用
export const eventBus = eventBusInstance

// 导出类，支持自定义实例
export { EventBus }
