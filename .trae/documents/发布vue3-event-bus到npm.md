# 发布vue3-event-bus到npm的步骤

## 1. 完善项目配置

### 1.1 更新package.json文件
- 补充repository字段，添加GitHub仓库URL
- 更新bugs和homepage字段，指向GitHub仓库

### 1.2 创建.gitignore文件
- 添加常见的忽略规则，如node_modules、dist等

## 2. 本地检查

### 2.1 安装依赖
- 运行`npm install`确保依赖安装正确

### 2.2 运行测试
- 运行`npm test`确保项目没有错误

### 2.3 检查package.json配置
- 验证所有必填字段都已正确填写

## 3. 登录npm

### 3.1 验证npm账号
- 运行`npm whoami`检查是否已登录
- 如果未登录，运行`npm login`登录npm账号

## 4. 发布到npm

### 4.1 执行发布命令
- 运行`npm publish`发布包

### 4.2 验证发布结果
- 访问npm官网检查包是否成功发布
- 更新README.md中的安装说明

## 5. 更新GitHub仓库

### 5.1 提交更新
- 将所有更改提交到GitHub
- 推送最新代码到远程仓库

## 注意事项
- 确保package.json中的name字段在npm上是唯一的
- 确保版本号符合语义化版本规范
- 确保所有必要的文件都已包含在发布中