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

/*mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);*/

mix.
    sass('node_modules/bootstrap/scss/bootstrap.scss', 'public/css/bootstrap.css').

    styles('resources/css/style.css', 'public/css/style.css').

    scripts('node_modules/jquery/dist/jquery.js', 'public/js/jquery.js').

    scripts('resources/js/jquery-ui.js', 'public/js/jquery-ui.js').

    scripts('node_modules/bootstrap/dist/js/bootstrap.js', 'public/js/bootstrap.js').

    scripts('node_modules/jquery-mask-plugin/dist/jquery.mask.js', 'public/js/jquery.mask.js').

    scripts('resources/js/script.js', 'public/js/script.js').

    //copyDirectory('resources/images', 'public/images').

    version();
