
// const loginData = require('./mock/login.json')
const path = require('path')
function resolvePath (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 基本路径
  publicPath: './',
  // publicPath: process.env.NODE_ENV === 'production' ? '/online/' : '/',

  // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
  // 输出文件目录
  outputDir: process.env.outputDir, //

  //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',

  // 以多页模式构建应用程序
  // pages:{ type:Object,Default:undfind }
  /*
      构建多页面模式的应用程序.每个“页面”都应该有一个相应的JavaScript条目文件。该值应该是一
      个对象，其中键是条目的名称，而该值要么是指定其条目、模板和文件名的对象，要么是指定其条目
      的字符串，
      注意：请保证pages里配置的路径和文件名 在你的文档目录都存在 否则启动服务会报错的
    */
  // pages: {
  // index: {
  // entry for the page
  // entry: 'src/index/main.js',
  // the source template
  // template: 'public/index.html',
  // output as dist/index.html
  // filename: 'index.html'
  // },
  // when using the entry-only string format,
  // template is inferred to be `public/subpage.html`
  // and falls back to `public/index.html` if not found.
  // Output filename is inferred to be `subpage.html`.
  // subpage: 'src/subpage/main.js'
  // },

  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,

  // 生产环境是否生成 sourceMap 文件，一般情况不建议打开
  // productionSourceMap：{ type:Bollean,default:true } 生产源映射
  // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
  productionSourceMap: false,

  // webpack配置
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production'
    } else {
      // 为开发环境修改配置...
      config.mode = 'development'
    }

    /*  Object.assign(config, {
       // 开发生产共同配置
       resolve: {
         alias: {
           '@': path.resolve(__dirname, './src')
           // '@c': path.resolve(__dirname, './src/components')
         }
       }
     }) */

    // console.log(config)
  },

  // 允许对内部的 webpack 配置进行更细粒度的修改
  chainWebpack: config => {
    // if (process.env.NODE_ENV === 'production') {
    // 测试生产环境, 不压缩js代码
    // if (process.env.VUE_APP_TITLE === 'alpha') {
    // config.optimization.minimize(true)
    // }
    // }
    // 文件分割,达到最快化
    /*  config.optimization.splitChunks({
       chunks: ''
     }) */
    // 配置别名
    config.resolve.alias.set('#', resolvePath('src'))
    // .set('#components', resolgvePath('src/components'))

    // svg rule loader
    // svg 加载规则
    config.module.rules.delete('svg')
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    // svgRule.uses.clear()
    config.module.rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(resolvePath('src/assets/images/svg')) // 处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: '[name]'
      })
  },

  css: {
    // 启用 CSS modules
    modules: false,
    // 是否使用css分离插件, 生产环境为 true
    extract: false, // process.env.NODE_ENV === 'production',
    // 关闭 css 的源码映射，提升构建新性能
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      sass: {
        // 引用全局 Sass,可以不用在每个vue文件中引用定义的变量
        // data: `@import '~@/assets/styles/variables.scss';`
        data: `@import '~@/assets/styles/index.scss';`
      },
      css: {
        // data: `@import '~@/assets/iconfont/css/iconfont.css';`
      }
    }
  },

  // devServer:{type:Object} 3个属性host,port,https
  // 它支持webPack-dev-server的所有选项
  // webpack-dev-server 相关配置 https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 8085, // 端口号
    host: '127.0.0.1',
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    hotOnly: true, // 热更新
    // proxy: 'http://127.0.0.1:9990' // 配置跨域处理,只有一个代理
    proxy: {
      '/api': {
        target: 'http://www.wbtech.com/',
        ws: true, // 是否启用websockets
        changeOrigin: true// 开启代理
      },
      '/mockApi': {
        target: ' https://easy-mock.com/mock/5c91eb10d4980e621652934f/getData',
        ws: true, // 是否启用websockets,若接口地址为https需要开启
        changeOrigin: true, // 开启代理
        pathRewrite: {
          '^/mockApi': '/'
        }
      }
    } // 配置多个代理
    /* before (app) {
      app.post('/api/login', function (req, res, next) {
        resizeBy.json(loginData)
      })
    } */
  },

  // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建，在适当的时候开启几个子进程去并发的执行压缩
  // 构建时开启多进程处理 babel 编译
  parallel: require('os').cpus().length > 1,

  // 第三方插件配置 https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader
  pluginOptions: {

  }

}
