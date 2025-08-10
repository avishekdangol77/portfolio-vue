<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { leftProjects, rightProjects } from '@/constants/portfolio/projects'
import useLayout from '@/stores/layout'

import PortfolioSkeleton from '@/views/portfolio/components/PortfolioSkeleton.vue'
import ProjectColumn from './components/ProjectColumn.vue'

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
            <ProjectColumn
              :projects="leftProjects"
              :isMobile="layout.isMobile || false"
            />
          </div>

          <div class="grid auto-rows-max gap-4">
            <ProjectColumn
              :projects="rightProjects"
              :isMobile="layout.isMobile || false"
            />
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
