const mix = require('laravel-mix');

mix.options({
    hmrOptions: {
        host: '127.0.0.1',
        port: '8072'
    },
});

mix.webpackConfig({
    devServer: {
        port: '8072'
    },
});

//
// mix.js('resources/js/app.js', 'public/js')
//     .postCss('resources/css/app.css', 'public/css');

mix.js('resources/js/app.js', 'public/js').vue()
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
