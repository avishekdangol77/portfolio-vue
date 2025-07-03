<script lang="ts" setup>
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import RecommendationViewer from '@/views/home/components/RecommendationViewer.vue'
import type { Recommendation } from '@/constants/home/types'

defineProps<{
  file: string | null,
  recommendation?: Recommendation | null,
  type: 'recommendation' | 'certificate',
  fancyboxTag?: string,
}>()
</script>

<template>
  <!-- File viewer modal starts -->
  <Dialog v-if="file || recommendation">
    <DialogTrigger>
      <Button
        variant="link"
        class="arrow-btn text-yellow text-[12px] transition ease-in duration-300 font-semibold hover:no-underline p-0"
        :data-fancybox="fancyboxTag || ''"
        :data-src="file"
      >
        {{ type === 'recommendation' ? $t('actions.recommendation') : $t('actions.certificate') }}
      </Button>
    </DialogTrigger>

    <RecommendationViewer
      v-if="recommendation"
      :recommendation="recommendation"
    />
  </Dialog>
</template>
