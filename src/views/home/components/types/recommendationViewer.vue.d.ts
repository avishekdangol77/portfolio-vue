import type { Recommendation } from '@/constants/home/types'

// RecommendationViewer.vue.d.ts
declare module '@/views/home/components/RecommendationViewer.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent
  export default component
}

export interface RecommendationViewerProps {
  recommendation: Recommendation
}
