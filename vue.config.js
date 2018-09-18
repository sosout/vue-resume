/**
 * 参考链接：
 * https://github.com/vuejs/vue-cli/issues/1027
 */
module.exports = {
  devServer: {
    open: true,
    port: 8087
  },
  chainWebpack: config => {
    config.plugins.delete("prefetch");
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.output.filename = "js/[name].[chunkhash:5].js";
      config.output.chunkFilename = "js/[name].[chunkhash:5].js";
    }
  },
  css: {}
};
