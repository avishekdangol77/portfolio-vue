import type { Snapshot } from '@/views/portfolio/components/types'
import projectSnapshots from './projectSnapshots'
import type { Project } from './types'

export const leftProjects: Array<Project> = [
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
  },
  {
    id: 3,
    key: 'global-english-campus',
    thumbnail: projectSnapshots['global-english-campus'].thumbnail,
    snapshots: <Snapshot[]>projectSnapshots['global-english-campus'].snapshots,
    skills: ['Laravel', 'Vue JS', 'Vuex', 'REST API', 'Bootstrap Vue', 'OpenAI API'],
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
  },
]

export const rightProjects: Array<Project> = [
  {
    id: 4,
    key: 'datablock-ai',
    thumbnail: projectSnapshots['datablock-ai'].thumbnail,
    snapshots: <Snapshot[]>projectSnapshots['datablock-ai'].snapshots,
    skills: ['Django', 'Vue JS', 'PostgreSQL', 'Neo4J', 'REST Framework'],
    networks: [
      {
        id: 6,
        roles: 'Backend - Django Python',
      },
    ],
    description: [0, 1, 2],
    features: [
      'automated-ai-workflows',
      'http-support',
      'user-management',
      'graph-database',
      'llm-support',
    ],
    url: 'https://datablockai.com',
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
  },
]

export default leftProjects.concat(rightProjects)
