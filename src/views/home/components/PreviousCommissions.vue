<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import Autoplay from 'embla-carousel-autoplay'

import commissions from '@/constants/home/commissions'
import useLayoutStore from '@/stores/layout'
import { ref } from 'vue'

const layout = useLayoutStore()

const hoveredCommission = ref<number | null>(null)
</script>

<template>
  <div>
    <h4
      :data-locale="layout.locale"
      class="heading text-[17px] font-semibold my-5 text-center md:text-left"
    >
      {{ $t('home.previous-commissions.title') }}
    </h4>
    <Carousel
      :opts="{
        align: 'start',
      }"
      :plugins="[Autoplay({
        delay: 4000,
      })]"
    >
      <CarouselContent>
        <CarouselItem
          v-for="commission of commissions"
          :key="commission.id"
          :class="layout.isMobile ? 'basis-1/3' : 'basis-1/6'"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div
                      class="h-20 w-20 cursor-default hover:grayscale-0 transition-all duration-500"
                  :class="{
                    'cursor-pointer': commission.url,
                    'grayscale': hoveredCommission && hoveredCommission !== commission.id,
                    'drop-shadow-[0_4px_4px_rgba(138,43,226,0.5)]': hoveredCommission === commission.id,
                  }"
                  @click="commission.url ? $helpers.goToPage(commission.url) : ''"
                  @mouseover="hoveredCommission = commission.id"
                  @mouseleave="hoveredCommission = null"
                >
                  <img class="h-full w-full object-contain" :src="commission.logo" alt="">
                </div>
              </TooltipTrigger>

              <TooltipContent class="english">
                {{ commission.name }}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CarouselItem>
      </CarouselContent>

      <div class="absolute -top-1.5 right-[8px] md-right-0">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  </div>
</template>
