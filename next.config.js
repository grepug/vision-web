const { config } = require("dotenv");

config({ path: ".env.development" });

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });

    return config;
  },
  rewrites: async () => {
    return [
      {
        source: "/blog",
        destination: "https://blog.getvisionapp.com",
      },
      {
        source: process.env.NEXT_PUBLIC_GRAPHQL_URI,
        destination: process.env.NEXT_PUBLIC_REAL_GRAPHQL_URI,
      },
    ];
  },
};
