import gsap from 'gsap'

const showSider = (sidebar: Element, showingSider: boolean, isMobile: boolean = false): void => {
  if (showingSider) {
    gsap.to(sidebar, {
      x: 0,
      ease: 'power1.inOut',
      duration: 0.5,
    })
  } else {
    gsap.to(sidebar, {
      x: isMobile ? '100%' : '60%',
      ease: 'power1.inOut',
      duration: 0.5,
    })
  }
}

export default {
  showSider,
}
