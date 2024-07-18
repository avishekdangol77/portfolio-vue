import Home from '@/views/home/Index.vue'
import Portfolio from '@/views/portfolio/Index.vue'
import Contact from '@/views/contact/Index.vue'
import History from '@/views/history/Index.vue'

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
    path: '/:catchAll(.*)',
    name: 'index',
    component: Home,
  },
]
