module.exports = {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false
        }
      }
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: '(width|height)'
      }
    }
  ]
};
