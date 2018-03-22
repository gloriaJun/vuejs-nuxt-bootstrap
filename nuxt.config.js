const resolve = (dir) => require('path').join(__dirname, dir)

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vuejs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui' },
      { hid: 'description', name: 'description', content: 'VueJS Prototype with Nuxt' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  srcDir: resolve('src/'),
  plugins: [
    '~/plugins/bootstrap-vue.js',
    '~/plugins/font-awesome.js',
    '~/plugins/i18n.js',
    '~/plugins/lodash.js'
  ],
  css: [
    {src: '~/assets/style/app.scss', lang: 'scss'},
    {src: 'bootstrap-vue/dist/bootstrap-vue.css', lang: 'css'}
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {
    loading: '~/components/loading/loading.vue'
  },
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '~/plugins/bootstrap-vue.js'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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
