import { t } from '@/i18n'
import CommonPurpose from '@/assets/images/workshops/common-purpose.svg'
import Imperial from '@/assets/images/workshops/imperial.svg'
import FutureLeaderCertificate from '@/assets/images/workshops/future-leader.pdf'
import DataAnalysisCertificate from '@/assets/images/workshops/data-analysis.png'

import type { Workshop } from './types'

const WORKSHOPS: Array<Workshop> = [
  {
    id: 1,
    title: t('home.workshops.future-leader.title'),
    date: t('home.workshops.future-leader.date'),
    location: t('home.workshops.future-leader.location'),
    description: t('home.workshops.future-leader.description'),
    organiserLogo: CommonPurpose,
    certificate: FutureLeaderCertificate,
  },
  {
    id: 2,
    title: t('home.workshops.data-analysis.title'),
    date: t('home.workshops.data-analysis.date'),
    location: t('home.workshops.data-analysis.location'),
    description: t('home.workshops.data-analysis.description'),
    organiserLogo: Imperial,
    certificate: DataAnalysisCertificate,
  },
]

export default WORKSHOPS
