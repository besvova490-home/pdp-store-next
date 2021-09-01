const withImages = require("next-images");

module.exports = withImages({
  images: {
      domains: ["picsum.photos"]
  },
  webpack(config, options) {
      return config;
  }
});

module.exports = {
  reactStrictMode: true,
};
