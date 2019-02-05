module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  env: {
    jest: true
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'error'
  },
  globals: {
    fetch: false
  }
};

// {
//   "extends": ["airbnb", "prettier"],
//   "plugins": ["prettier"],
//   "rules": {
//     "prettier/prettier": ["error"]
//   },
// }
