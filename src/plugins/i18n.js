import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ElementLocale from 'element-ui/lib/locale'

import * as langs from '@/locales/index'

Vue.use(VueI18n)

export default ({app, store}) => {
  const defaultLocale = 'en'
  const messages = {}
  Vue.$_.keys(langs).map(k => {
    // get element-ui locale
    let locale = require(`element-ui/lib/locale/lang/${k}`).default
    // merge with custom locale with element-ui
    locale = Vue.$_.merge(langs[k], locale)
    // merge with 'en' for default value setting (href, icon ...)
    messages[k] = (k === defaultLocale) ? locale : Vue.$_.merge(Vue.$_.cloneDeep(langs[defaultLocale]), locale)
  })

  app.i18n = new VueI18n({
    locale: store.getters.locale,
    fallbackLocale: defaultLocale,
    messages
  })

  app.i18n.path = (link) => {
    link = link.replace(/^\//, '')
    return `/${app.i18n.locale}/${link}`.replace(/\/$/, '')
  }

  // set element-ui locale setting
  ElementLocale.i18n((key, value) => app.i18n.t(key, value))
}
