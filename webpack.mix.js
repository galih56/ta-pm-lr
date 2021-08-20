const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sourceMaps()
    // .browserSync('http://127.0.0.1:8000')
    .options({
        watchOptions: {
            ignored: /node_modules/
        }
    }).react();

mix.disableNotifications();

if (mix.inProduction()) {
    mix.version();
}
    // .sass('resources/sass/app.scss', 'public/css')

//Install dibawah ini supaya bisa support experimental syntax jsx
//npm install sass-loader@^12.1.0 sass resolve-url-loader@^4.0.0 @babel/preset-react --save-dev --legacy-peer-deps
