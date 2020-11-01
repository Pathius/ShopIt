module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/recommended'
  ],
  plugins: ['vue'],
  rules: {
    semi: [2, 'never'],
    curly: ['error', 'multi-line'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off'
  }
}
