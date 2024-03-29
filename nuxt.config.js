export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Fika(s)',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'facebook-domain-verification',
        content: '0vnpgf8gu1rit17z825bbr0bs7h7b5'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&family=Karla:wght@400;700&family=Rubik:wght@400;700&display=swap'
      }
    ],
    script: [
      {
        src: 'pixel.js',
        type: 'text/javascript'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['normalize.css/normalize.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/globalComponents.js' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['~assets/scss/index.scss']
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-i18n',
    [
      'storyblok-nuxt',
      {
        accessToken: 'HjQSMT5E6T1aBYgn4dbb5wtt',
        cacheProvider: 'memory'
      }
    ],
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ],
    'nuxt-facebook-pixel-module'
  ],
  // doc: https://github.com/WilliamDASILVA/nuxt-facebook-pixel-module
  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: '8465219136825323',
    autoPageView: true
  },
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
    cssSourceMap: true,
    extend(config, ctx) {}
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US' },
      { code: 'fr', iso: 'fr-FR' }
    ],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    seo: true,
    vueI18n: {
      fallbackLocale: 'fr',
      messages: {
        en: require('./locales/en.json'),
        fr: require('./locales/fr.json')
      }
    }
  },
  generate: {
    exclude: [
      '/evenements/archives',
      '/evenements/contact',
      '/evenements/equipe',
      '/evenements/festival',
      '/evenements/offfikas',
      '/evenements/partenaires',
      '/evenements/prog-test',
      '/evenements/programmation',
      '/evenements/support',
      '/evenements/tavata',
      '/evenements/prog2022'
    ]
  }
}
