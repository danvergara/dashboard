const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          DASHBOARD_SERVER_URL: JSON.stringify(process.env.DASHBOARD_SERVER_URL),
        },
      }),
    ],
  },
};
