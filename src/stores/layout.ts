import { defineStore } from 'pinia'
import type { LayoutStore } from './types'

export default defineStore('layout', {
  state: (): LayoutStore => ({
    showingSidebar: false,
    locale: localStorage.locale ?? 'en-GB',
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
