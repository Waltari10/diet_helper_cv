module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react"
  ],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "comma-dangle": ["warn", "always-multiline"],
    "indent": ["warn", 2, { MemberExpression: 0, SwitchCase: 1 }],
    "react/jsx-no-undef": 1,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/prop-types": 0,
    "react/display-name": 0,
    "object-shorthand": 2,
    "no-array-constructor": 2,
    "array-bracket-spacing": 2,
    "object-curly-spacing": ["error", "always", { "objectsInObjects": false }],
    "standard/object-curly-even-spacing": 0,
    "semi": ["error", "never"],
    "react/jsx-indent": [2, 2],
    "react/self-closing-comp": 2,
    "react/no-unused-state": 2,
    "react/no-unused-prop-types": 2,
    "react/no-redundant-should-component-update": 2,
    "react/no-deprecated": 2,
    "react/jsx-boolean-value": 2,
    "react/jsx-curly-spacing": 2,
    "react/jsx-indent-props": [2, 2],
    "eqeqeq": ["error", "smart"],
    "react/prefer-stateless-function": 0,
    "class-methods-use-this": 0,
    "no-plusplus": 0,
    "react/sort-comp": 0,
    "prefer-destructuring": 0
  }
}