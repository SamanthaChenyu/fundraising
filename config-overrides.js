const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#1fd3e0",
      "@normal-color": "#d9d9d9",
      "@text-color": "#000000",
      "@btn-font-weight": "bold",
      "@text-color-secondary": "rgba(0, 0, 0, 0.45)",
      "@warning-color": "#2dd4e0"
    }
  })
);
