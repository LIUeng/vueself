const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const webpack = require('webpack');

const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    require.resolve('vue-style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: cssOptions
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        ident: 'postcss',
        plugins: [require('autoprefixer')]
      }
    }
  ];
  return loaders;
};

const setIndent = (context, localIndentName, localName) => {
  return `eng-${localName}`;
};

module.exports = {
  mode: 'development',

  entry: './src/app.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  devServer: {
    port: 6666,
    contentBase: './public',
    // open: true,
    inline: true,
    hot: true,
    stats: 'errors-only'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: getStyleLoaders({
          // importLoaders: 1,
          modules: true,
          localIdentName: '[path][name]__[local]--[hash:base64:5]',
          getLocalIdent: (context, localIdentName, localName, options) => {
            return `eng-${localName}`;
          }
        })
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'LIUeng',
      inject: true
    })
  ],

  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.js',
      '@/': path.resolve(__dirname, 'src')
    }
  }
};
