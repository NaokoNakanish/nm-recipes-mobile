module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: ['plugin:vue/essential', 'standard'],

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },

  plugins: ['vue'],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },

  root: true,

  extends: [
    'plugin:vue/essential',
    'standard',
    'eslint:recommended',
    '@vue/prettier',
  ],
}
