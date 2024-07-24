import Home from '@/views/home/Index.vue'
import Portfolio from '@/views/portfolio/Index.vue'
import Contact from '@/views/contact/Index.vue'
import History from '@/views/history/Index.vue'
import Project from '@/views/portfolio/Project.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio,
  },
  {
    path: '/history',
    name: 'history',
    component: History,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/portfolio/:project',
    name: 'project',
    component: Project,
    meta: {
      breadcrumb: ['portfolio'],
    },
  },
  {
    path: '/:catchAll(.*)',
    name: 'index',
    component: Home,
  },
]
