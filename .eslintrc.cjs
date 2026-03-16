/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/html-indent': ['error', 2, { baseIndent: 1 }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 'off',

    indent: ['error', 2, { SwitchCase: 1 }],
    semi: ['error', 'never'],
    camelcase: ['error', { properties: 'never', ignoreDestructuring: true, ignoreImports: true }],
    'arrow-parens': ['error', 'as-needed'],
    'import/extensions': 'off',
    'max-len': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      },
    },
  },
}
