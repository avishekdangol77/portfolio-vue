import pp from '@/assets/images/networks/pp.jpg'
import kk from '@/assets/images/networks/kk.png'
import st from '@/assets/images/networks/st.jpeg'
import asl from '@/assets/images/networks/asl.jpg'
import { t } from '@/i18n'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import type { Network } from './types'

const networks: Array<Network> = [
  {
    id: 1,
    key: 'asl',
    description: [
      t('home.networks.asl.description-1'),
      t('home.networks.asl.description-2'),
    ],
    photo: asl,
    socials: [
      {
        id: '@_shresthaashish_',
        icon: faInstagram,
        url: '',
      },
    ],
    tags: 'graphics',
  },
  {
    id: 2,
    key: 'kk',
    description: [
      t('home.networks.kk.description-1'),
      t('home.networks.kk.description-2'),
    ],
    photo: kk,
    socials: [
      {
        id: '@iamkumud_khatiwada',
        icon: faInstagram,
        url: 'https://www.instagram.com/iamkumud_khatiwada',
      },
    ],
    tags: 'web',
  },
  {
    id: 3,
    key: 'pp',
    description: [
      t('home.networks.pp.description-1'),
      t('home.networks.pp.description-2'),
    ],
    photo: pp,
    socials: [
      {
        id: 'Pawan Pulami',
        icon: faLinkedin,
        url: 'https://www.linkedin.com/in/pawan-pulami-magar-b81427272/',
      },
    ],
    tags: 'web',
  },
  {
    id: 4,
    key: 'st',
    description: [
      t('home.networks.st.description-1'),
      t('home.networks.st.description-2'),
    ],
    photo: st,
    socials: [
      {
        id: 'Sanjay Tandukar',
        icon: faLinkedin,
        url: 'https://www.linkedin.com/in/sanjay-tandukar-71847618a/',
      },
    ],
    tags: 'app',
  },
]

export default networks
