import { t } from '@/i18n'
import jeff from '@/assets/images/testimonials/jeff.png'
import izzy from '@/assets/images/testimonials/izzy.png'
import type { Recommendation } from './types'

const recommendations: Array<Recommendation> = [
  {
    id: 1,
    key: 'jeff',
    company: t('home.recommendations.jeff.company'),
    description: [
      t('home.recommendations.jeff.description.0'),
      t('home.recommendations.jeff.description.1'),
      t('home.recommendations.jeff.description.2'),
      t('home.recommendations.jeff.description.3'),
    ],
    photo: jeff,
  },
  {
    id: 2,
    key: 'izzy',
    description: [
      t('home.recommendations.izzy.description.0'),
      t('home.recommendations.izzy.description.1'),
      t('home.recommendations.izzy.description.2'),
    ],
    photo: izzy,
  },
]

export default recommendations
