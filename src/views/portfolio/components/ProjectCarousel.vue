<script lang="ts" setup>
import {
  ref, onMounted, watch, onBeforeUnmount,
} from 'vue'
import {
  Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from '@/components/ui/carousel'
import useLayout from '@/stores/layout'

import { Skeleton } from '@/components/ui/skeleton'

import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { MaximizeIcon } from 'lucide-vue-next'
import type { SnapshotProp } from './types'

const layout = useLayout()

/** Props */
defineProps<SnapshotProp>()

/** Carousel */
const emblaMainApi = ref<CarouselApi>()
const currentIndex = ref<number>(0)
const isLoading = ref<boolean>(true)

const onThumbClick = (index: number) => {
  if (!emblaMainApi.value) return
  currentIndex.value = index
  emblaMainApi.value.scrollTo(index)
}

const syncCurrentIndex = (event: any): void => {
  currentIndex.value = event.selectedScrollSnap()
}

watch(emblaMainApi, (embla:any) => {
  embla.on('select', syncCurrentIndex)
})

/** Initialise Fancybox */
onMounted((): void => {
  Fancybox.bind("[data-fancybox='snapshot']")
  setTimeout((): void => {
    isLoading.value = false
  }, 1500)
})

/** Destroy Embla Carousel */
onBeforeUnmount(() => {
  if (emblaMainApi.value) emblaMainApi.value.off('select', syncCurrentIndex)
})
</script>

<template>
  <div>
    <!-- Carousel skeleton starts -->
    <div
      v-if="isLoading"
      class="grid gap-4"
      :class="layout.isMobile ? 'grid-cols-1' : 'grid-cols-2'"
    >
      <div
        v-for="_, index of Array(layout.isMobile ? 1 : 2).fill({})"
        :key="index"
      >
        <Skeleton class="h-[268px] animate-pulse bg-[#515059]" />
      </div>
    </div>
    <!-- Carousel skeleton ends -->

    <!-- Carousel starts -->
    <Carousel
      v-show="!isLoading"
      :opts="{
        align: 'start',
        duration: 50,
      }"
      @init-api="(val) => emblaMainApi = val"
    >
      <!-- Snapshots starts -->
      <CarouselContent v-if="snapshots.length">
        <CarouselItem
          v-for="snapshot of snapshots"
          :key="snapshot.src"
          :class="{
            'basis-1/2': !layout.isMobile,
          }"
          class="project-snapshot"
          data-fancybox="snapshot"
          :data-src="snapshot.src"
          :data-caption="snapshot.caption"
        >
          <div class="w-full h-full overflow-hidden relative">
            <div class="maximize-btn absolute left-[24px] top-[24px] h-[24px] w-[24px] rounded-full centralise z-[10]">
              <MaximizeIcon :size="14" />
            </div>
            <img
              :src="snapshot.src"
              :alt="'Project Snapshot'"
              class="snapshot w-full h-full object-cover cursor-pointer hover:scale-125 transition ease duration-500"
            >
          </div>
        </CarouselItem>
      </CarouselContent>
      <!-- Snapshots ends -->

      <!-- Carousel navigations buttons start -->
      <div class="absolute flex left-0 -bottom-[18px]">
        <div
          v-for="_, index of snapshots.length ? snapshots.length - 1 : 1"
          :key="index"
          class="navigation-dots rounded-full h-[5px] bg-zinc-400 cursor-pointer mx-1"
          :class="currentIndex === index ? 'bg-yellow w-[20px]' : 'w-[12px]'"
          @click="onThumbClick(index)"
        />
      </div>

      <div class="absolute right-0 -bottom-[42px]">
        <CarouselPrevious />
        <CarouselNext />
      </div>
      <!-- Carousel navigations buttons end -->
    </Carousel>
    <!-- Carousel ends -->
  </div>
</template>

<style lang="scss" scoped>
.maximize-btn {
  visibility: hidden;
  cursor: pointer;
  background-color: rgba(102, 102, 153, 0.5);
  transition: all 0.3s ease-in-out;
  pointer-events: none;
}
.project-snapshot:hover .maximize-btn {
  visibility: visible;
}
.navigation-dots {
  transition: all 0.3s ease;
}
</style>
