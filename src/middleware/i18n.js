export default function ({ isHMR, app, store, route, params, error, redirect }) {
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return

  // Get locale from params
  const locale = params.lang || store.getters.locale
  if (!app.i18n.messages.hasOwnProperty(locale)) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }

  // Set locale
  if (locale !== store.getters.locale) {
    store.dispatch('setLanguage', locale)
    app.i18n.locale = store.getters.locale
  }

  // If route is /... -> redirect to /:lang/...
  if (!route.params.lang) {
    return redirect(
      `/${locale}` + route.fullPath.replace(/\/$/, '')
    )
  }
}
