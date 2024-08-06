<script setup lang="ts">
import { ref, type Ref } from 'vue'
import {
  Card, CardDescription, CardFooter, CardHeader, CardTitle, CardContent,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
import { Badge } from '@/components/ui/badge'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import utils from '@/utils/common'
import services from '@/constants/home/services'
import networks from '@/constants/home/networks'
import { Flip } from 'gsap/all'
import gsap from 'gsap'
import useLayout from '@/stores/layout'
import type { Network } from '@/constants/home/types'

const layout = useLayout()

gsap.registerPlugin(Flip)

const filters = [
  { title: 'All', value: null },
  ...services,
]
const selectedFilter: Ref<string|null> = ref(null)
const filteredNetworks: Ref<Network[]> = ref(networks)

/** Methods */
const goTo = (url: string) => {
  window.open(url, '_blank')
}

const filterNetwork = (filter: string|null) => {
  selectedFilter.value = filter
  const networkState = Flip.getState('.network', { props: 'display' })

  if (filter) {
    filteredNetworks.value = networks.filter(network => network.tags.includes(filter))
  } else filteredNetworks.value = networks

  gsap.from(networkState, {
    duration: 2,
    ease: 'power1.inOut',
  })
}

</script>

<template>
  <section>
    <h4
      :data-locale="layout.locale"
      class="text-[17px] heading font-semibold my-5 text-center md:text-left"
    >
      {{ $t('home.networks.title') }}
    </h4>
      <!-- Filters start -->
      <div class="filters mb-4">
        <Badge
          v-for="filter, index of filters"
          :key="index"
          class="english mr-2 mb-2 md:mb-0 cursor-pointer hover:text-[#2C2C39] transition ease-in-out duration-300"
          :class="selectedFilter === filter.value
            ? 'bg-yellow text-[#2C2C39] hover:bg-yellow'
            : 'hover:bg-[#ffd966]'"
          @click="filterNetwork(filter.value)"
        >
          {{ filter.title }}
        </Badge>
      </div>
      <!-- Filters end -->

      <!-- Network carousel starts -->
      <Carousel
        :opts="{
          align: 'start',
        }"
      >
        <CarouselContent>
          <CarouselItem
            v-for="network of filteredNetworks"
            :key="network.id"
            :class="{
              'basis-1/2': !utils.isMobile(),
            }"
            class="network"
          >
          <Card :data-locale="layout.locale" class="grid min-h-[250px] select-none m-0">
            <!-- Header starts -->
            <CardHeader>
              <div class="flex items-center">
                <Avatar class="w-[48px] h-[48px] bg-violet-300">
                  <AvatarImage :src="network.photo ?? ''" :alt="$t(`home.networks.${network.key}.name`)" />
                  <AvatarFallback>{{ network.key.toUpperCase() }}</AvatarFallback>
                </Avatar>

                <div class="ml-4">
                  <CardTitle>{{ $t(`home.networks.${network.key}.name`) }}</CardTitle>
                  <CardDescription class="english text-stone-500 mt-1">{{ $t(`home.networks.${network.key}.job`) }}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <!-- Header ends -->

            <!-- Content starts -->
            <CardContent class="text-[#8C8C8E]">
              <p
                v-for="description of network.description"
                :key="description"
                class="english mb-3"
              >
                {{ $t(`home.networks.${network.key}.description.${description}`) }}
              </p>
            </CardContent>
            <!-- Content ends -->

            <!-- Footer: Socials start -->
            <CardFooter>
              <div
                v-for="social of network.socials"
                :key="social.id"
                class="cursor-pointer mr-3"
                @click="goTo(social.url)"
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div class="rounded-full w-[24px] h-[24px] bg-zinc-300 text-[#2C2C39] centralise hover:bg-yellow transition ease-in-out duration-300">
                        <FontAwesomeIcon :icon="social.icon" />
                      </div>
                    </TooltipTrigger>

                    <TooltipContent class="english">
                      {{ social.id }}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardFooter>
            <!-- Footer: Socials end -->
          </Card>
        </CarouselItem>
      </CarouselContent>

      <!-- Carousel navigations buttons start -->
      <div class="absolute right-0 -top-[42px] md:top-0">
        <CarouselPrevious />
        <CarouselNext />
      </div>
      <!-- Carousel navigations buttons end -->

    </Carousel>
    <!-- Network carousel ends -->
  </section>
</template>
