module.exports = {
  extends: ['eslint-config-airbnb', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  plugins: ['import', 'react', 'prettier'],
  env: {
    node: true,
    es6: true,
    jest: true,
    browser: true,
  },
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
      'import/extensions': 0,
      'import/prefer-default-export': 0,

      // React JSX
      'react/jsx-uses-react': 0,
      'react/jsx-uses-vars': 0,
      'react/jsx-props-no-spreading': 0,
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
