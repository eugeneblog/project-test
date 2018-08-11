const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // entry: "./src/adapter.js",   //入口文件
    entry:{
        // vendors: './node_modules/jquery/dist/jquery.min.js',
        app:"./src/pattern/state.js"
    },
    output:{
        path:__dirname,    //目标输出当前目录的绝对路径
        filename:'./release/bundle.js'  //用于输出的文件名
    },
    module:{     
        rules:[{
            test: /\.js?$/,
            exclude:/(node_modules)/,
            loader:'babel-loader'
        },{
            test:/\.css$/,
            use:'css-loader'
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({         //添加插件，这个插件会生成一个h5文件，将webpack包添加到script标签中
            template: "./index.html"
        })
    ],
    devServer:{                             //创建web服务
        contentBase:path.join(__dirname, './release'), 
        open:true,
        port:9000
    },
    externals : {
        jquery: "jQuery" 
    }
}