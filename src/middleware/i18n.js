export default function ({ isHMR, app, store, route, params, error, redirect, req, res }) {
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return

  const currentLanguageKey = 'currentLanguage'
  let getLanguageCookie = () => {
    return (typeof document === 'undefined')
      ? req.cookies[currentLanguageKey] : new Map(document.cookie.split('; ').map(c => c.split('='))).get(currentLanguageKey)
  }

  // locale pattern
  const languagePattern = '([a-z]{2,3}|[a-z]{2,3}-[a-zA-Z]{4}|[a-z]{2,3}-[A-Z]{2,3})'
  const languageRegex = new RegExp(`^\\/${languagePattern}(?:\\/.*)?$`)

  // if locale param include
  let lang = params.lang
  if (languageRegex.test(route.fullPath)) {
    if (!app.i18n.messages.hasOwnProperty(lang)) {
      console.log('locale error !!! ')
      return error({
        message: 'This page could not be found.',
        statusCode: 404
      })
    }

    // set locale to cookie
    const maxAge = 60 * 60 * 24 * 7 // 7 days
    if (process.browser) {
      document.cookie = `${currentLanguageKey}=${lang};path=/;max-age=${maxAge}`
    } else {
      res.cookie(currentLanguageKey, lang, {
        maxAge: 1000 * maxAge // 7 days
      })
    }

    return
  }

  // locale param not include, redirect
  lang = getLanguageCookie() || app.i18n.fallbackLocale
  // If route is /... -> redirect to /:lang/...
  return redirect(
    `/${lang}` + route.fullPath.replace(/\/{2,}/, '/').replace(/\/$/, '')
  )
}
