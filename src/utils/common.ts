export default {
  getInitials: (title: string) => {
    const splittedTitle = title.split(' ')
    return splittedTitle.map(word => word[0])
      .join('')
  },
  isMobile: () => (window.innerWidth < 900),
}
