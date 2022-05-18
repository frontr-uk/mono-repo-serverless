// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

module.exports = withNx({
  nx: {
    // Set this to false if you do not want to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.optimization.splitChunks.cacheGroups = {};
      config.optimization.minimize = true;
      return config;
    },
  },
  target: 'serverless',
});

