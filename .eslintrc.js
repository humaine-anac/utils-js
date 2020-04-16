module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    "curly": ["error", "all"],
    "indent": "off",
    "@typescript-eslint/brace-style": ["error", "stroustrup"],
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/semi": ["error"],
    "@typescript-eslint/explicit-function-return-type": ["error"]
  }
}
