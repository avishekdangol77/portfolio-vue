import { t } from '@/i18n'
import covidIcon from '@/assets/icons/lockdown.png'

export default [
  {
    id: 1,
    title: t('history.work.grw.title'),
    position: t('history.work.grw.position'),
    duration: t('history.work.grw.duration'),
    description: [
      t('history.work.grw.description-1'),
    ],
  },
  {
    id: 1,
    title: t('history.work.gec.title'),
    position: t('history.work.gec.position'),
    duration: t('history.work.gec.duration'),
    description: [
      t('history.work.gec.description-1'),
    ],
    recommendation: 1, // Recommendation id
  },
  {
    id: 7,
    title: t('history.work.apa.title'),
    position: t('history.work.apa.position'),
    duration: t('history.work.apa.duration'),
    description: [
      t('history.work.apa.description-1'),
      t('history.work.apa.description-2'),
      t('history.work.apa.description-3'),
    ],
  },
  {
    id: 2,
    title: t('history.work.autonomous.title'),
    position: t('history.work.autonomous.position'),
    duration: t('history.work.autonomous.duration'),
    description: [
      t('history.work.autonomous.description-1'),
    ],
  },
  {
    id: 3,
    title: t('history.work.covid.title'),
    position: t('history.work.covid.position'),
    duration: t('history.work.covid.duration'),
    icon: covidIcon,
  },
  {
    id: 4,
    title: t('history.work.ics.title'),
    position: t('history.work.ics.position'),
    duration: t('history.work.ics.duration'),
    description: [
      t('history.work.ics.description-1'),
    ],
  },
  {
    id: 5,
    title: t('history.work.freelance.title'),
    position: t('history.work.freelance.position'),
    duration: t('history.work.freelance.duration'),
    description: [
      t('history.work.freelance.description-1'),
    ],
  },
  {
    id: 6,
    title: t('history.work.dbros.title'),
    position: t('history.work.dbros.position'),
    duration: t('history.work.dbros.duration'),
    description: [
      t('history.work.dbros.description-1'),
    ],
  },
]
