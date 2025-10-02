import { t } from '@/i18n'
import type { ServiceInterface } from './types'

const services: Array<ServiceInterface> = [
  {
    key: 'machine-learning',
    title: t('home.services.machine-learning.title'),
    description: [0],
    value: 'ml',
  },
  {
    key: 'web-apps',
    title: t('home.services.web-apps.title'),
    description: [0],
    value: 'web',
  },
]

export default services
