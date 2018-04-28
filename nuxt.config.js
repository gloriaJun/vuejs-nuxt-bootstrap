
module.exports = {
  srcDir: 'src/',
  /*
  ** Headers of the page
  */
  head: {
    title: 'frs-web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: [
    '@/plugins/i18n.js',
    '@/plugins/lodash.js',
    '@/plugins/moment.js',
    { src: '@plugins/element-ui', ssr: true },
    { src: '@plugins/global-component', ssr: true }
  ],
  /*
  ** Global CSS
  */
  css: [
    '@/assets/style/app.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Router configuration
  */
  router: {
    middleware: 'i18n'
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      // 'babel-polyfill',
      'axios',
      'vue-i18n',
      'vue-lodash',
      'vue-moment',
      'element-ui'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
