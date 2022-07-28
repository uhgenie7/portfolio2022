module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    // Replaces the webpack rule that loads SVGs as static files to leave out SVG files for us to handle
    const indexOfRuleToRemove = config.module.rules.findIndex((rule) => rule.test.toString().includes('svg'));
    config.module.rules.splice(indexOfRuleToRemove, 1, {
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
      loader: require.resolve('file-loader'),
      options: {
        name: 'static/media/[name].[hash:8].[ext]',
        esModule: false,
      },
    });

    config.module.rules.push({
      test: /.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
