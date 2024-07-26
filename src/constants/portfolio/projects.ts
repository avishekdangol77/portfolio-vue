import type { Snapshot } from '@/views/portfolio/components/types'
import projectSnapshots from './projectSnapshots'
import type { Project } from './types'

const projects: Array<Project> = [
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
      'easy-navigation',
    ],
    url: 'https://apa-cdpstu.org',
    class: 'col-span-2 row-span-2',
  },
]

export default projects
