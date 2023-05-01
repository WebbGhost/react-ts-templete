module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        "plugin:tailwindcss/recommended"
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'frontend/tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint', 'prettier',"tailwindcss"],
    rules: {
        'no-console': 'error',
        'react/react-in-jsx-scope': 'off',
        'prettier/prettier':'off',
        "tailwindcss/no-custom-classname":'off'
    },
};
