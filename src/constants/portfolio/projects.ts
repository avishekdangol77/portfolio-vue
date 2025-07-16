import type { Snapshot } from '@/views/portfolio/components/types'
import projectSnapshots from './projectSnapshots'
import type { Project } from './types'

const projects: Array<Project> = [
  {
    id: 2,
    key: 'workzone',
    thumbnail: projectSnapshots.workzone.thumbnail,
    snapshots: <Snapshot[]>projectSnapshots.workzone.snapshots,
    skills: ['Laravel', 'Vue JS', 'GraphQL', 'Firebase Cloud Messaging', 'Vuex', 'Bootstrap Vue', 'Express JS', 'REST API', 'Primus', 'Mediasoup'],
    networks: [
      {
        id: 6,
        roles: 'Backend - Laravel',
      },
    ],
    description: [0, 1, 2],
    features: [
      'time-tracking-system',
      'chat-microservice',
      'user-management',
      'cloud-storage',
      'data-visualisation',
      'payroll-system',
      'cms',
      'advanced-reporting',
      'crm',
    ],
    url: 'https://workzone1.com',
    class: 'col-span-2 row-span-2',
  },
  {
    id: 3,
    key: 'global-english-campus',
    thumbnail: projectSnapshots['global-english-campus'].thumbnail,
    snapshots: <Snapshot[]>projectSnapshots['global-english-campus'].snapshots,
    skills: ['Laravel', 'Vue JS', 'REST API', 'Bootstrap Vue'],
    networks: [
      {
        id: 5,
        roles: 'Backend - Laravel',
      },
    ],
    description: [0, 1, 2],
    features: [
      'lms',
      'gen-ai-integration',
      'chat',
      'advanced-reporting',
      'data-visualisation',
      'user-management'
    ],
    url: 'https://globalenglishcampus.com',
    class: 'col-span-2 row-span-2',
  },
  {
    id: 1,
    key: 'asian-population-association',
    thumbnail: projectSnapshots['asian-population-association'].thumbnail,
    clientAbbr: true,
    clientUrl: 'https://www.cdps.edu.np',
    googleMapUrl: 'https://maps.app.goo.gl/reDRSqxP9nZkos859',
    snapshots: <Snapshot[]>projectSnapshots['asian-population-association'].snapshots,
    skills: ['Laravel', 'React JS', 'REST API', 'Ant Design', 'Tailwind CSS'],
    networks: [
      {
        id: 2,
        roles: 'Frontend - ReactJS',
      },
      {
        id: 3,
        roles: 'Frontend - ReactJS',
      },
    ],
    description: [0, 1, 2],
    features: [
      'online-payment-system',
      'data-visualisation',
      'beautiful-user-interface',
      'cms',
      'smooth-user-experience',
      'user-management',
    ],
    url: 'https://apa-cdpstu.org',
    class: 'col-span-1 row-span-1',
  },
]

export default projects
