module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    project: ['tsconfig.json'],
    createDefaultProgram: true,
  },
  plugins: ['react', 'jest'],
  parser: '@typescript-eslint/parser',
  rules: {
    // 最后一个import之后需要有一个空行
    'import/newline-after-import': 2,
    '@typescript-eslint/consistent-type-exports': [
      'error',
      {
        fixMixedExportsWithInlineTypeSpecifier: true,
      },
    ],
    '@typescript-eslint/consistent-type-imports': ['error'],
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    // 'react-hooks/rules-of-hooks': 'warn',
  },
}
