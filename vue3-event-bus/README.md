# vue3-event-bus-plugin

A simple and lightweight Vue 3 event bus library that supports Composition API and Option API.
一个简单轻量的Vue 3事件总线库，支持Composition API和Option API。

## Features
## 特性

- ✅ 支持Vue 3的Composition API和Option API
- ✅ 提供单例模式，全局共享
- ✅ 支持事件订阅、发布、取消订阅
- ✅ 支持一次性事件
- ✅ 提供事件管理功能
- ✅ 轻量无依赖
- ✅ 兼容TypeScript

## Installation
## 安装

### NPM Installation
### NPM安装

```bash
npm install vue3-event-bus-plugin
```

### Local Development Installation
### 本地开发安装

```bash
# Run in project root directory
# 在项目根目录执行
npm install ./vue3-event-bus-plugin
```

## Usage
## 使用

### 1. Global Registration (Recommended)
### 1. 全局注册（推荐）

Register using `Vue.use()` in `main.js`:
在`main.js`中使用`Vue.use()`注册：

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import EventBus from 'vue3-event-bus-plugin'

const app = createApp(App)
app.use(EventBus, { debug: true }) // debug选项可选
app.mount('#app')
```

### 2. Use in Components
### 2. 在组件中使用

#### Option API

```vue
<template>
  <div>
    <button @click="sendEvent">发送事件</button>
  </div>
</template>

<script>
export default {
  methods: {
    sendEvent() {
      // 发送事件
      this.$eventBus.emit('test-event', 'Hello EventBus')
    },
  },
  mounted() {
    // 订阅事件
    this.$eventBus.on('test-event', this.handleEvent)
  },
  beforeUnmount() {
    // 取消订阅
    this.$eventBus.off('test-event', this.handleEvent)
  },
}
</script>
```

#### Composition API

```vue
<template>
  <div>
    <button @click="sendEvent">发送事件</button>
  </div>
</template>

<script setup>
import { inject, onMounted, onUnmounted } from 'vue'

// 通过inject获取eventBus实例
const eventBus = inject('eventBus')

// 事件处理函数
const handleEvent = (data) => {
  console.log('收到事件:', data)
}

// 发送事件
const sendEvent = () => {
  eventBus.emit('test-event', 'Hello EventBus')
}

onMounted(() => {
  // 订阅事件
  eventBus.on('test-event', handleEvent)
})

onUnmounted(() => {
  // 取消订阅
  eventBus.off('test-event', handleEvent)
})
</script>
```

### 3. Direct Use of Singleton Instance
### 3. 直接使用单例实例

```javascript
import { eventBus } from 'vue3-event-bus-plugin'

eventBus.on('test-event', (data) => {
  console.log('收到事件:', data)
})

eventBus.emit('test-event', 'Hello EventBus')
```

## API

### `on(eventName, callback, options?)`

Subscribe to an event
订阅事件

- `eventName`: 事件名称（字符串）
- `callback`: 回调函数
- `options`: 可选配置
  - `once`: 是否只触发一次（布尔值，默认为false）
- 返回值: 取消订阅的函数

### `once(eventName, callback)`

Subscribe to an event that triggers only once, then automatically unsubscribes
订阅一次事件，触发后自动取消订阅

- `eventName`: 事件名称（字符串）
- `callback`: 回调函数
- 返回值: 取消订阅的函数

### `off(eventName, callback?)`

Unsubscribe from an event
取消订阅事件

- `eventName`: 事件名称（字符串）
- `callback`: 可选，指定要取消的回调函数。如果不提供，则取消该事件的所有订阅

### `emit(eventName, ...args)`

Publish/trigger an event
发布/触发事件

- `eventName`: 事件名称（字符串）
- `...args`: 传递给回调函数的参数

### `listenerCount(eventName)`

Get the number of subscribers for a specified event
获取指定事件的订阅者数量

- `eventName`: 事件名称（字符串）
- 返回值: 订阅者数量（数字）

### `getEvents()`

Get all subscribed event names
获取所有订阅的事件名称

- 返回值: 事件名称数组

### `clear()`

Clear all event subscriptions
清除所有事件订阅

## Examples
## 示例

### Basic Usage
### 基本使用

```javascript
// 订阅事件
const unsubscribe = eventBus.on('test-event', (data) => {
  console.log('收到数据:', data)
})

// 发送事件
eventBus.emit('test-event', { message: 'Hello' })

// 取消订阅
unsubscribe() // 或 eventBus.off('test-event')
```

### One-time Event
### 一次性事件

```javascript
eventBus.once('once-event', (data) => {
  console.log('这个事件只会触发一次:', data)
})

eventBus.emit('once-event', '第一次触发') // 会执行

eventBus.emit('once-event', '第二次触发') // 不会执行
```

### Event Management
### 事件管理

```javascript
// 获取事件数量
const count = eventBus.listenerCount('test-event')
console.log('订阅者数量:', count)

// 获取所有事件名称
const events = eventBus.getEvents()
console.log('所有事件:', events)

// 清除所有订阅
eventBus.clear()
```

## Notes
## 注意事项

1. **Unsubscribe when component is unmounted**: To avoid memory leaks, unsubscribe from related events before the component is unmounted
   **组件卸载时取消订阅**：为避免内存泄漏，组件卸载前应取消订阅相关事件
2. **Event name conventions**: It is recommended to use namespaces (such as `user:login`) to avoid event name conflicts
   **事件名称规范**：建议使用命名空间（如`user:login`）避免事件名称冲突
3. **Callback function scope**: Pay attention to the `this` pointing in the callback function
   **回调函数作用域**：注意回调函数中的`this`指向
4. **Do not abuse EventBus**: For complex state management, it is recommended to use Vuex or Pinia
   **不要滥用EventBus**：对于复杂的状态管理，建议使用Vuex或Pinia

## Browser Support
## 浏览器支持

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新)

## Solving Bugs
## 解决Bug

### 1. How to solve the problem of event listening failure when emit is called before on during page execution
### 1. 如何解决页面执行时先emit后on导致事件监听失效的问题

#### Core Improvements
#### 核心改进

- Added event caching mechanism: When an event is published and there are no subscribers, the event will be cached
  添加了事件缓存机制 ：当事件发布时如果没有订阅者，事件会被缓存起来
- Automatically trigger cached events when subscribing: When a component subscribes to an event, all cached events of that type will be automatically triggered
  订阅时自动触发缓存事件 ：当组件订阅事件时，会自动触发所有缓存的该事件
- Configurable design: Supports controlling caching behavior through options, such as whether to enable caching, maximum cache size, etc.
  配置化设计 ：支持通过选项控制缓存行为，如是否启用缓存、最大缓存数量等
- Complete cache management: Provides APIs for clearing cache, viewing cache count, etc.
  完整的缓存管理 ：提供了清除缓存、查看缓存数量等API

```javascript
// main.js中配置
app.use(EventBus, {
  debug: true, // debug模式
  eventBusOptions: {
    enableCache: true, // 启用事件缓存
    maxCacheSize: 10, // 每个事件最大缓存10条,默认缓存10条
    clearCacheAfterSubscribe: true // 订阅后自动清除缓存
  }
})
```
