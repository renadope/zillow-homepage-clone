import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import * as tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'

export default [
    {
        files: ['src/**/*.{ts,tsx}'],
        languageOptions: {
            globals: {
                ...globals.browser
            },
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            }
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh
        },
        rules: {
            // TypeScript
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-empty-interface': 'off',
            '@typescript-eslint/no-inferrable-types': 'off',

            // React
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true }
            ],

            // General
            'no-console': ['warn', { allow: ['warn', 'error'] }],

            // Add Prettier's rules
            ...prettier.rules
        }
    }
]