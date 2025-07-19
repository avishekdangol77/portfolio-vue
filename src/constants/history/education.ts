import { t } from '@/i18n'
import niit from '@/assets/certifications/NIIT.jpg'
import BBS from '@/assets/certifications/BBS.jpg'
import PGDiploma from '@/assets/certifications/PGDiploma.jpg'

export default [
  {
    id: 5,
    title: t('history.education.msc-ai.title'),
    university: t('history.education.msc-ai.university'),
    duration: t('history.education.msc-ai.duration'),
    description: [
      t('history.education.msc-ai.description-1'),
      t('history.education.msc-ai.description-2'),
      t('history.education.msc-ai.description-3'),
    ],
  },
  {
    id: 4,
    title: t('history.education.pg.title'),
    institution: t('history.education.pg.institution'),
    university: t('history.education.pg.university'),
    duration: t('history.education.pg.duration'),
    description: [
      t('history.education.pg.description-1'),
      t('history.education.pg.description-2'),
    ],
    file: PGDiploma,
  },
  {
    id: 2,
    title: t('history.education.bbs.title'),
    institution: t('history.education.bbs.institution'),
    university: t('history.education.bbs.university'),
    duration: t('history.education.bbs.duration'),
    description: [
      t('history.education.bbs.description-1'),
      t('history.education.bbs.description-2'),
    ],
    file: BBS,
  },
  {
    id: 1,
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
