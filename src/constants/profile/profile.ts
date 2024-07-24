import { t } from '@/i18n/index'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
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
    label: t('skills.laravel.title'),
    id: 'laravelContainer',
    value: 90,
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
    value: 90,
    children: [
      t('skills.vue.vue-cli'),
      t('skills.vue.vuex'),
      t('skills.vue.pinia'),
    ],
  },
  {
    label: t('skills.react.title'),
    id: 'reactController',
    value: 75,
    children: [
      t('skills.react.context-api'),
      t('skills.react.hoc'),
      t('skills.react.state-management'),
    ],
  },
  {
    label: t('skills.node.title'),
    id: 'nodeController',
    value: 90,
    children: [
      t('skills.node.express'),
      t('skills.node.rest-api'),
      t('skills.node.middlewares'),
      t('skills.node.websockets'),
    ],
  },
]

const KNOWLEDGE: Array<string> = [
  t('knowledge.shadcn-ant'),
  t('knowledge.sql'),
  t('knowledge.git'),
  t('knowledge.css'),
]

const SOCIALS: Array<Social> = [
  {
    id: '@mvpstu',
    name: 'Facebook',
    icon: faFacebookF,
    url: 'https://www.facebook.com/mvpstu',
  },
  {
    id: '@avishekdangol',
    name: 'Instagram',
    icon: faInstagram,
    url: 'https://www.instagram.com/avishekdangol',
  },
]

export default {
  LANGUAGES,
  SKILLS,
  KNOWLEDGE,
  SOCIALS,
}
