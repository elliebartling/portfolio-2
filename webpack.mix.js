let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js('src/js/app.js', 'build')
    .sass('src/css/app.sass', 'build')
    .copy('src/layouts/index.html', 'build')
    .setPublicPath('build')
    .browserSync({
      proxy: false,
      server: 'build',
      files: [
        'build/api/**',
        'build/app.css',
        'build/app.js',
        'build/index.html'
      ]
    })
