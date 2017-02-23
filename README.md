# projectTemplet
58无线前端项目构建模板。为前端项目搭建提供统一的规范。

__请使用 es6 开发，并使用 sass 编写样式文件。__
# 下载
```
git clone git@github.com:ChinTeo/projectTemplet.git
```
# 运行

* __进入到项目目录__

    ```
    cd projectTemplet/
    ```
* __安装项目依赖__
    ```
    npm install
    ```

* __项目调试__  

    开启本地服务器运行项目
    ```
    npm run start
    ```
* __打包资源文件__

    打包项目文件
    ```
    npm run build
    ```

    打包线上文件（混淆压缩）
    ```
    npm run dist
    ```

    *打包后的项目文件在dist目录下

    *若要修改打包后的文件名称，在 project.json 中将 name 改成想要的打包文件名即可。
    example：
    ```
    {
      "name": "myproject",
      "version": "1.0.0",
      "description": "a simple templet.",
      "bundlename": {
        "js": "app",
        "css": "style"
      }
    }

    ```
    打包后的文件名即为 myproject。
# 目录结构
```
.  
├── LICENSE  
├── README.md  
├── TREE.md        目录结构  
├── dist           文件打包路径  
├── index.html     模板文件  
├── package.json  
├── project.json   项目配置
├── src            资源文件  
│   ├── assets     公共资源（库文件等）  
│   ├── components 模板文件（react、vue等的模板）
│   ├── index.js   入口文件  
│   └── static     项目静态资源文件  
│        ├── js     js资源文件
│        ├── style  样式资源文件
│        └── img    图片资源
├── webpack.config.dev.js  
├── webpack.config.js  
└── webpack.config.prod.js  
```

# 依赖包

* __webpack__  模块打包工具
* __webpack-dev-server__ webpack 本地服务器，用于本地调试
* __glob__ 允许你使用 *等符号, 来写一个glob规则,像在shell里一样,获取匹配对应规则的文件.
* __babel-loader__ 加载es6文件
* __cross-env__ 设置node环境变量工具
* __css-loader__ 加载css文件
* __file-loader__ url-loader的依赖
* __node-sass__ 编译sass
* __open-browser-webpack-plugin__ 可以直接打开浏览器
* __sass-loader__ 加载sass文件
* __style-loader__ 加载样式文件
* __url-loader__ 加载图片文件
* __babel-core babel__ 编译核心代码
* __babel-preset-latest__
* __babel-runtime__
