const path  = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: "development",
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve:{
        alias:{
            "vue$": 'vue/dist/vue.js'
        }
    },
    plugins:[
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new vueLoaderPlugin()
    ],
    module:{
        rules:[
            {test: /\.(jpg|jpeg|npg|gif)$/, use: 'url-loader'},
            {test: /\.(ttf|svg|woff|woff2|eot|webp)$/, use: 'url-loader'},
            {test: /\.css$/, use: ['style-loader','css-loader']},
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            {test: /\.vue$/, use: 'vue-loader'}
            
        ]
    }
}