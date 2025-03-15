const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/css/media_queries.scss', 'public/css')
    .sass('resources/css/app.scss', 'public/css')
    .sass('resources/css/_variables.scss', 'public/css')
    .version()
