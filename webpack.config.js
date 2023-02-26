const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: './index.js',
        shop: './shop.js',
        contacts: './contacts.js',
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        hot: true,
        static: {
            directory: './dist',
            watch: true
        }
    }
};