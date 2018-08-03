# vue-16to

> vue-16to

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 初始化项目
```bash
vue init webpack vue-16to
cd vue-16to
npm install
npm install less less-loader -D
npm install vuex -S
npm install axios -S
npm run dev
```

## 目录结构
|-api                           接口目录
|-build                         构建目录
|-config                        项目配置目录
|-dist                          输出目录
|-node_modules                  npm模块
|-src                           项目代码
|-static                        静态资源
|-.babelrc                      ES6转换配置
|-.editorconfig                 配置工具配置
|-.gitignore                    git忽略配置
|-.postcssrc.js                 css生成配置
|-index.html                    首页
|-package-lock.json             项目依赖
|-package.json                  项目依赖
|-README.md
