const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const notifier = require('node-notifier')

function resolve (dir) {
  return path.join(process.cwd(), dir)
}

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: resolve('./lib'),
    publicPath: '/lib/',
    filename: 'hoc-el-table.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(vue|js)(\?.*)?$/,
        loader: 'eslint-loader',
        include: resolve('src'),
        options: {
          fix: true,
          failOnError: true,
          useEslintrc: true,
          configFile: resolve('.eslintrc.js'),
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ]
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        },
        exclude: /node_modules/,
        include: resolve('src')
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            extends: resolve('babel.config.js')
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/,
        loader: 'url-loader',
        exclude: /node_modules/,
        options: {
          limit: 10000,
          esModule: false,
          name: '[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        exclude: /node_modules/,
        options: {
          limit: 10000,
          name: '[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        exclude: /node_modules/,
        options: {
          limit: 10000,
          name: '[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|woff2?|eot|ttf|otf|mp4|webm|ogg|mp3|wav|flac|aac)(\?\S*)?$/,
        loader: 'file-loader',
        include: /node_modules/,
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    inline: false,
    overlay: true,
    quiet: true
  },
  performance: {
    hints: false
  },
  devtool: 'source-map',
  plugins: [
    new VueLoaderPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new FriendlyErrorsWebpackPlugin({
      clearConsole: false,
      onErrors: (severity, errors) => {
        if (severity !== 'error') {
          return
        }
        const error = errors[0]
        notifier.notify({
          title: 'Webpack error',
          message: `${severity}: ${error.name}`,
          subtitle: error.file || ''
        })
      }
    })
  ]
}
