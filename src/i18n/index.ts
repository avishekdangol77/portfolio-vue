// src/i18n.js
import { createI18n } from 'vue-i18n'

// Import locale messages
import enGB from './locales/en-GB.json'
import np from './locales/np.json'

const messages = {
  'en-GB': enGB,
  np,
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: navigator.language,
  fallbackLocale: 'en-GB',
  messages,
})

export const t = (key: string) => i18n.global.t(key)

export default i18n
