import { defineStore } from 'pinia'

export default defineStore('layout', {
  state: () => ({
    showingSidebar: false,
    locale: localStorage.locale,
  }),

  actions: {
    toggleSidebar(show: boolean | null = null) {
      if (show !== null) this.showingSidebar = show
      else this.showingSidebar = !this.showingSidebar
    },
    changeLocale(locale: string) {
      this.locale = locale
      localStorage.setItem('locale', locale)
    },
  },
})
