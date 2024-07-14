<script setup>
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
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import Badge from '@/components/ui/badge/Badge.vue'
import Button from '@/components/ui/button/Button.vue'
import { Star } from 'lucide-vue-next'

import RecommendationViewer from '@/views/home/components/RecommendationViewer.vue'

import recommendations from '@/constants/home/recommendations'
import utils from '@/utils/common'
import useLayoutStore from '@/stores/layout'

const layout = useLayoutStore()
</script>

<template>
  <section>
    <h4
      :data-locale="layout.locale"
      class="text-[17px] heading font-semibold my-5 text-center md:text-left"
    >
      {{ $t('home.recommendations.title') }}
    </h4>
    <Carousel
      :opts="{
        align: 'start',
      }"
    >
      <CarouselContent>
        <CarouselItem
          v-for="recommendation of recommendations"
          :key="recommendation.id"
          :class="{ 'basis-1/2': !utils.isMobile() }"
          class="recommendation"
        >
          <Card :data-locale="layout.locale" class="grid min-h-[380px] select-none">
            <!-- Header starts -->
            <CardHeader>
              <div class="flex items-center">
                <Avatar class="w-[48px] h-[48px] bg-violet-300">
                  <AvatarImage :src="recommendation.photo ?? ''" :alt="$t(`home.recommendations.${recommendation.key}.name`)" />
                  <AvatarFallback>{{ $helpers.getInitials(recommendation.key) }}</AvatarFallback>
                </Avatar>

                <div class="ml-4">
                  <CardTitle>
                    {{ $t(`home.recommendations.${recommendation.key}.name`) }}
                  </CardTitle>
                  <CardDescription class="mt-1 text-stone-500">
                    <div
                      v-if="recommendation.company"
                      :class="layout.locale === 'np' ? '-mb-2' : ''"
                    >
                      {{ $t(`home.recommendations.${recommendation.key}.position`) }},
                      <span class="english">{{ $t(`home.recommendations.${recommendation.key}.company`) }}</span>
                    </div>
                    {{ $t(`home.recommendations.${recommendation.key}.address`) }}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <!-- Header ends -->

            <!-- Content starts -->
            <CardContent class="h-[180px] overflow-hidden text-[#8C8C8E]">
              <p
                v-for="description of recommendation.description"
                :key="description"
                class="english mb-5"
              >
                {{ description }}
              </p>
            </CardContent>
            <!-- Content ends -->

            <!-- Footer starts -->
            <CardFooter>
              <div class="flex justify-between w-full">
                <!-- Star badge starts -->
                <Badge class="flex w-[92px] mt-3">
                  <Star
                    v-for="i in 5"
                    :key="i"
                    size="10"
                    fill="#ffc107"
                    stroke="#ffc107"
                    class="mr-1"
                  />
                </Badge>
                <!-- Star badge ends -->

                <!-- Recommendation modal starts -->
                <Dialog>
                  <DialogTrigger>
                    <Button
                      :data-locale="layout.locale"
                      variant="link"
                      class="arrow-btn text-[12px] float-right mt-4 text-zinc-400 hover:text-white transition ease-in duration-300 font-semibold hover:no-underline"
                    >
                      {{ $t('actions.read-more') }}
                    </Button>
                  </DialogTrigger>

                  <RecommendationViewer :recommendation="recommendation" />
                </Dialog>
                <!-- Recommendation modal ends -->
              </div>
            </CardFooter>
            <!-- Footer ends -->
          </Card>
        </CarouselItem>
      </CarouselContent>

      <!-- Carousel navigations buttons start -->
      <div class="absolute -top-1.5 right-0">
        <CarouselPrevious />
        <CarouselNext />
      </div>
      <!-- Carousel navigations buttons end -->

    </Carousel>
  </section>
</template>
