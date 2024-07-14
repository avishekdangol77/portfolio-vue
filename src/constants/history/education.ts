import { t } from '@/i18n'
import dsa from '@/assets/files/DSA.png'
import niit from '@/assets/files/NIIT.jpg'

export default [
  {
    id: 1,
    title: t('history.education.pg.title'),
    institution: t('history.education.pg.institution'),
    university: t('history.education.pg.university'),
    duration: t('history.education.pg.duration'),
    description: [
      t('history.education.pg.description-1'),
      t('history.education.pg.description-2'),
    ],
  },
  {
    id: 2,
    title: t('history.education.dsa.title'),
    institution: t('history.education.dsa.institution'),
    duration: t('history.education.dsa.duration'),
    description: [
      t('history.education.dsa.description-1'),
      t('history.education.dsa.description-2'),
    ],
    file: dsa,
  },
  {
    id: 3,
    title: t('history.education.bbs.title'),
    institution: t('history.education.bbs.institution'),
    university: t('history.education.bbs.university'),
    duration: t('history.education.bbs.duration'),
    description: [
      t('history.education.bbs.description-1'),
      t('history.education.bbs.description-2'),
    ],
  },
  {
    id: 3,
    title: t('history.education.swift.title'),
    institution: t('history.education.swift.institution'),
    university: t('history.education.swift.university'),
    duration: t('history.education.swift.duration'),
    description: [
      t('history.education.swift.description-1'),
      t('history.education.swift.description-2'),
    ],
    file: niit,
  },
]
