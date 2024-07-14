import gsap from 'gsap'
import utils from '@/utils/common'

const showSider = (sidebar: Element, showingSider: boolean) => {
  if (showingSider) {
    gsap.to(sidebar, {
      x: 0,
      ease: 'power1.inOut',
      duration: 0.5,
    })
  } else {
    gsap.to(sidebar, {
      x: utils.isMobile() ? '100%' : '60%',
      ease: 'power1.inOut',
      duration: 0.5,
    })
  }
}

export default {
  showSider,
}
