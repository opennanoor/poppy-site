module.exports = {
    semi: false,
    singleQuote: true,
    trailingComma: 'es5',
    overrides: [
      {
        files: '*.vue',
        options: {
          parser: 'vue',
        },
      },
    ],
  };
  