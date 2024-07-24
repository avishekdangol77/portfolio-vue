import type { Helper } from './types'

const helpers: Helper = {
  getInitials: (title: string): string => {
    const splittedTitle = title.split(' ')
    return splittedTitle.map(word => word[0])
      .join('')
  },
  isMobile: (): boolean => (window.innerWidth < 900),
  goToPage: (url: string): void => {
    window.open(url)
  },
}

export default helpers
