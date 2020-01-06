# vue16to

> vue16to

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
```
|-api                           //接口目录
|-build                         //构建目录
|-config                        //项目配置目录
|-dist                          //输出目录
|-node_modules                  //npm模块
|-src                           //项目代码
    |-components                //组件目录
    |-router                    //目录目录
    |-store                     //数据目录
        |-modules               //业务模块store
        |-actions.js            //根级别action
        |-getters.js            //根级别getter
        |-mutations.js          //根级别mutation
        |-index.js              //组装模块并导出
        |-types.js              //常量
    |-App.vue                   //第一个组件
    |-main.js                   //主入口
|-static                        //静态资源
    |-public.less               //公共less文件
|-.babelrc                      //ES6转换配置
|-.editorconfig                 //配置工具配置
|-.gitignore                    //git忽略配置
|-.postcssrc.js                 //css生成配置
|-index.html                    //首页
|-package-lock.json             //项目依赖
|-package.json                  //项目依赖
|-README.md
```

## 数据仿真
/api目录下api.js中声明，.json是数据文件，启动npm run api
```
app.js文件中:
const a=require('./a.json');
app.get('/api/a', function (req, res) {
    res.send(a);
});

a.json文件:
{
"cc":0
}
```

## BUG
专题--支持Markdown
总结--支持hightline
增加体系链接
