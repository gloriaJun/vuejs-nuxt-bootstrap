import * as types from '../mutation-types'

const app = {
  state: {
    locale: 'en'
  },
  mutations: {
    [types.SET_LANGUAGE] (state, payload) {
      state.locale = payload
    }
  },
  actions: {
    setLanguage ({ commit }, language) {
      commit('SET_LANGUAGE', language)
    }
  }
}

export default app
