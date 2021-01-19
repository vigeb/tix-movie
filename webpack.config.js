const path = require('path')

module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app'),
  },
  devServer: {
    before: function(app, server) {
      server._watch('./app/**/*.html')
    },
    contentBase: path.join(__dirname, 'app'),
    hot: true,
    port: 5000,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
    },
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          "postcss-loader",
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         [
          //           "tailwindcss",
          //           "autoprefixer",
          //         ],
          //       ],
          //     },
          //   },
          // },
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  externals: {
    jquery: 'jQuery'
  },
}