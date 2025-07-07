import type { Helper } from './types'

const helpers: Helper = {
  /**
   * Extracts and returns the initials from a given title or name.
   * @param {string} title - The title or name to extract initials from
   * @returns {string} The initials as a concatenated string
   * @example
   * getInitials("John Doe") // returns "JD"
   */
  getInitials: (title: string): string => {
    const splittedTitle = title.split(' ')
    return splittedTitle.map(word => word[0])
      .join('')
  },

  /**
   * Opens a URL in a new browser window or tab.
   * @param {string} url - The URL to open
   * @returns {void}
   * @example
   * goToPage("https://example.com") // opens the URL in a new window/tab
   */
  goToPage: (url: string): void => {
    window.open(url)
  },
}

export default helpers
