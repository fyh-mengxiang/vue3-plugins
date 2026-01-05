const fs = require('fs');
const path = require('path');

// 确保dist目录存在
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// 复制TypeScript类型定义文件到dist目录
const srcTypesPath = path.join(__dirname, 'src', 'img-lazy.d.ts');
const distTypesPath = path.join(__dirname, 'dist', 'img-lazy.d.ts');

if (fs.existsSync(srcTypesPath)) {
  fs.copyFileSync(srcTypesPath, distTypesPath);
  console.log('Type definitions copied to dist directory');
} else {
  console.error('Type definitions file not found');
  process.exit(1);
}