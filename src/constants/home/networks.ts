import pp from '@/assets/images/networks/pp.jpg'
import kk from '@/assets/images/networks/kk.png'
import sd from '@/assets/images/networks/sd.jpeg'
import sm from '@/assets/images/networks/sm.png'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import type { Network, NetworkFilter } from './types'

const NETWORKS: Array<Network> = [
  {
    id: 5,
    key: 'sd',
    tags: 'web',
    photo: sd,
    socials: [
      {
        id: 'Sanjok Dangol',
        icon: faLinkedin,
        url: 'https://www.linkedin.com/in/sanjok-dangol-a7207186',
      },
    ],
  },
  {
    id: 6,
    key: 'sm',
    tags: 'web',
    photo: sm,
    socials: [
      {
        id: 'Sujip Maharjan',
        icon: faLinkedin,
        url: 'https://www.linkedin.com/in/mesujip/',
      },
    ],
  },
  {
    id: 2,
    key: 'kk',
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
]

export const NETWORKS_FILTER: Array<NetworkFilter> = [
  { title: 'All', value: null },
  { title: 'Web Development', value: 'web' },
  { title: 'Machine Learning', value: 'ml' },
  { title: 'App Development', value: 'app' },
  { title: 'Graphics', value: 'graphics' },
]

export default NETWORKS
