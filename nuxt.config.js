module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'webapp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'API Gateway Demo Servcie of SK Vision AI' }
    ],
    link: [
    ]
  },
  plugins: [
    '~/plugins/bootstrap-vue.js',
    '~/plugins/font-awesome.js'
  ],
  css: [
    '~/assets/style/app.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {
    loading: '~/components/loading/loading.vue'
  },
  modules: [
    'bootstrap-vue/nuxt',
    // Or if you have custom bootstrap CSS...
    ['bootstrap-vue/nuxt', { css: false }],
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
