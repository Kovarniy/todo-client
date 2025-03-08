module.exports = {
  overrides: [
    {
      files: ['*.html'],
      plugins: ['@html-eslint'],
      parser: '@html-eslint/parser',
      extends: ['plugin:@html-eslint/recommended'],
      rules: {
        '@html-eslint/element-newline': 'error',
        '@html-eslint/indent': ['error', 2],
        '@html-eslint/no-inline-styles': 'error',
        '@html-eslint/no-multiple-empty-lines': ['error', {max: 1}],
        '@html-eslint/require-closing-tags': ['error', {selfClosing: 'always'}],
        'max-len': ['error', {code: 140}],
      },
    },
  ],
};
