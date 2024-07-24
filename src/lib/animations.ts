import gsap from 'gsap'

export const onEnterSlideUpAnimation = (classname: string): void => {
  gsap.fromTo(`.${classname}`,
    {
      y: 120,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.inOut',
      stagger: 0.15,
    })
}

// Transition Group Animations
export const onGroupEnterSlideLeftAnimation = (el: Element, done: () => void): void => {
  gsap.to(el.children, {
    x: 0,
    duration: 0.5,
    ease: 'power1.inOut',
    opacity: 1,
    stagger: 0.15,
    onComplete: done,
  })
}

export const onGroupLeaveSlideRightAnimation = (el: Element, done: () => void): void => {
  gsap.to(el.children, {
    x: 120,
    duration: 0.5,
    ease: 'power1.inOut',
    opacity: 0,
    stagger: 0.1,
    onComplete: done,
  })
}
