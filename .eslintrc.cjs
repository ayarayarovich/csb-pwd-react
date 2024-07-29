module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:react-hooks/recommended',
        'prettier',
        'plugin:storybook/recommended'
    ],
    ignorePatterns: ['node_modules', 'public', 'dist', '.eslintrc.cjs', 'tailwind.config.js'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: __dirname
    },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
    }
}
