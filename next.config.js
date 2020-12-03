const { config } = require("dotenv");

const { parsed: DEV } = config({ path: ".env.development" });

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
        source: DEV.NEXT_PUBLIC_GRAPHQL_URI,
        destination: DEV.NEXT_PUBLIC_REAL_GRAPHQL_URI,
      },
    ];
  },
};
