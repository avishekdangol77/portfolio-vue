<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {
  Card, CardDescription, CardHeader, CardTitle,
} from '@/components/ui/card'

import { leftProjects, rightProjects } from '@/constants/portfolio/projects'
import { Badge } from '@/components/ui/badge'
import { RouterLink } from 'vue-router'
import useLayout from '@/stores/layout'

import PortfolioSkeleton from '@/views/portfolio/components/PortfolioSkeleton.vue'

const layout = useLayout()
const isLoading = ref<boolean>(true)

onMounted((): void => {
  setTimeout((): void => {
    isLoading.value = false
  }, 1500)
})

</script>

<template>
  <div class="text-white pl-4 md:pl-7 w-[98%]">
    <div class="min-h-[84vh]">
      <!-- Skeleton starts -->
      <PortfolioSkeleton v-if="isLoading" />
      <!-- Skeleton ends -->

      <!-- Main content starts -->
      <section v-show="!isLoading">
        <!-- <Vue3Lottie :animationData="UnderConstructionJSON" height="100vh" /> -->
        <h4
          class="english-font-only heading font-semibold my-5 text-center md:text-left"
        >
          {{ $t('portfolio.title') }}
        </h4>

        <!-- Portfolio grid starts -->
        <div class="grid gap-4" :class="layout.isMobile ? 'grid-cols-1' : 'grid-cols-[3fr_2fr]'">
          <div class="grid gap-4">
            <RouterLink
              v-for="project of leftProjects"
              :key="project.id"
              :to="{name: 'project', params: { project: project.key}}"
              :class="layout.isMobile ? 'pr-2' : ''"
              class="group"
            >
              <Card
                class="shadow-md cursor-pointer hover:ring ring-offset-2 ring-offset-zinc-500 ring-slate-700 hover:contrast-[1.1] hover:saturate-[1.1] transition ease duration-500"
              >
                <img
                  :src="project.thumbnail"
                  :alt="$t(`portfolio.projects.${project.key}.title`)"
                >
                <CardHeader class="pt-4">
                  <CardTitle class="flex justify-between items-center">
                    <span class="english-font-only font-semibold">{{ $t(`portfolio.projects.${project.key}.title`) }}</span>
                    <Badge class="text-stone-500">{{ $t(`portfolio.projects.${project.key}.duration`) }}</Badge>
                  </CardTitle>
                  <CardDescription class="text-stone-500 group-hover:text-stone-400 transition duration-300 ease">
                    <h6>{{ $t(`portfolio.projects.${project.key}.client`) }}</h6>
                    <h6>{{ $t(`portfolio.projects.${project.key}.location`) }}</h6>
                  </CardDescription>
                </CardHeader>
              </Card>
            </RouterLink>
          </div>

          <div class="grid auto-rows-max gap-4">
            <RouterLink
              v-for="project of rightProjects"
              :key="project.id"
              :to="{name: 'project', params: { project: project.key}}"
              :class="layout.isMobile ? 'pr-2' : ''"
              class="group"
            >
              <Card
                class="shadow-md cursor-pointer hover:ring ring-offset-2 ring-offset-zinc-500 ring-slate-700 hover:contrast-[1.1] hover:saturate-[1.1] transition ease duration-500"
              >
                <img
                  :src="project.thumbnail"
                  :alt="$t(`portfolio.projects.${project.key}.title`)"
                >
                <CardHeader class="pt-4">
                  <CardTitle class="flex justify-between items-center">
                    <span class="english-font-only font-semibold">{{ $t(`portfolio.projects.${project.key}.title`) }}</span>
                    <Badge class="text-stone-500">{{ $t(`portfolio.projects.${project.key}.duration`) }}</Badge>
                  </CardTitle>
                  <CardDescription class="text-stone-500 group-hover:text-stone-400 transition duration-300 ease">
                    <h6>{{ $t(`portfolio.projects.${project.key}.client`) }}</h6>
                    <h6>{{ $t(`portfolio.projects.${project.key}.location`) }}</h6>
                  </CardDescription>
                </CardHeader>
              </Card>
            </RouterLink>
          </div>
        </div>
        <!-- Portfolio grid ends -->
      </section>
      <!-- Main content ends -->
    </div>

    <slot name="footer" />
  </div>
</template>

<style lang="scss" scoped>
@import '@/sass/portfolio.scss';
</style>
