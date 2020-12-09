export default {
  // Target (https://go.nuxtjs.dev/config-target)
  mode: 'spa',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Sevima Insta App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/style.css' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'
      },
    ],
    script: [
      {
        src: '/js/jquery-3.2.1.min.js',
        type: 'text/javascript'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/index.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
  ],
  axios: {
    baseURL: 'https://insta.yehezkieldeta.xyz/api',
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
