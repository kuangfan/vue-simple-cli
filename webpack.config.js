// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

// module.exports = {
//   mode: 'development', // 打包模式，开发or生产,决定了压缩级别
//   entry: './src/main.js', // 打包入口文件
//   output: {
//     path: path.resolve(__dirname, 'dist'), // 打包输出的路径dist
//     filename: 'bundle.js' // 打包后的文件名称
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: 'index.html'
//     })
//   ]
// }
const path = require('path')

const modeOptions = {
  development: require('./config/webpack.dev.conf'),
  production: require('./config/webpack.prod.conf')
}
 
module.exports = env => {
  console.log(env)
  env = env || {}
  return Object.assign({
    entry: './src/main.js',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.vue$/,
          use: 'vue-loader'
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue': 'vue/dist/vue.esm',
        '@': path.join(__dirname, 'src')
      }
    }
  }, modeOptions[env.mode])
}