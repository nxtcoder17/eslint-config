module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json',
    },
  },

  extends: ['airbnb', 'airbnb/hooks', "plugin:prettier/recommended", 'plugin:react/recommended'],
  plugins: ['react', 'import', 'prettier'],


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
    'react/react-in-jsx-scope': 0,

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
