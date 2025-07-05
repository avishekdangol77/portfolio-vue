import { t } from '@/i18n'
import jeff from '@/assets/images/testimonials/jeff.png'
import izzy from '@/assets/images/testimonials/izzy.png'
import tu from '@/assets/images/testimonials/tu.png'
import type { Recommendation } from './types'

const recommendations: Array<Recommendation> = [
  {
    id: 1,
    key: 'jeff',
    description: [
      t('home.recommendations.jeff.description.0'),
      t('home.recommendations.jeff.description.1'),
      t('home.recommendations.jeff.description.2'),
      t('home.recommendations.jeff.description.3'),
    ],
    photo: jeff,
    isCompany: true,
    hasPosition: true,
  },
  {
    id: 2,
    key: 'tu',
    description: [
      t('home.recommendations.tu.description.0'),
      t('home.recommendations.tu.description.1'),
      t('home.recommendations.tu.description.2'),
      t('home.recommendations.tu.description.3'),
      t('home.recommendations.tu.description.4'),
      t('home.recommendations.tu.description.5'),
      t('home.recommendations.tu.description.6'),
    ],
    photo: tu,
    isCompany: true,
    hasPosition: false,
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
    isCompany: false,
    hasPosition: false,
  },
]

export default recommendations
