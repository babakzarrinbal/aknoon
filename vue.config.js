var manifestJSON = require("./public/manifest.json");

pwaArgs = [{
  themeColor: manifestJSON.theme_color,
  name: manifestJSON.short_name,
  msTileColor: manifestJSON.background_color,
  iconPaths: {
    favicon32: "img/pwa-icons/favicon-32x32.png",
    favicon16: "img/pwa-icons/favicon-16x16.png",
    appleTouchIcon: "img/pwa-icons/apple-touch-icon-152x152.png",
    maskIcon: "img/pwa-icons/safari-pinned-tab.svg",
    msTileImage: "img/pwa-icons/msapplication-icon-144x144.png",
  },
  workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "./src/serviceworker/service-worker.js",
      importWorkboxFrom:"local"
    },
}];
module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugin("pwa").tap(args => pwaArgs);
  },
  // pwa: {
    
    
  // },
  outputDir: "docs",
  publicPath: "/aknoon/"
};
