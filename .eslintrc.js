module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  plugin: ['react-native', 'react'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
