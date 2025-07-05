import wz from '@/assets/images/commissions/wz.svg'
import gec from '@/assets/images/commissions/gec.png'
import autonomous from '@/assets/images/commissions/autonomous.png'
import apa from '@/assets/images/commissions/apa.png'
import dbai from '@/assets/images/commissions/dbai.png'
import dbros from '@/assets/images/commissions/dbros.png'
import type { Commission } from './types'

const commissions: Array<Commission> = [
  {
    id: 7,
    name: 'DataBlock AI',
    logo: dbai,
    url: 'https://datablockai.com',
  },
  {
    id: 1,
    name: 'Workzone1',
    logo: wz,
    url: 'https://workzone1.com',
  },
  {
    id: 2,
    name: 'Global English Campus',
    logo: gec,
    url: 'https://globalenglishcampus.com',
  },
  {
    id: 3,
    name: 'Asian Population Association',
    logo: apa,
  },
  {
    id: 4,
    name: 'Autonomous Technology',
    logo: autonomous,
  },
  {
    id: 5,
    name: 'DBROS Technology',
    logo: dbros,
  },
]

export default commissions
