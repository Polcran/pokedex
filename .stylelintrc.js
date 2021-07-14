module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier'
  ],
  syntax: 'scss',
  plugins: [
    'stylelint-order'
	],
  rules: {
    'color-named': 'never',
    'font-weight-notation': 'numeric',
    'order/properties-alphabetical-order': true,
    'at-rule-no-unknown': null,
    'font-weight-notation': 'numeric'
  },
}
