const withPWA = require("next-pwa");
const TerserPlugin = require('terser-webpack-plugin')

module.exports = withPWA({
    pwa: {
        dest: "public",
        register: true,
        mode: 'production',
        skipWaiting: true,
    },
    compress: true,
    webpack5: false,
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
});