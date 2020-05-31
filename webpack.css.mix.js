const mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

mix.sass('resources/sass/app.scss', 'public/css')
    .webpackConfig({
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
