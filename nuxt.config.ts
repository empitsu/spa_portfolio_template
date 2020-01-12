import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto+Slab:400,700%7CRoboto:400,700,300'
      }
    ],
    script: [
      { src: '/__/firebase/7.6.1/firebase-app.js' },
      { src: '/__/firebase/7.6.1/firebase-analytics.js' },
      { src: '/__/firebase/init.js' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/vendor/bootstrap/css/bootstrap.min.css',
    '~/assets/vendor/font-awesome/css/font-awesome.min.css',
    '~/assets/vendor/animate.css/animate.css',
    '~/assets/css/style.default.css',
    '~/assets/css/style.pink.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxt/typescript-build'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
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
          grid: 'autoplace'
        }
      }
    }
  },
  typescript: {
    typeCheck: {
      eslint: true
    }
  }
}

export default config
