import apa from '@/assets/images/projects/apa/thumbnail.png'
import apaRegistration from '@/assets/images/projects/apa/registration.png'
import apaDashboard from '@/assets/images/projects/apa/dashboard.png'
import apaCarousel from '@/assets/images/projects/apa/carousel.png'
import apaParticipants from '@/assets/images/projects/apa/participants.png'
import apaEmail from '@/assets/images/projects/apa/email.png'
import apaUsers from '@/assets/images/projects/apa/users.png'
import wz from '@/assets/images/projects/wz/thumbnail.png'
import wzHome from '@/assets/images/projects/wz/home.png'
import wzScreenshots from '@/assets/images/projects/wz/screenshots.png'
import wzReports from '@/assets/images/projects/wz/reports.png'
import wzCloudStorage from '@/assets/images/projects/wz/cloudStorage.png'
import wzAccounts from '@/assets/images/projects/wz/accounts.png'
import wzChat from '@/assets/images/projects/wz/chat.png'
import wzCRM from '@/assets/images/projects/wz/crm.png'
import wzTour from '@/assets/images/projects/wz/tour.png'
import wzLocalisation from '@/assets/images/projects/wz/localisation.png'
import type { ProjectSnapshot } from './types'

const asianPopulationAssociation: ProjectSnapshot = {
  thumbnail: apa,
  snapshots: [
    {
      src: apa,
      caption: 'Landing page',
    },
    {
      src: apaRegistration,
      caption: 'Registration page',
    },
    {
      src: apaDashboard,
      caption: 'Dashboard',
    },
    {
      src: apaCarousel,
      caption: 'Dashboard - Carousel',
    },
    {
      src: apaParticipants,
      caption: 'Dashboard - Participants',
    },
    {
      src: apaEmail,
      caption: 'Dashboard - Email Editor',
    },
    {
      src: apaUsers,
      caption: 'Dashboard - User Management',
    },
  ],
}

const workzone: ProjectSnapshot = {
  thumbnail: wz,
  snapshots: [
    {
      src: wz,
      caption: 'Landing page',
    },
    {
      src: wzHome,
      caption: 'Homepage',
    },
    {
      src: wzTour,
      caption: 'Full website tour',
    },
    {
      src: wzScreenshots,
      caption: 'Screenshots captured from tracker app',
    },
    {
      src: wzReports,
      caption: 'Work reports',
    },
    {
      src: wzCloudStorage,
      caption: 'Cloud storage - file manager',
    },
    {
      src: wzCRM,
      caption: 'Client relationship management',
    },
    {
      src: wzAccounts,
      caption: 'Accounts - Salary management with fund transfers, withdrawals and account-to-account sharings',
    },
    {
      src: wzChat,
      caption: 'Chat Microservice - private chat, group chat and audio / video calls',
    },
    {
      src: wzLocalisation,
      caption: 'Localisation',
    },
  ],
}

export default {
  'asian-population-association': asianPopulationAssociation,
  workzone,
}
