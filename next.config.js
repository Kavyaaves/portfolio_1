const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    compress: true,
    productionBrowserSourceMaps: true,
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false
                    },
                },
                extractComments: false
            }),
        ]
    }
}