const mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

const CleanWebpackPlugin = require('clean-webpack-plugin');

mix.react('resources/js/app.js', 'public/js')
    .extract(['vue'])
    .webpackConfig({
        plugins: [
            new CleanWebpackPlugin(['public/vendors~app', 'public/images', 'public/css', 'public/js', 'public/app', 'public/*.json'], {
                root: '',
                verbose: true, // log files
                dry: false, // true for testing
                exclude: ['.htaccess', 'web.config', 'index.php', 'robots.txt', 'favicon.ico', 'css']
            }),
        ],
        resolve: {
            alias: {
                '@': path.resolve('resources'),
                '@jsSrc': path.resolve('resources/assets/js')
            }
        }
    })
    .version();

if (!mix.inProduction()) {
    mix.sourceMaps();
}

mix.mergeManifest();
