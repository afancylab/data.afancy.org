const APP_NAME    = 'Data - By Afancy';
const APP_URL     = "https://data.afancy.org";   // for dev, http://data.afancy.org.localhost:9002
const APP_Version = "v2.1.0";




export default {
  telemetry: false,
  ssr: false,
  target: 'static',
  generate: {
    dir: 'docs',
    exclude: [/test/]
  },

  head: {
    title: APP_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      // header
        // bootstrap icons
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css' }
    ],
    script: [
      // header
      // footer
    ]
  },

  css: [
  ],

  loading: {
    color: 'blue',
    failedColor: 'red',
    background: '#212529',
    height: '5px',
    continuous: true
  },

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],

  axios: {},

  pwa: {
    icon: {
      fileName: 'fnc_high.png'
    },
    manifest: {
      name: APP_NAME,
      lang: 'en',
      background_color: '#8a2be2',
      theme_color: '#8a2be2'
    },
    meta: {
      theme_color: '#8a2be2' 
    }
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    config: {}
  },

  cli: {
    badgeMessages: [APP_URL]
  },

  googleFonts: {
    display: 'swap',
    families: {
      Nosifer: true,
      Monoton: true,
      'Fredericka the Great': true
    }
  },

  publicRuntimeConfig: {
    base: {
      APP_NAME,
      APP_TITLE: " || "+APP_NAME,
      APP_URL,
      APP_Version
    }
  },

  build: {
  }
}
