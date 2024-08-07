module.exports = {
    root: true,

    env: {
        "es2021": true,
        "browser": true,
        "node": true
    },
    overrides: [
        {
            files: ["*.ts", "*.vue"],
            rules: {
                "no-undef": "off"
            }
        },
        {
            files: ['pages/**/*.vue', 'layouts/*.vue'],
            rules: {
                'vue/multi-word-component-names': 'off',
            },
        },
    ],
    extends: [
        'plugin:vue/base',
        'eslint:recommended',
        "plugin:nuxt/recommended",
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended',

    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
        "parser": "@typescript-eslint/parser",
    },
    'plugins': [
        "vue",
        "@typescript-eslint"
    ],
    rules: {
        '@typescript-eslint/indent': ['error', 4, {
            "SwitchCase": 1,
            "ignoredNodes": ['TSTypeReference, TSUnionType']
        }],
        "@typescript-eslint/no-empty-interface": "warn",
        "@typescript-eslint/quotes": ["error", "single"],
        "@typescript-eslint/semi": ["error", "always"],
        "@typescript-eslint/no-unused-vars": "off",
        'vue/no-v-for-template-key': 'off', // Vue 3 позволяет ключам быть в <template> с v-for
        'vue/no-deprecated-data-object-declaration': 'error', // Отключение устаревшего синтаксиса data() {} объекта
        'vue/no-deprecated-destroyed-lifecycle': 'error', // Устаревшие хуки destroyed и beforeDestroy
        'vue/no-deprecated-dollar-listeners-api': 'error', // Устаревшее свойство $listeners
        'vue/no-deprecated-dollar-scopedslots-api': 'error', // Устаревшее свойство $scopedSlots
        'vue/no-deprecated-events-api': 'error', // Устаревшее API событий
        'vue/no-deprecated-functional-template': 'error', // Устаревший синтаксис функциональных компонентов
        'vue/no-deprecated-html-element-is': 'error', // Устаревший атрибут 'is'
        'vue/no-deprecated-props-default-this': 'error', // Устаревшее использование 'this' в props
        'vue/no-deprecated-v-bind-sync': 'error', // Устаревший .sync модификатор для v-bind
        'vue/no-deprecated-v-on-native-modifier': 'error', // Устаревший .native модификатор для v-on
        'vue/no-deprecated-v-on-number-modifiers': 'error', // Устаревшие модификаторы v-on, принимающие числа
        'vue/no-deprecated-vue-config-keycodes': 'error', // Устаревший Vue.config.keyCodes
        'vue/no-lifecycle-after-await': 'error', // Запрет использования хуков жизненного цикла после await
        'vue/no-ref-as-operand': 'error', // Запрет использования ref в выражениях
        'vue/require-slots-as-functions': 'error', // Требование использовать функции для слотов
        'vue/require-toggle-inside-transition': 'error', // Требование использования v-show и v-if внутри <transition>
        'vue/valid-v-is': 'error', // Проверка правильности использования директивы v-is
        'object-curly-spacing': ['error', 'always'],
        'vuejs-accessibility/label-has-for': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/html-self-closing': ['error', {
            html: {
                void: 'never',
                normal: 'never',
                component: 'always'
            },
            svg: 'always',
            math: 'always'
        }],
        'vue/html-indent': [
            'error',
            2,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: []
            }
        ],
        'vue/first-attribute-linebreak': ['error', {
            singleline: 'beside',
            multiline: 'beside'
        }],
        'vue/html-button-has-type': ['error', {
            button: true,
            submit: true,
            reset: true
        }],
        'vue/max-len': ['error', {
            code: 500,
            template: 2000,
            tabWidth: 2,
            comments: 500,
            ignorePattern: '',
            ignoreComments: false,
            ignoreTrailingComments: false,
            ignoreUrls: false,
            ignoreStrings: false,
            ignoreTemplateLiterals: false,
            ignoreRegExpLiterals: false,
            ignoreHTMLAttributeValues: false,
            ignoreHTMLTextContents: false
        }],
        'vue/html-closing-bracket-spacing': ['error', {
            startTag: 'never',
            endTag: 'never',
            selfClosingTag: 'always'
        }],
        'vue/max-attributes-per-line': ['error', {
            singleline: {
                max: 1
            },
            multiline: {
                max: 1
            }
        }],
        'vue/order-in-components': ['error', {
            order: [
                'el',
                'name',
                'key',
                'parent',
                'functional',
                ['delimiters', 'comments'],
                ['components', 'directives', 'filters'],
                'extends',
                'mixins',
                ['provide', 'inject'],
                'ROUTER_GUARDS',
                'layout',
                'middleware',
                'validate',
                'scrollToTop',
                'transition',
                'loading',
                'inheritAttrs',
                'model',
                ['props', 'propsData'],
                'emits',
                'setup',
                'asyncData',
                'data',
                'fetch',
                'head',
                'computed',
                'watch',
                'watchQuery',
                'LIFECYCLE_HOOKS',
                'methods',
                ['template', 'render'],
                'renderError'
            ]
        }],
        'vue/no-irregular-whitespace': ['error', {
            skipStrings: true,
            skipComments: false,
            skipRegExps: false,
            skipTemplates: false,
            skipHTMLAttributeValues: false,
            skipHTMLTextContents: false
        }],
        'vue/component-definition-name-casing': ['error', 'PascalCase'],
        'vue/match-component-file-name': ['error', {
            extensions: ['vue'],
            shouldMatchCase: false
        }],
        'vue/no-dupe-keys': ['error', {
            groups: []
        }],
        'vue/component-name-in-template-casing': ['error', 'PascalCase', {
            registeredComponentsOnly: true
        }],
        'comma-dangle': ['error', {
            arrays: 'never',
            objects: 'never',
            imports: 'never',
            exports: 'never',
            functions: 'never'
        }],
        'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
        'no-console': 'off',
        'no-debugger': 'error',
        'arrow-parens': ['error', 'as-needed'],
        'no-plusplus': 'off',
        'constructor-super': 'off',
        'no-mixed-operators': [
            'error',
            {
                groups: [
                    ['+', '-', '*', '/', '%', '**'],
                    ['&', '|', '^', '~', '<<', '>>', '>>>'],
                    ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                    ['&&', '||'],
                    ['in', 'instanceof']
                ],
                allowSamePrecedence: true
            }
        ],
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'import/no-absolute-path': 'off',
        'no-unused-expressions': 'error',
        'no-param-reassign': 'off',
        'prefer-destructuring': ['error', {
            array: true,
            object: true
        }, {
            enforceForRenamedProperties: false
        }
        ],
        'no-bitwise': ['error', { allow: ['~'] }],
        'no-unused-vars': ['off', { argsIgnorePattern: '^_' }],// error
        'object-curly-newline': ['error', {
            ObjectExpression: {
                multiline: true,
                consistent: true
            },
            ObjectPattern: {
                multiline: true,
                consistent: true
            }
        }],
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        "vue/no-duplicate-attributes": ["error", {
            "allowCoexistClass": true,
            "allowCoexistStyle": true
        }],
        "vue/no-mutating-props": ["error", {
            "shallowOnly": false
        }],
        "vue/no-parsing-error": ["error", {
            "abrupt-closing-of-empty-comment": true,
            "absence-of-digits-in-numeric-character-reference": true,
            "cdata-in-html-content": true,
            "character-reference-outside-unicode-range": true,
            "control-character-in-input-stream": true,
            "control-character-reference": true,
            "eof-before-tag-name": true,
            "eof-in-cdata": true,
            "eof-in-comment": true,
            "eof-in-tag": true,
            "incorrectly-closed-comment": true,
            "incorrectly-opened-comment": true,
            "invalid-first-character-of-tag-name": true,
            "missing-attribute-value": true,
            "missing-end-tag-name": true,
            "missing-semicolon-after-character-reference": true,
            "missing-whitespace-between-attributes": true,
            "nested-comment": true,
            "noncharacter-character-reference": true,
            "noncharacter-in-input-stream": true,
            "null-character-reference": true,
            "surrogate-character-reference": true,
            "surrogate-in-input-stream": true,
            "unexpected-character-in-attribute-name": true,
            "unexpected-character-in-unquoted-attribute-value": true,
            "unexpected-equals-sign-before-attribute-name": true,
            "unexpected-null-character": true,
            "unexpected-question-mark-instead-of-tag-name": true,
            "unexpected-solidus-in-tag": true,
            "unknown-named-character-reference": true,
            "end-tag-with-attributes": true,
            "duplicate-attribute": true,
            "end-tag-with-trailing-solidus": true,
            "non-void-html-element-start-tag-with-trailing-solidus": false,
            "x-invalid-end-tag": true,
            "x-invalid-namespace": true
        }],
    }
};
