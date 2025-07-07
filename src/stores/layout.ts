import { defineStore } from 'pinia'
import type { LayoutStore } from './types'

export default defineStore('layout', {
  state: (): LayoutStore => ({
    showingSidebar: false,
    locale: localStorage.locale ?? 'en-GB',
    currentBreakpoint: 'md',
  }),
  getters: {
    isMobile(): boolean {
      return this.currentBreakpoint === 'xs' || this.currentBreakpoint === 'sm'
    },
  },
  actions: {
    toggleSidebar(show: boolean | null = null) {
      if (show !== null) this.showingSidebar = show
      else this.showingSidebar = !this.showingSidebar
    },
    changeLocale(locale: string) {
      this.locale = locale
      localStorage.setItem('locale', locale)
    },
    setBreakpoint(breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl') {
      this.currentBreakpoint = breakpoint
    },
  },
})
