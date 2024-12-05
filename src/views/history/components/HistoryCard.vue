<script setup>
import { onMounted } from 'vue'
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from '@/components/ui/card'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import RecommendationViewer from '@/views/home/components/RecommendationViewer.vue'
import recommendations from '@/constants/home/recommendations'

import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

/** Props */
defineProps({
  item: {
    type: Object,
    required: true,
  },
})

/** Initialise Fancybox */
onMounted(() => {
  Fancybox.bind("[data-fancybox='certificate']")
})
</script>

<template>
  <Card class="timeline-content p-2 w-[90%] mb-8">
    <!-- Card header starts -->
    <CardHeader>
      <div class="flex">
        <!-- Icon starts -->
        <div v-if="item.icon" class="mr-1">
          <img :src="item.icon" width="36" height="36" alt="">
        </div>
        <!-- Icon ends -->

        <!-- Header details start -->
        <div class="w-full flex justify-between items-start flex-wrap">
          <div>
            <CardTitle class="english text-white mb-1">{{ item.title }}</CardTitle>
            <CardDescription class="italic text-stone-500 mb-1 md:mb-0">
              <!-- For Work Card -->
              <span v-if="item.address" class="block">{{ item.address }}</span>
              <span v-if="item.position">{{ item.position }}</span>

              <!-- For Education Card -->
              <span v-if="item.institution">{{ item.institution }}</span>
              <span v-if="item.institution && item.university">, </span>
              <span v-if="item.university">{{ item.university }}</span>
            </CardDescription>
          </div>

          <Badge class="text-stone-500">
            {{ item.duration }}
          </Badge>
        </div>
        <!-- Header details start -->
      </div>
    </CardHeader>
    <!-- Card header ends -->

    <!-- Card content starts -->
    <CardContent
      v-if="item.description"
      class="text-[#8C8C8E]"
    >
      <p
        v-for="description, index of item.description"
        :key="description"
        :class="{ 'mb-5': index !== item.description.length - 1 || item.file || item.recommendation }"
      >
        {{ description }}
      </p>

      <!-- File viewer modal starts -->
      <Dialog v-if="item.file || item.recommendation">
        <DialogTrigger>
          <Button
            variant="link"
            class="arrow-btn text-yellow text-[12px] transition ease-in duration-300 font-semibold hover:no-underline p-0"
            :data-fancybox="item.file ? 'certificate' : ''"
            :data-src="item.file"
          >
            {{ item.recommendation ? $t('actions.recommendation') : $t('actions.certificate') }}
          </Button>
        </DialogTrigger>

        <RecommendationViewer
          v-if="item.recommendation"
          :recommendation="recommendations.find(r => r.id === item.recommendation)"
        />
      </Dialog>
      <!-- File viewer modal ends -->
    </CardContent>
    <!-- Card content ends -->

  </Card>
</template>
