module.exports = function(webpackConfig) {
  webpackConfig.module.loaders.find(
    loader => loader.loader === "babel"
  ).query.plugins = [["import", [{ libraryName: "antd", style: "css" }]]];
  return webpackConfig;
};
