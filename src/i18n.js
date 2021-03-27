import { createI18n } from 'vue-i18n'
import { nextTick } from 'vue'
// import router from './router'
// import ru from '@/locales/ru.json'

export const SUPPORT_LOCALES = ['en', 'ru', 'uz']

export function setupI18n(options = { locale: 'ru', globalInjection: true }) {
  const i18n = createI18n(options)
  loadLocaleMessages(i18n, options.locale)
  setI18nLanguage(i18n, options.locale)
  return i18n
}

export function setI18nLanguage(i18n, locale) {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    i18n.global.locale.value = locale
  }
  /**
   * NOTE:
   * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
   * The following is an example for axios.
   *
   * axios.defaults.headers.common['Accept-Language'] = locale
   */
  document.querySelector('html').setAttribute('lang', locale)
}

export async function loadLocaleMessages(i18n, locale) {
  // load locale messages with dynamic import
  const messages = await import(
    /* webpackChunkName: "locale-[request]" */ `./locales/${locale}.json`
  )

  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages.default)
  return nextTick()
}

export const i18n = setupI18n()

// function loadLocaleMessages() {
//   const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
//   const messages = {}
//   locales.keys().forEach(key => {
//     const matched = key.match(/([A-Za-z0-9-_]+)\./i)
//     if (matched && matched.length > 1) {
//       const locale = matched[1]
//       messages[locale] = locales(key).default
//     }
//   })
//   return messages
// }

// export const i18n = createI18n({
//   locale: process.env.VUE_APP_I18N_LOCALE || 'ru',
//   globalInjection: true,
//   fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'ru',
// })
