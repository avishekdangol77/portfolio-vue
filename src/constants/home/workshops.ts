import { t } from '@/i18n'
import CommonPurpose from '@/assets/images/workshops/common-purpose.svg'
import Imperial from '@/assets/images/workshops/imperial.svg'
import Datacamp from '@/assets/images/workshops/datacamp.svg'
import FutureLeaderCertificate from '@/assets/images/workshops/future-leader.pdf'
import DataAnalysisCertificate from '@/assets/images/workshops/data-analysis.png'
import AIEngineerDataScientistCertificate from '@/assets/images/workshops/ai-engineer-data-scientist.pdf'

import type { Workshop } from './types'

const WORKSHOPS: Array<Workshop> = [
  {
    id: 3,
    title: t('home.workshops.datacamp-ai-data-science.title'),
    date: t('home.workshops.datacamp-ai-data-science.date'),
    location: t('home.workshops.datacamp-ai-data-science.location'),
    description: t('home.workshops.datacamp-ai-data-science.description'),
    organiserLogo: Datacamp,
    certificate: AIEngineerDataScientistCertificate,
  },
  {
    id: 2,
    title: t('home.workshops.future-leader.title'),
    date: t('home.workshops.future-leader.date'),
    location: t('home.workshops.future-leader.location'),
    description: t('home.workshops.future-leader.description'),
    organiserLogo: CommonPurpose,
    certificate: FutureLeaderCertificate,
  },
  {
    id: 1,
    title: t('home.workshops.data-analysis.title'),
    date: t('home.workshops.data-analysis.date'),
    location: t('home.workshops.data-analysis.location'),
    description: t('home.workshops.data-analysis.description'),
    organiserLogo: Imperial,
    certificate: DataAnalysisCertificate,
  },
]

export default WORKSHOPS
