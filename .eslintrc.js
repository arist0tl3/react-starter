module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'max-len': 0,
    'no-confusing-arrow': 0,
    'no-nested-ternary': 0,
    'no-return-assign': 0,
    'no-tabs': 0,
    'no-underscore-dangle': 0,
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    'react/jsx-indent': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-wrap-multilines': 0,
    'react/react-in-jsx-scope': 0,
  },
};
