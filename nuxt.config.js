// function myRandom() {
//   var temp = Math.floor(Math.random() * 5);
//   console.log('sanyam', temp);
//   return temp;
// }
const env = require('dotenv').config()

// console.log(Math.floor(Math.random() * 5));
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  env: env.parsed,
  head: {
    title: 'test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // Math.floor(Math.random() * 5) > 1 ? '~/assets/scss/custom-green.scss' : '~/assets/scss/custom-red.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/bootstrap.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
