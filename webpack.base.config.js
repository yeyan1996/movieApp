const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {app: './src/main.js'},
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, 'dist'),
        publicPath: './'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'fonts/[name].[hash:7].[ext]'
                    }
                }
                ]

            },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }

        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.scss'],
        alias: {
            // 在基础配置也加了下面这句话，否则打包后没有dom节点
            vue$: 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, 'src/'),
            'pages': path.resolve(__dirname, 'src/pages/'),
            'common': path.resolve(__dirname, 'src/common/')
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({template: './index.html'})
    ]

}
