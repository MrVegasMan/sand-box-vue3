// https://nuxt.com/docs/api/configuration/nuxt-config
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { fileURLToPath, URL } from 'node:url';

export default defineNuxtConfig({
    devtools: {
        enabled: false
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            title: 'gamebazar',
            meta: [
                {
                    name: 'description',
                    content: 'We build future of web3 economy'
                },
                {
                    name: 'keywords',
                    content: 'technology, web3, economy, game, dev'
                },
                {
                    name: 'author',
                    content: 'The Game changer'
                },
                {
                    name: 'robots',
                    content: 'index, follow'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:site_name',
                    content: 'Game changer'
                }
                // { property: 'og:image', content: 'http://localhost:3000/OG/OG-Home.webp' }
            ],
            link: [
                {
                    rel: 'canonical',
                    href: 'http://localhost:3000'
                },
                {
                    rel: 'preconnect',
                    href: 'http://localhost:3000'
                },
                {
                    rel: 'dns-prefetch',
                    href: 'http://localhost:3000'
                }
                // { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
            ]
        }
    },
    components: true,
    imports: {
        autoImport: false
    },
    typescript: {
        typeCheck: process.env.NODE_ENV === 'development'
    },
    build: {
        transpile: ['pinia-plugin-persistedstate', 'gsap']
    },
    postcss: {
        plugins: {
            autoprefixer: process.env.NODE_ENV !== 'development' ? {} : false,
            cssnano:
                process.env.NODE_ENV !== 'development' ? { preset: 'default' } : false
        }
    },
    modules: [
        '@nuxt/image',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        'nuxt-typed-router',
        '@nuxtjs/color-mode',
        '@nuxt/fonts',
        'nuxt-svgo',
        'nuxt-icon',
        [
            'nuxt-swiper',
            {
                modules: ['navigation', 'pagination'],
                styleLang: 'scss'
            }
        ],
        '@vee-validate/nuxt',
        [
            '@nuxtjs/eslint-module',
            {
                cache: true,
                exclude: ['**/node_modules/**', '**/dist/**'],
                formatter: 'stylish'
            }
        ],
        [
            '@nuxtjs/stylelint-module',
            {
                configFile: '.stylelintrc.json',
                files: ['**/*.vue', '**/*.scss', '**/*.css'],
                fix: true,
                syntax: 'scss',
                emitWarning: true,
                failOnError: false
            }
        ],
        [
            'nuxt-purgecss',
            {
                enabled: process.env.NODE_ENV !== 'development',
                content: [
                    'components/**/*.vue',
                    'layouts/**/*.vue',
                    'pages/**/*.vue',
                    'plugins/**/*.js'
                ],
                styleExtensions: ['.css', '.scss'],
                safelist: [
                    'html',
                    'body',
                    'section',
                    'main',
                    /-(leave|enter|appear)(|-(to|from|active))$/,
                    /^(?!(|.*?:)cursor-move).+-move$/,
                    /^router-link(|-exact)-active$/,
                    /data-v-.*/,
                    /^swiper/,
                    /^marquee/,
                    /^vue3/,
                    /^vue3-marquee/,
                    /^vue-/,
                    /^async-/,
                    /^async/,
                    /^teleported/,
                    /^dark-mode/,
                    /^light-mode/
                ],
                extractors: [
                    {
                        extractor: (content: string) =>
                            content.match(/[A-z0-9-:\\/]+/g) || [],
                        extensions: ['html', 'vue', 'js']
                    }
                ]
            }
        ],
        'nuxt-typed-router'
    ],
    image: {
        // dir: 'assets/images',
        densities: [1, 2],
        format: ['webp', 'jpeg', 'jpg', 'png', 'gif'],
        screens: {
            xs: 320,
            sm: 576,
            md: 640,
            lg: 768,
            xl: 1200,
            xxl: 1400,
            xxxl: 1920
        }
    },
    svgo: {
        defaultImport: 'component',
        componentPrefix: 'SVG',
        // autoImportPath: false,
        autoImportPath: './assets/images/svg',
        global: false,
        svgoConfig: {
            multipass: true,
            plugins: [
                {
                    name: 'preset-default',
                    params: {
                        overrides: {
                            inlineStyles: {
                                onlyMatchedOnce: false
                            },
                            removeDoctype: false,
                            removeViewBox: false
                        }
                    }
                }
            ]
        }
    },
    fonts: {
        families: [{
            name: 'Space Grotesk',
            provider: 'google'
        }],
        defaults: {
            weights: [400, 500, 600],
            styles: ['normal', 'italic']
        },
        experimental: {
            processCSSVariables: true,
            addPreloadLinks: true
        }
    },
    alias: {
        pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs'
    },
    css: ['~/assets/styles/main.scss'],
    vite: {
        build: {
            minify: 'terser',
            terserOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: true
                }
            },
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            const libraries = [
                                'vue', '@nuxt', 'nuxt', 'axios', '@pinia', 'pinia', 'gsap',
                                'swiper', 'nuxt-swiper', 'vue-router', 'ethers', 'vee-validate', '@vee-validate', 'zod'
                            ];
                            const pattern = new RegExp('/node_modules/(' + libraries.join('|') + ')/');

                            const match = id.match(pattern);
                            if (match) {
                                return match[1].replace('@', '');
                            }
                            return id.toString().split('node_modules/')[1].split('/')[0].toString();
                        }
                    }
                }
            }
        },
        plugins: [
            ViteImageOptimizer({
                png: {
                    quality: 90
                },
                jpeg: {
                    quality: 90
                },
                jpg: {
                    quality: 90
                },
                tiff: {
                    quality: 90
                },
                gif: {},
                webp: {
                    lossless: true
                },
                avif: {
                    lossless: true
                },
                cache: false
            })
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./', import.meta.url)),
                '@assets': fileURLToPath(new URL('./assets', import.meta.url)),
                '@fonts': fileURLToPath(new URL('./assets/fonts', import.meta.url)),
                '@images': fileURLToPath(new URL('./assets/images', import.meta.url)),
                '@styles': fileURLToPath(new URL('./assets/styles', import.meta.url)),
                '@components': fileURLToPath(new URL('./components', import.meta.url)),
                '@composables': fileURLToPath(
                    new URL('./composables', import.meta.url)
                ),
                '@content': fileURLToPath(new URL('./content', import.meta.url)),
                '@layouts': fileURLToPath(new URL('./layouts', import.meta.url)),
                '@middleware': fileURLToPath(new URL('./middlewares', import.meta.url)),
                '@modules': fileURLToPath(new URL('./modules', import.meta.url)),
                '@pages': fileURLToPath(new URL('./pages', import.meta.url)),
                '@plugins': fileURLToPath(new URL('./plugins', import.meta.url)),
                '@public': fileURLToPath(new URL('./public', import.meta.url)),
                '@router': fileURLToPath(new URL('./router', import.meta.url)),
                '@types': fileURLToPath(new URL('./types', import.meta.url)),
                '@utils': fileURLToPath(new URL('./utils', import.meta.url))
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "~/assets/styles/global/_colors.scss";
                                    @import "~/assets/styles/global/_bgMod.scss";
                                    @import "~/assets/styles/global/_vars.scss";
                                    @import "~/assets/styles/global/_breakpoint.scss";
                                    @import "~/assets/styles/global/_fontSizes.scss";
                                    @import "~/assets/styles/global/_radius.scss";
                                    @import "~/assets/styles/global/_function";
                                    @import "~/assets/styles/global/_mixins.scss";`
                }
            }
        }
    }
});
