module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb/base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // 'no-console': 'off',
    // 'import/prefer-default-export': 'off',
    // 'indent': [2, 'tab'],
    'max-len': ['error', 160, {'ignoreUrls': true}],
    
  },
};
