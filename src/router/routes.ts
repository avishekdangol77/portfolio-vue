export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/Index.vue'),
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('@/views/portfolio/Index.vue'),
  },
  {
    path: '/portfolio/:project',
    name: 'project',
    component: () => import('@/views/portfolio/Project.vue'),
    meta: {
      breadcrumb: ['portfolio'],
    },
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('@/views/history/Index.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/contact/Index.vue'),
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: () => import('@/views/blogs/Index.vue'),
  },
  {
    path: '/blogs/:blog',
    name: 'blog',
    component: () => import('@/views/blogs/Blog.vue'),
    meta: {
      breadcrumb: ['blogs'],
    },
  },
  {
    path: '/:catchAll(.*)',
    name: 'index',
    component: () => import('@/views/home/Index.vue'),
  },
]
