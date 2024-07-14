import { t } from '@/i18n/index'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default {
  LANGUAGES: [
    {
      label: 'nepali',
      np: '',
      id: 'nepaliContainer',
      value: 100,
    },

    {
      label: 'english',
      np: 'c+u|]hL',
      id: 'englishContainer',
      value: 90,
    },

    {
      label: 'hindi',
      np: '',
      id: 'hindiContainer',
      value: 70,
    },
  ],

  SKILLS: [
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
        t('skills.react.state-management'),
      ],
    },
    {
      label: t('skills.bootstrap.title'),
      id: 'bootstrapController',
      value: 90,
      children: [
      ],
    },
  ],

  KNOWLEDGE: [
    t('knowledge.shadcn-ant'),
    t('knowledge.sql'),
    t('knowledge.git'),
    t('knowledge.css'),
  ],

  SOCIALS: [
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
  ],
}
