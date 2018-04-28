import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import app from './modules/app'
import getters from './getters'

export default () => {
  return new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    plugins: process.env.NODE_ENV !== 'production'
      ? [createLogger()]
      : [],
    namespaced: true,
    modules: {
      app
    },
    getters
  })
}
