import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import usePostHog from '@/composables/usePostHog'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

const { posthog } = usePostHog()

// Track page views and transitions
let previousUrl = window.location.href

router.beforeEach((to, from, next) => {
  // Capture $pageleave for the previous page
  posthog.capture('$pageleave', {
    '$current_url': previousUrl,
  })
  next()
})

router.afterEach((to) => {
  // Capture $pageview for the new page
  const currentUrl = window.location.href
  posthog.capture('$pageview', {
    '$current_url': currentUrl,
  })
  previousUrl = currentUrl
})

export default router