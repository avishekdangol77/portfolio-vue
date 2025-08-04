import { t } from '@/i18n/index'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import type { Language, Skill, Social } from './types'

const LANGUAGES: Array<Language> = [
  {
    label: 'nepali',
    id: 'nepaliContainer',
    value: 100,
  },

  {
    label: 'english',
    id: 'englishContainer',
    value: 90,
  },

  {
    label: 'hindi',
    id: 'hindiContainer',
    value: 70,
  },
]

const SKILLS: Array<Skill> = [
  {
    label: t('skills.ml.title'),
    id: 'mlContainer',
    value: 100,
    children: [
      t('skills.ml.data-exploration'),
      t('skills.ml.computer-vision'),
      t('skills.ml.natural-language-processing'),
      t('skills.ml.vector-databases'),
      t('skills.ml.semantic-search'),
      t('skills.ml.explainable-ai')
    ],
  },
  {
    label: t('skills.laravel.title'),
    id: 'laravelContainer',
    value: 100,
    children: [
      t('skills.laravel.multi-tenancy'),
      t('skills.laravel.websockets'),
      t('skills.laravel.rest-api'),
      t('skills.laravel.testing'),
    ],
  },
  {
    label: t('skills.vue.title'),
    id: 'vueController',
    value: 100,
    children: [
      t('skills.vue.vue-cli'),
      t('skills.vue.vuex'),
      t('skills.vue.pinia'),
    ],
  },
  {
    label: t('skills.react.title'),
    id: 'reactController',
    value: 100,
    children: [
      t('skills.react.context-api'),
      t('skills.react.hoc'),
      t('skills.react.state-management'),
    ],
  },
  {
    label: t('skills.node.title'),
    id: 'nodeController',
    value: 100,
    children: [
      t('skills.node.express'),
      t('skills.node.rest-api'),
      t('skills.node.middlewares'),
      t('skills.node.websockets'),
    ],
  },
]

const KNOWLEDGE: Array<string> = [
  t('knowledge.ml'),
  t('knowledge.shadcn-ant'),
  t('knowledge.sql'),
  t('knowledge.git'),
  t('knowledge.css'),
]

const SOCIALS: Array<Social> = [
  {
    id: '@avishekdangol',
    name: 'Instagram',
    icon: faInstagram,
    url: 'https://www.instagram.com/avishekdangol',
  },
  {
    id: 'dangolavishek',
    name: 'LinkedIn',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/dangolavishek',
  },
]

export default {
  LANGUAGES,
  SKILLS,
  KNOWLEDGE,
  SOCIALS,
}
