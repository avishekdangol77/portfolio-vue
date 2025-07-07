<script lang="ts" setup>
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Card, CardDescription, CardFooter, CardHeader, CardTitle, CardContent,
} from '@/components/ui/card'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons'

import WORKSHOPS from '@/constants/home/workshops'
import useLayoutStore from '@/stores/layout'

import FileViewer from '@/components/common/FileViewer.vue'

import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { onMounted } from 'vue'

const layout = useLayoutStore()

/** Initialise Fancybox */
onMounted(() => {
  Fancybox.bind("[data-fancybox='workshop']")
})
</script>

<template>
  <section :data-locale="layout.locale">
    <h4
      class="heading font-semibold my-5 text-center md:text-left"
    >
      {{ $t('home.workshops.title') }}
    </h4>

    <!-- Workshop carousel starts -->
      <Carousel
        :opts="{
          align: 'start',
        }"
      >
        <CarouselContent>
          <CarouselItem
            v-for="workshop of WORKSHOPS"
            :key="workshop.id"
            :class="{
              'basis-1/2': !layout.isMobile,
            }"
            class="workshop"
          >
          <Card :data-locale="layout.locale" class="grid min-h-[250px] select-none m-0">
            <!-- Header starts -->
            <CardHeader>
              <CardTitle>{{ workshop.title }}</CardTitle>

                <div class="grid grid-cols-4">
                  <div
                    class="col-span-3 flex gap-1 text-stone-500"
                    :class="{ 'items-center': !layout.isMobile }"
                  >
                    <FontAwesomeIcon
                      :icon="faLocationDot"
                      :class="{ 'pt-1': layout.isMobile }"
                    />
                    <CardDescription class="english text-stone-500">
                    {{workshop.location}}
                    </CardDescription>
                  </div>

                  <div class="flex items-center gap-1 text-stone-500">
                    <FontAwesomeIcon
                      :icon="faCalendar"
                    />
                    <CardDescription class="english text-stone-500">
                    {{workshop.date}}
                    </CardDescription>
                  </div>
                </div>
            </CardHeader>
            <!-- Header ends -->

            <!-- Content starts -->
            <CardContent class="text-[#8C8C8E]">
              <p class="english">
                {{ workshop.description }}
              </p>
            </CardContent>
            <!-- Content ends -->

            <!-- Footer: Organiser Logo start -->
            <CardFooter>
              <div class="flex justify-between w-full">
                <FileViewer
                  v-if="workshop.certificate"
                  :file="workshop.certificate"
                  type="certificate"
                  fancyboxTag="workshop"
                />

                <img :src="workshop.organiserLogo" alt="Organiser Logo" class="h-8 float-right opacity-50" />
              </div>
            </CardFooter>
            <!-- Footer: Organiser Logo end -->
          </Card>
        </CarouselItem>
      </CarouselContent>

      <!-- Carousel navigations buttons start -->
      <div class="absolute right-[8px] md-right-0 -top-[4px] md:top-0">
        <CarouselPrevious />
        <CarouselNext />
      </div>
      <!-- Carousel navigations buttons end -->

    </Carousel>
    <!-- Workshop carousel ends -->
  </section>
</template>
