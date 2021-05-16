const withImages = require("next-images");
module.exports = withImages({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
    });
    return config;
  },
});
// module.exports = {
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.md$/,
//       loader: "frontmatter-markdown-loader",
//     });
//     return config;
//   },
// };
