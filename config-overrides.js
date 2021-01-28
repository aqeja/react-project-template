/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { override, adjustStyleLoaders, setWebpackPublicPath, addPostcssPlugins } = require("customize-cra");

module.exports = {
  webpack: override(
    adjustStyleLoaders((rule) => {
      if (rule.test.toString().includes("scss")) {
        rule.use.push({
          loader: require.resolve("sass-resources-loader"),
          options: {
            resources: "./src/styles/injected.scss",
          },
        });
      }
    }),
    addPostcssPlugins([require("tailwindcss"), require("autoprefixer")]),
    setWebpackPublicPath(process.env.WEBPACK_PUBLIC_PATH),
  ),
};
