const { defineConfig } = require("@vue/cli-service");
const DefinePlugin = require("webpack").DefinePlugin;

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    plugins: [
      new DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false", // 注释掉开发环境的警告
      }),
    ],
  },
});
