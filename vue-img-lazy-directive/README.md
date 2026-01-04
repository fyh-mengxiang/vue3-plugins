# Vue Image Lazy Load Directive
# Vue 图片懒加载指令

A lightweight Vue directive for image lazy loading, based on Intersection Observer API.
一个基于 Intersection Observer API 的轻量级 Vue 图片懒加载指令。

## Features
## 特性

- ✨ **Lightweight and Easy to Use**: Small bundle size, simple API
  ✨ **轻量易用**: 体积小，API 简单
- 📦 **Dual Framework Support**: Compatible with Vue 3 and Vue 2.7
  📦 **双框架支持**: 兼容 Vue 3 和 Vue 2.7
- 🎨 **Customizable Placeholders**: Support loading and error state placeholders
  🎨 **可自定义占位图**: 支持加载中和错误状态的占位图
- 🔧 **Configurable Observer Options**: Fine-tune Intersection Observer behavior
  🔧 **可配置观察器选项**: 可微调 Intersection Observer 行为
- 📱 **Responsive Design Support**: Works with responsive images
  📱 **响应式设计支持**: 支持响应式图片
- 🔄 **Dynamic Image Support**: Automatically handles image URL changes
  🔄 **动态图片支持**: 自动处理图片 URL 变化
- 🚀 **High Performance**: Built on Intersection Observer API for optimal performance
  🚀 **高性能**: 基于 Intersection Observer API，性能优异
- 💪 **ES5 Compatibility**: Supports IE 11 and modern browsers
  💪 **ES5 兼容**: 支持 IE 11 和现代浏览器
- 🔤 **TypeScript Support**: Built with TypeScript definitions
  🔤 **TypeScript 支持**: 内置 TypeScript 类型定义
- 📖 **Well Documented**: Comprehensive usage documentation
  📖 **文档完善**: 完整的使用文档

## Framework Support
## 框架支持

| Framework | Version | Support Status |
|-----------|---------|----------------|
| Vue 3     | ^3.0.0  | ✅ Fully Supported |
| Vue 2     | ^2.7.0  | ✅ Fully Supported |
| Vue 2.x   | < 2.7.0 | ❌ Not Supported |
| Nuxt.js   | ^3.0.0  | ✅ Fully Supported |
| Nuxt.js   | ^2.15.0 | ✅ Fully Supported |

| 框架       | 版本       | 支持状态          |
|------------|------------|-------------------|
| Vue 3      | ^3.0.0     | ✅ 完全支持       |
| Vue 2      | ^2.7.0     | ✅ 完全支持       |
| Vue 2.x    | < 2.7.0    | ❌ 不支持         |
| Nuxt.js    | ^3.0.0     | ✅ 完全支持       |
| Nuxt.js    | ^2.15.0    | ✅ 完全支持       |

## Installation
## 安装

### NPM
### NPM 安装

```bash
npm install vue-img-lazy-directive
```

### Yarn
### Yarn 安装

```bash
yarn add vue-img-lazy-directive
```

### PNPM
### PNPM 安装

```bash
pnpm add vue-img-lazy-directive
```

### CDN
### CDN 引入

```html
<!-- UMD format for direct browser usage -->
<!-- 直接在浏览器中使用的 UMD 格式 -->
<script src="https://unpkg.com/vue-img-lazy-directive@latest/dist/img-lazy.umd.js"></script>
```

#### CDN Usage
#### CDN 使用

```javascript
// For Vue 3
// Vue 3 中使用
const { createApp } = Vue;
const app = createApp({
  // app options
});

app.use(new LazyLoad({
  loading: 'https://via.placeholder.com/600x400/cccccc/ffffff?text=Loading...',
  error: 'https://via.placeholder.com/600x400/ff6b6b/ffffff?text=Error'
}));

app.mount('#app');

// For Vue 2.7
// Vue 2.7 中使用
Vue.use(new LazyLoad({
  loading: 'https://via.placeholder.com/600x400/cccccc/ffffff?text=Loading...',
  error: 'https://via.placeholder.com/600x400/ff6b6b/ffffff?text=Error'
}));
```

## Installation Details
## 安装详情

### For Vue 3 Projects
### Vue 3 项目

```bash
# Using Vite
# 使用 Vite 创建项目
npm create vite@latest my-vue3-app -- --template vue
cd my-vue3-app
npm install vue-img-lazy-directive
```

### For Vue 2.7 Projects
### Vue 2.7 项目

```bash
# Using Vue CLI
# 使用 Vue CLI 创建项目
vue create my-vue2-app
# Select Vue 2 option
# 选择 Vue 2 选项
cd my-vue2-app
npm install vue@^2.7.0 vue-img-lazy-directive
```

### For Nuxt 3 Projects
### Nuxt 3 项目

```bash
npx nuxi init my-nuxt3-app
cd my-nuxt3-app
npm install vue-img-lazy-directive
```

### For Nuxt 2 Projects
### Nuxt 2 项目

```bash
npx create-nuxt-app my-nuxt2-app
# Select Nuxt 2 option
# 选择 Nuxt 2 选项
cd my-nuxt2-app
npm install vue@^2.7.0 vue-img-lazy-directive
```

## Usage
## 使用

### Vue 3
### Vue 3 使用

#### Global Registration
#### 全局注册

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import VueLazyLoad from 'vue-img-lazy-directive'

const app = createApp(App)

app.use(new VueLazyLoad({
  // Optional configuration
  // 可选配置
  loading: 'https://via.placeholder.com/600x400/cccccc/ffffff?text=Loading...',
  error: 'https://via.placeholder.com/600x400/ff6b6b/ffffff?text=Error',
}， {
  threshold: 0.1,
  rootMargin: '10px'
}))

