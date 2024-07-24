<script setup lang="ts">
import {
  Card, CardDescription, CardHeader, CardTitle,
} from '@/components/ui/card'
import useLayout from '@/stores/layout'

import projects from '@/constants/portfolio/projects'
import { Badge } from '@/components/ui/badge'
import { RouterLink } from 'vue-router'

const layout = useLayout()
// import { Vue3Lottie } from 'vue3-lottie'
// import UnderConstructionJSON from '@/assets/animations/underConstruction.json'

</script>

<template>
  <section class="text-white pl-4 md:pl-7 w-[98%]">
    <!-- <Vue3Lottie :animationData="UnderConstructionJSON" height="100vh" /> -->
    <h4
      :data-locale="layout.locale"
      class="heading font-semibold my-5 text-center md:text-left"
    >
      {{ $t('portfolio.title') }}
    </h4>

    <!-- Portfolio grid starts -->
    <div class="grid grid-flow-row-dense grid-cols-3 gap-4">
      <RouterLink
        v-for="project of projects"
        :key="project.id"
        :to="{name: 'project', params: { project: project.key}}"
        :class="project.class"
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
            <CardDescription class="text-stone-500">
              <p>{{ $t(`portfolio.projects.${project.key}.client`) }}</p>
              <p>{{ $t(`portfolio.projects.${project.key}.location`) }}</p>
            </CardDescription>
          </CardHeader>
        </Card>
      </RouterLink>
    </div>
    <!-- Portfolio grid ends -->
  </section>
</template>

<style lang="scss" scoped>
@import '@/sass/portfolio.scss';
</style>
