module.exports = {
  snapshot: {
    widths: [420, 1400],
    'min-height': 840,
    'percy-css': `
      [data-percy-hidden] {
        display: none;
      }
    `,
  },
  agent: {
    'asset-discovery': {
      'allowed-hostnames': ['https://fonts.gstatic.com'],
    },
  },
};
