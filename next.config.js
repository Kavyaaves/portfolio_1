const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    compress: true,
    productionBrowserSourceMaps: true,
    swcMinify: true
}