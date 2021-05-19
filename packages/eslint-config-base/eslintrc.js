module.exports = {
  extends: ['eslint-config-airbnb-base'],
  plugins: ['import'],
  globals: {
    Logger: false,
  },
  rules: {
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
