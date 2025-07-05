<script setup lang="ts">
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star } from 'lucide-vue-next'
import useLayoutStore from '@/stores/layout'
import { ref, watch } from 'vue'
import type { RecommendationViewerProps } from './types/recommendationViewer.vue'

const layout = useLayoutStore()

/** Props */
defineProps<RecommendationViewerProps>()

const recommendationScrollArea = ref()
watch(() => recommendationScrollArea.value, () => {
  if (recommendationScrollArea.value && recommendationScrollArea.value instanceof HTMLElement) {
    // Initialize scrollbar only once when the element is available
    console.log('initialising')
    Scrollbar.use(OverscrollPlugin)
    Scrollbar.init(recommendationScrollArea.value, {
      renderByPixels: true,
      continuousScrolling: true,
      plugins: {
        overscroll: true,
      },
    })
  }
}, { immediate: true })
</script>

<template>
  <DialogContent :data-locale="layout.locale">
    <!-- Header starts -->
    <DialogHeader>
      <div class="flex items-center text-left">
        <Avatar class="w-[60px] h-[60px] mr-4">
          <AvatarImage
            :src="recommendation.photo ?? ''"
            :alt="$t(`home.recommendations.${recommendation.key}.name`)"
          />
          <AvatarFallback>{{ $helpers.getInitials($t(`home.recommendations.${recommendation.key}.name`)) }}</AvatarFallback>
        </Avatar>

        <div :data-locale="layout.locale">
          <DialogTitle class="text-[14px]">
            {{ $t(`home.recommendations.${recommendation.key}.name`) }}
          </DialogTitle>
          <DialogDescription class="text-[10px] text-slate-400">
            <div v-if="recommendation.isCompany">
              <span v-if="recommendation.hasPosition">{{ $t(`home.recommendations.${recommendation.key}.position`) }}, </span>
              <span class="english">{{ $t(`home.recommendations.${recommendation.key}.company`) }}</span>
            </div>
            {{ $t(`home.recommendations.${recommendation.key}.address`) }}
          </DialogDescription>
          <div class="flex">
            <Star
              v-for="i in 5"
              :key="i"
              :size="10"
              fill="#ffc107"
              stroke="#ffc107"
              class="mr-1 mt-2"
            />
          </div>
        </div>
      </div>
    </DialogHeader>
    <!-- Header ends -->

    <!-- Content starts -->
    <DialogDescription>
      <div
        class="max-h-[64vh] overflow-auto"
        ref="recommendationScrollArea"
      >
        <p
          v-for="description of recommendation.description"
          :key="description"
          class="english mb-4 text-[12px] text-[#8C8C8E]"
        >
          {{ description }}
        </p>
      </div>
    </DialogDescription>
    <!-- Content ends -->
  </DialogContent>
</template>

<style lang="scss" scoped>
[data-locale='np'] {
  h2 {
    font-size: 20px;
  }

  p {
    font-size: 18px;
  }
}
</style>
