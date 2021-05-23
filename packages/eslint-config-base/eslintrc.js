module.exports = {
  extends: ['eslint-config-airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['import', 'prettier'],
  globals: {
    Logger: false,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        moduleDirectory: ['node_modules', './src']
      },
    },
  },
  rules: {
      "prettier/prettier": ["error", {"singleQuote": true }],
      camelcase: ['error', { ignoreDestructuring: true, properties: 'never' }],
     'no-underscore-dangle': 0,
     'no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
     ],
  },
};
