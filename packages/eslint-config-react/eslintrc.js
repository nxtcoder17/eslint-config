module.exports = {
  extends: ['eslint-config-airbnb', 'plugin:react/recommended'],
  plugins: ['import', 'react'],

  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json',
    },
  },

  env: {
    node: true,
    es6: true,
    jest: true,
    browser: true,
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        moduleDirectory: ['node_modules', './src']
      },
      webpack: {
        config: './webpack.config.js',
      },
    },
  },

  globals: {
    Logger: false,
  },

  rules: {
    'import/extensions': 0,
    'import/prefer-default-export': 'off',

    'react/jsx-uses-react': 0,
    'react/jsx-uses-vars': 0,
    'react/jsx-props-no-spreading': 0,

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
