import pp from '@/assets/images/networks/pp.jpg'
import kk from '@/assets/images/networks/kk.png'
import st from '@/assets/images/networks/st.jpeg'
import asl from '@/assets/images/networks/asl.jpg'
import sd from '@/assets/images/networks/sd.jpeg'
import sm from '@/assets/images/networks/sm.png'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import type { Network } from './types'

const networks: Array<Network> = [
  {
    id: 5,
    key: 'sd',
    description: [0],
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
    description: [0],
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
    id: 1,
    key: 'asl',
    description: [0, 1],
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
    description: [0, 1],
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
    description: [0, 1],
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
    description: [0, 1],
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
