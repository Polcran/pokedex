module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier'
  ],
  syntax: 'scss',
  plugins: [
    'stylelint-order',
    'stylelint-z-index-value-constraint'
	],
  rules: {
    'color-named': 'never',
    'font-weight-notation': 'numeric',
    'order/properties-alphabetical-order': true,
    'at-rule-no-unknown': null,
    'font-weight-notation': 'numeric',
    'plugin/z-index-value-constraint': {
      'min': 0,
      'max': 60
    },
  },
}
