module.exports = {
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: 'tsconfig.json',
        createDefaultProgram: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'airbnb-typescript/base',
        'plugin:prettier/recommended',
        'prettier',
      ],
      plugins: ['import'],
      rules: {
        '@angular-eslint/component-selector': [
          'error',
          {type: 'element', prefix: 'app', style: 'kebab-case'},
        ],
        '@angular-eslint/no-output-native': 'off',
        '@angular-eslint/no-input-rename': 'off',
        '@angular-eslint/no-output-rename': 'off',
        '@typescript-eslint/naming-convention': [
          'warn',
          {selector: 'typeLike', format: ['PascalCase']},
          {selector: 'enum', format: ['UPPER_CASE']},
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        '@typescript-eslint/no-loop-func': 'error',
        '@typescript-eslint/no-use-before-define': 'off',
        'arrow-body-style': [1, 'as-needed'],
        'array-callback-return': 'error',
        'arrow-parens': ['error', 'always'],
        camelcase: 'error',
        curly: [1, 'multi-line'],
        eqeqeq: 'error',
        'func-style': ['error', 'declaration', {allowArrowFunctions: true}],
        'id-length': ['error', {exceptions: ['x', 'y', 'i', 'j', '_']}],
        'import/first': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'no-confusing-arrow': ['error', {'onlyOneSimpleParam': true}],
        'no-console': ['error', {allow: ['warn', 'error', 'info']}],
        'no-else-return': ['error', {allowElseIf: false}],
        'no-eval': 'error',
        'no-empty-pattern': 'off',
        'no-duplicate-imports': 'error',
        'no-iterator': 'error',
        'no-loop-func': 'error',
        'no-nested-ternary': 'error',
        'no-param-reassign': 'off',
        'no-new-wrappers': 'error',
        'no-object-constructor': 'error',
        'no-unneeded-ternary': 'error',
        'object-shorthand': 'error',
        'one-var': ['error', 'never'],
        'prefer-arrow-callback': 'error',
        'prefer-const': [
          'error',
          {destructuring: 'any', ignoreReadBeforeAssign: false},
        ],
        'prefer-destructuring': 'off',
        'prefer-object-spread': 'error',
        'prefer-template': 'error',
        radix: 'error',
        'spaced-comment': ['error', 'always'],
        'space-in-brackets': 'off',
      },
    },
  ],
};
