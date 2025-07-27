import CommonPurpose from '@/assets/images/workshops/common-purpose.svg'
import Imperial from '@/assets/images/workshops/imperial.svg'
import Datacamp from '@/assets/images/workshops/datacamp.svg'
import FreeCodeCamp from '@/assets/images/workshops/free-code-camp.svg'
import FutureLeaderCertificate from '@/assets/certifications/future-leader.pdf'
import DataAnalysisCertificate from '@/assets/certifications/data-analysis.png'
import AIEngineerDataScientistCertificate from '@/assets/certifications/ai-engineer-data-scientist.pdf'
import AIEngineerDeveloperCertificate from '@/assets/certifications/ai-engineer-developers.pdf'
import DSACertificate from '@/assets/certifications/DSA.png'

import type { Workshop } from './types'

const WORKSHOPS: Array<Workshop> = [
  {
    id: 4,
    key: 'datacamp-ai-developer',
    organiserLogo: Datacamp,
    certificate: AIEngineerDeveloperCertificate,
  },
  {
    id: 3,
    key: 'datacamp-ai-data-science',
    organiserLogo: Datacamp,
    certificate: AIEngineerDataScientistCertificate,
  },
  {
    id: 2,
    key: 'future-leader',
    organiserLogo: CommonPurpose,
    certificate: FutureLeaderCertificate,
  },
  {
    id: 1,
    key: 'data-analysis',
    organiserLogo: Imperial,
    certificate: DataAnalysisCertificate,
  },
  {
    id: 0,
    key: 'dsa',
    organiserLogo: FreeCodeCamp,
    certificate: DSACertificate,
  },
]

export default WORKSHOPS