app.mount('#app')
```



### Vue 2.7
### Vue 2.7 使用

```javascript
import Vue from 'vue'
import VueLazyLoad from 'vue-img-lazy-directive'

Vue.use(new VueLazyLoad({
  // Optional configuration
  // 可选配置
  loading: 'https://via.placeholder.com/600x400/cccccc/ffffff?text=Loading...',
  error: 'https://via.placeholder.com/600x400/ff6b6b/ffffff?text=Error'
}))
```

### Template Usage
### 模板使用

```vue
<template>
  <div>
    <!-- Basic usage -->
    <!-- 基础使用 -->
    <img v-lazy="imageUrl" alt="Lazy loaded image">
    
    <!-- With custom placeholder -->
    <!-- 使用自定义占位图 -->
    <img v-lazy="imageUrl" alt="Lazy loaded image" :src="placeholderUrl">
    
    <!-- Responsive images -->
    <!-- 响应式图片 -->
    <img v-lazy="imageUrl" alt="Lazy loaded image" width="100%" height="auto">
    
    <!-- Background images (requires additional CSS) -->
    <!-- 背景图片 (需要额外的 CSS) -->
    <div v-lazy:background-image="imageUrl" class="lazy-background"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: 'https://picsum.photos/id/237/600/400',
      placeholderUrl: 'https://via.placeholder.com/600x400/cccccc/ffffff?text=Placeholder'
    }
  }
}
</script>

<style scoped>
.lazy-background {
  width: 600px;
  height: 400px;
  background-size: cover;
  background-position: center;
}
</style>
```

## Configuration Options
## 配置选项

### Directive Options
### 指令选项

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `name` | String | `'lazy'` | Custom directive name |

| 选项    | 类型   | 默认值   | 描述             |
|---------|--------|----------|------------------|
| `name`  | String | `'lazy'` | 自定义指令名称   |

### Image Options
### 图片选项

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `loading` | String | `''` | Loading placeholder image URL |
| `error` | String | `''` | Error placeholder image URL |
| `attr` | String | `'data-src'` | Attribute to store the real image URL |
| `attrImg` | String | `'src'` | Image source attribute |

| 选项       | 类型   | 默认值       | 描述                         |
|------------|--------|--------------|------------------------------|
| `loading`  | String | `''`         | 加载中占位图 URL             |
| `error`    | String | `''`         | 错误状态占位图 URL           |
| `attr`     | String | `'data-src'` | 存储真实图片 URL 的属性名    |
| `attrImg`  | String | `'src'`      | 图片的源属性名               |

### Intersection Observer Options
### Intersection Observer 选项

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `threshold` | Number | `0.1` | Element visibility threshold (0-1) |
| `root` | Element | `null` | Root element for observation (default: viewport) |
| `rootMargin` | String | `'10px'` | Root margin for observation |

| 选项          | 类型     | 默认值   | 描述                                 |
|---------------|----------|----------|--------------------------------------|
| `threshold`   | Number   | `0.1`    | 元素可见阈值 (0-1)                   |
| `root`        | Element  | `null`   | 观察的根元素 (默认: 视口)            |
| `rootMargin`  | String   | `'10px'` | 根元素的外边距                       |

## Manual Usage
## 手动使用

You can also use the lazy load functionality manually without the directive:
您也可以不使用指令，手动使用懒加载功能：

```javascript
import VueLazyLoad from 'vue-img-lazy-directive'

// Initialize lazy load instance
// 初始化懒加载实例
const lazyLoad = new VueLazyLoad({
  loading: 'https://via.placeholder.com/600x400/cccccc/ffffff?text=Loading...',
  error: 'https://via.placeholder.com/600x400/ff6b6b/ffffff?text=Error'
})

// Observe single element
// 观察单个元素
const imgElement = document.querySelector('.lazy-image')
lazyLoad.observe(imgElement)

// Observe multiple elements
// 观察多个元素
lazyLoad.use('.lazy-images')

// Stop observing element
// 停止观察元素
lazyLoad.unobserve(imgElement)

// Destroy observer
// 销毁观察器
lazyLoad.destroy()
```

## Browser Support
## 浏览器支持

- Chrome 51+
- Firefox 63+
- Safari 12.1+
- Edge 79+
- IE 11+ (with polyfill)

- Chrome 51+ 及以上
- Firefox 63+ 及以上
- Safari 12.1+ 及以上
- Edge 79+ 及以上
- IE 11+ 及以上 (需要 polyfill)

For older browsers, you may need to add a polyfill for Intersection Observer API:
对于旧浏览器，您可能需要添加 Intersection Observer API 的 polyfill：

```bash
npm install intersection-observer
```

Then import it in your project:
然后在项目中导入：

```javascript
import 'intersection-observer'
```

## License
## 许可证

MIT

## Contributing
## 贡献

Contributions are welcome! Please feel free to submit a Pull Request.
欢迎贡献！请随时提交 Pull Request。

## Changelog
## 更新日志

### 1.0.1

- Updated README with bilingual documentation
- 更新了 README，添加了中英文对照文档
- Changed GitHub repository URL
- 修改了 GitHub 仓库 URL

### 1.0.0

- Initial release
- 初始发布
- Support for Vue 3 and Vue 2.7
- 支持 Vue 3 和 Vue 2.7
- Basic lazy loading functionality
- 基础懒加载功能
- Customizable placeholders
- 可自定义占位图
- Configurable observer options
- 可配置观察器选项
- ES5 compatibility
- ES5 兼容性
- TypeScript support
- TypeScript 支持
- Manual usage support
- 手动使用支持
