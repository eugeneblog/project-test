const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",   //入口文件
    output:{
        path:__dirname,    //目标输出当前目录的绝对路径
        filename:'./release/bundle.js'  //用于输出的文件名
    },
    module:{
        rules:[{
            test: /\.js?$/,
            exclude:/(node_modules)/,
            loader:'babel-loader'
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ],
    devServer:{
        contentBase:path.join(__dirname, './release'),
        open:true,
        port:9000
    }
}