const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,

  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "/", "src"),
      },
    },
  },
  devServer: {
    open: true,
    host: "localhost",
    port: 7979,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
      },
    },
  },
});
