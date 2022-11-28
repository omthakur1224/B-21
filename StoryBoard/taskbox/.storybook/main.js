// .storybook/main.js

const path = require('path');
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],


  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
    options: {
      lazyCompilation: true,
    },
  },
  features: {
    interactionsDebugger: true,
    storyStoreV7: true,
  },
  //new
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },

  // webpackFinal: async (config) => {
  //   config.plugins.push(...);
  //   return config;
  // },
};
