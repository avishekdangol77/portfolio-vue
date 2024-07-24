import apa from '@/assets/images/projects/apa/thumbnail.png'
import registration from '@/assets/images/projects/apa/registration.png'
import dashboard from '@/assets/images/projects/apa/dashboard.png'
import carousel from '@/assets/images/projects/apa/carousel.png'
import participants from '@/assets/images/projects/apa/participants.png'
import email from '@/assets/images/projects/apa/email.png'
import type { ProjectSnapshot } from './types'

const asianPopulationAssociation: ProjectSnapshot = {
  thumbnail: apa,
  snapshots: [
    {
      src: apa,
      caption: 'Landing page',
    },
    {
      src: registration,
      caption: 'Registration page',
    },
    {
      src: dashboard,
      caption: 'Dashboard',
    },
    {
      src: carousel,
      caption: 'Dashboard - Carousel',
    },
    {
      src: participants,
      caption: 'Dashboard - Participants',
    },
    {
      src: email,
      caption: 'Dashboard - Email Editor',
    },
  ],
}

export default {
  'asian-population-association': asianPopulationAssociation,
}
