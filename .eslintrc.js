module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.json",
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "no-invalid-this": "error",
    "@typescript-eslint/no-mixed-enums": "error",
    "@typescript-eslint/no-duplicate-enum-values": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/ban-types": [
      "error",
      {
        "types": {
          "Object": {
            "message": "Avoid using the `Object` type. Did you mean `object`?"
          },
          "{}": {
            "message": "Avoid using `{}` as a type. Prefer a more specific type like `unknown`, or use a type annotation."
          }
        }
      }
    ]
  },
};