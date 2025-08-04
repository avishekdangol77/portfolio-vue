import posthog from 'posthog-js'

const usePostHog = () => {
  posthog.init('phc_HWZOmnrXGL5hk7NYY1WOziyW4AIF1JxIfo2lGw83bXK', {
    api_host: 'https://eu.i.posthog.com',
    defaults: '2025-05-24',
    person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
  })

  return { posthog }
}

export default usePostHog