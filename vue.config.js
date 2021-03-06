module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Music";
                return args;
            })
    },
    devServer: {
        historyApiFallback: true,
        noInfo: false
    }
}