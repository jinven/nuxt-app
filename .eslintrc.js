module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    // 'prettier',
    // 'prettier/vue',
    // 'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    // 'prettier'
  ],
  // add your custom rules here
  rules: {
    "no-console": 0,
    "indent": ["error", 4]
    // https://prettier.io/
    // "prettier/prettier": [
    //   "error",
    //   {
    //     // auto lf(\n) crlf(\r\n) cr(\r)
    //     "endOfLine": "lf",
    //     "singleQuote": true,
    //     "trailingComma": "none",
    //     "bracketSpacing": true,
    //     "jsxBracketSameLine": true,
    //     "tabWidth": 4
    //   }
    // ]
  }
}
