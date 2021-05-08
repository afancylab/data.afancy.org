let APP_Name    = 'database-of-countries';
let APP_URL     = "";
let APP_URL_API = "";



export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: APP_Name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', href: '/core/images/logo/title_red.png' },
      // header
        // bootstrap
          { rel: 'stylesheet', href: '/core/bootstrap_v5/css/bootstrap.min.css' }, // bootstrap  5.0.0-beta3
    ],
    script: [
      // footer
        // bootstrap
          { src: "/core/bootstrap_v5/js/bootstrap.bundle.min.js", body: true }, // bootstrap 5.0.0-beta3
    ]
  },
  loading: {
    color: 'blue',
    failedColor: 'red',
    background: '#212529',
    height: '5px',
    continuous: true,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: APP_Name,
      lang: 'en',
      background_color: 'blue',
      theme_color: 'blue'
    },
    meta: {
      theme_color: 'blue' 
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },


  publicRuntimeConfig: {
    env: {
      APP_Name: APP_Name,
      APP_TITLE: " || "+APP_Name,
      APP_URL,
      APP_URL_API,
    }
  }
}
