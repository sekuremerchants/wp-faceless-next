const mix = require('laravel-mix');
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

require('laravel-mix-polyfill');

const productionSourceMaps = true;

mix
  .js('assets/js/src/app.js', 'assets/js/dist/app.js')
  // .js('assets/js/src/home.js', 'assets/js/dist/home.js')
  .js(
    'assets/js/src/savings-calculator.js',
    'assets/js/dist/savings-calculator.js',
  )
  // .js('assets/js/src/admin.js', 'assets/js/dist/admin.min.js')
  //.js('assets/js/src/browser-sync.js', 'assets/js/dist/browser-sync.min.js')
  .sourceMaps(productionSourceMaps, 'source-map')
  .version();

// mix
// // .js(
//   //   'assets/js/landings-blocks-ajax.js',
//   //   'assets/js/landings-blocks-ajax.min.js',
//   // )
//   .js('assets/js/ajax-plugin-reload.js', 'assets/js/ajax-plugin-reload.min.js')
//   .js('assets/js/scripts-jquery.js', 'assets/js/scripts-jquery-min.js')
//   .js('assets/js/survey-forms.js', 'assets/js/survey-forms.min.js')
//   .js('assets/js/survey-submit-ajax.js', 'assets/js/survey-submit-ajax.min.js')
//   .js('assets/js/tf-numbers-ajax.js', 'assets/js/tf-numbers-ajax.min.js')
//   .sourceMaps(productionSourceMaps, 'source-map')
//   .version();

mix
  .js('assets/js/src/theme/app.js', 'assets/js/dist/theme-scripts')
  .sourceMaps(productionSourceMaps, 'source-map')
  .extract();

mix.setPublicPath('./assets/');

mix.options({
  terser: {
    extractComments: false,
    terserOptions: {
      compress: {
        drop_console: true, // Removes console logs for production
      },
    },
  },
});

mix.autoload({
  jquery: ['$', 'window.jQuery'],
});

mix.webpackConfig({
  plugins: [],
  module: {
    rules: [
      {
        test: /\.tpl$/,
        use: ['jsmart-loader'],
        include: path.resolve(__dirname, '../'),
      },
    ],
  },

  output: {
    publicPath: './',
    filename: '[name].js',
    // chunkFilename: './[name].js?id=[chunkhash]',
    chunkFilename: './[name].js',
    path: path.resolve(__dirname, 'assets'),
  },
  resolve: {
    alias: {
      '@plugins': path.resolve(__dirname, 'assets/js/src/theme/plugins'),
    },
  },
});

mix.disableSuccessNotifications();
