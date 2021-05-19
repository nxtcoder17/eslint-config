module.exports = {
  extends: ['eslint-config-airbnb'],
  plugins: ['import', 'react'],

  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.js',
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
      webpack: {
        config: 'webpack.config.js',
      },
    },
   },

  globals: {
    Logger: false,
  },

  rules: {
      'import/extensions': 0,
      'import/prefer-default-export': 'off',

      // React JSX
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
