const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          VUE_APP_DASHBOARD_SERVER_URL: JSON.stringify(process.env.VUE_APP_DASHBOARD_SERVER_URL),
        },
      }),
    ],
  },
};
