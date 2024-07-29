import { t } from '@/i18n'
import type { ServiceInterface } from './types'

const services: Array<ServiceInterface> = [
  {
    key: 'web-apps',
    title: t('home.services.web-apps.title'),
    description: [0, 1],
    value: 'web',
  },
  {
    key: 'mobile-apps',
    title: t('home.services.mobile-apps.title'),
    description: [0, 1],
    value: 'app',
  },
  {
    key: 'graphics',
    title: t('home.services.graphics.title'),
    description: [0, 1],
    value: 'graphics',
  },
]

export default services
