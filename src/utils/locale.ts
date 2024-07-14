import useLayoutStore from '@/stores/layout'

const localeInit = (locale:any) => {
  const layout = useLayoutStore()
  const currentLocale = layout.locale

  // eslint-disable-next-line no-param-reassign
  locale.value = currentLocale ?? 'en-GB'
}

export default localeInit
