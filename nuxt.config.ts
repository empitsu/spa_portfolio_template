import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  generate: {
    dir: 'functions/dist',
  },
  privateRuntimeConfig: {
    portfolioDataPath:
      process.env.PORTFOLIO_DATA_PATH || 'http://localhost:4010/portfolio-data',
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'My portfolio',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto+Slab:400,700%7CRoboto:400,700,300',
        media: 'all',
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css',
        media: 'all',
        integrity:
          'sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2',
        crossorigin: 'anonymous',
      },
    ],
    script: [
      { src: '/__/firebase/8.2.3/firebase-app.js', body: true },
      { src: '/__/firebase/8.2.3/firebase-analytics.js', body: true },
      { src: '/__/firebase/init.js', body: true },
      {
        src: 'https://kit.fontawesome.com/9d28920b83.js',
        crossorigin: 'anonymous',
        body: true,
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/vendor/bootstrapious/style.default.css',
    '~/assets/vendor/bootstrapious/style.pink.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxt/typescript-build',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {}
    postcss: {
      preset: {
        autoprefixer: {
          grid: 'autoplace',
        },
      },
    },
  },
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}',
      },
    },
  },
}

export default config
