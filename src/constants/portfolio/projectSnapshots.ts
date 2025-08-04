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
import gec from '@/assets/images/projects/gec/thumbnail.png'
import dbai from '@/assets/images/projects/dbai/thumbnail.png'
import dbaiHomepage from '@/assets/images/projects/dbai/homepage.png'
import dbaiInteractiveWorkflowTest from '@/assets/images/projects/dbai/interactive-workflow-test.png'
import dbaiResponseExplorerDetail from '@/assets/images/projects/dbai/response-explorer-detail.png'
import dbaiResponseExplorer from '@/assets/images/projects/dbai/response-explorer.png'
import dbaiUpdateNode from '@/assets/images/projects/dbai/update-node.png'


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

const globalEnglishCampus: ProjectSnapshot = {
  thumbnail: gec,
  snapshots: [
    {
      src: gec,
      caption: 'Landing page',
    },
  ],
}

const datablockAi: ProjectSnapshot = {
  thumbnail: dbai,
  snapshots: [
    {
      src: dbai,
      caption: 'Landing page',
    },
    {
      src: dbaiHomepage,
      caption: 'Homepage',
    },
    {
      src: dbaiUpdateNode,
      caption: 'Update Node - manage AI workflows',
    },
    {
      src: dbaiInteractiveWorkflowTest,
      caption: 'Interactive chat to test the AI workflow',
    },
    {
      src: dbaiResponseExplorer,
      caption: 'Response Explorer - view AI responses',
    },
    {
      src: dbaiResponseExplorerDetail,
      caption: 'Response Explorer Detail - view and manage AI responses',
    },
  ],
}

export default {
  'asian-population-association': asianPopulationAssociation,
  'global-english-campus': globalEnglishCampus,
  'datablock-ai': datablockAi,
  workzone,
}
