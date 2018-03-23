const path = require('path')
const htmlPlugin =require('html-webpack-plugin')
const htmlScriptPlugin = require('html-webpack-inline-source-plugin')
const openBrowserWebpackPlugin = require('open-browser-webpack-plugin')
module.exports={
    mode:"production",
    entry:{
        index:'./src/js/index.js',
        main:'./src/js/main.js',
        dev:'./src/js/dev.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'js/[name]-[chunkhash].js'
    },
    devtool:'source-map',
    resolve: {  
        modules: ['node_modules'],  
        extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx'],  
        alias: {  
          'react-native': 'react-native-web',  
        }
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/(node_modules)/,
                include:[
                    path.resolve(__dirname,'src'),
                ],
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['es2015', 'react']
                    }
                }
            },
            {
                test:/\.tpl$/,
                exclude:/(node_modules)/,
                include:[
                    path.resolve(__dirname,'src'),
                ],
                use:'html-loader'
            },
            {
                test: /\.less$/,
                exclude: /(node_modules)/,
                //loaders:"style-loader!css-loader"
                 use: [
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders:1
                        }
                    },
                    'postcss-loader',
                    'less-loader'
                 ]
            },
            {
                test:'/\.less$/',
                exclude:/node_modules/,
                use:[
                    {
                        loader:"style-loader"
                    },{
                        loader:'css-loader'
                    },{
                        loader:'less-loader'
                    }
                ]
            }
        ]
        
    },
    plugins:[
        new htmlPlugin({
            template:'./index.html',
            // filename:'index-[hash].html',
            filename:'index.html',
            inject:false,
            title:"this is webpack options title",
            date:new Date(),
            name:"vinkon"
            // minify:{
            //     removeComments:true,
            //     collapseWhitespace:true
            // }
        }),
        new htmlPlugin({
            template:'./index.html',
            // filename:'index-[hash].html',
            filename:'detail.html',
            inject:true,
            title:"this is webpack options title",
            date:new Date(),
            name:"vinkon",
            // minify:{
            //     removeComments:true,
            //     collapseWhitespace:true
            // },
            chunks:['main','index']
        }),
        new htmlPlugin({
            template:'./info.html',
            // filename:'index-[hash].html',
            filename:'info.html',
            inject:true,
            title:"this is webpack options title",
            date:new Date(),
            name:"vinkon",
            // minify:{
            //     removeComments:true,
            //     collapseWhitespace:true
            // },
            excludeChunks:['index'],
            inlineSource : '.(js|css)$' //全部内嵌
        }),
        new htmlScriptPlugin(),
        new htmlPlugin({
            template:'./devserver.html',
            // filename:'index-[hash].html',
            filename:'devserver.html',
            inject:true,
            title:"this is webpack options title",
            date:new Date(),
            name:"vinkon",
            chunks:['dev']
            //inlineSource : '.(js|css)$' //全部内嵌
        }),
        // new WatchMissingNodeModulesPlugin(paths.appNodeModules),
        new openBrowserWebpackPlugin({
            url: 'http://localhost:8080'
        })
        
    ],
    devServer:{
        contentBase:path.join(__dirname,'src'),
        historyApiFallback:{
            rewrites:[
                {
                    from:/./,
                    to:path.join(__dirname,'src/html/four04.html')
                }
            ]
        }
    }
}