const withPWA = require("next-pwa");

module.exports = withPWA({
    pwa: {
        dest: "public",
        register: true,
        mode: 'production',
        skipWaiting: true,
    },
    compress: true,
    webpack5: false,
});