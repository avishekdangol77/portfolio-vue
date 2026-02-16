<script setup lang="ts">
import { useHead } from '@vueuse/head'
import education from '@/constants/history/education'
import work from '@/constants/history/work'
import useLayout from '@/stores/layout'
import HistoryCard from '@/views/history/components/HistoryCard.vue'

const layout = useLayout()

useHead({
  title: 'Education & Work History | Avishek Dangol',
  meta: [
    { name: 'description', content: 'Explore my educational background and professional work experience in software development and machine learning.' },
    { property: 'og:title', content: 'Education & Work History | Avishek Dangol' },
    { property: 'og:description', content: 'Explore my educational background and professional work experience in software development and machine learning.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Education & Work History | Avishek Dangol' },
    { name: 'twitter:description', content: 'Educational background and professional work experience.' },
  ],
})
</script>

<template>
  <section class="english pl-4 md:pl-7 w-[98%]">
    <div class="grid md:grid-cols-2 gap-2 pt-2">
      <!-- Education starts -->
      <div>
        <h4
          :data-locale="layout.locale"
          class="heading text-[17px] text-white font-semibold my-5 text-center md:text-left"
        >
          {{ $t('history.education.title') }}
        </h4>

        <div class="timeline">
          <div
            v-for="course of education"
            :key="course.id"
            class="timeline-item"
          >
            <div class="timeline-mark-light"></div>
            <div class="timeline-mark"></div>

            <HistoryCard :item="course" />
          </div>
        </div>
      </div>
      <!-- Education ends -->

      <!-- Work history starts -->
      <div>
        <h4
          :data-locale="layout.locale"
          class="heading text-[17px] text-white font-semibold my-5 text-center md:text-left"
        >
          {{ $t('history.work.title') }}
        </h4>

        <div class="timeline">
          <div
            v-for="commission of work"
            :key="commission.id"
            class="timeline-item"
          >
            <div class="timeline-mark-light"></div>
            <div class="timeline-mark"></div>

            <HistoryCard :item="commission" />
          </div>
        </div>
      </div>
      <!-- Work history ends -->
    </div>

    <slot name="footer" />
  </section>
</template>

<style scoped>
@use '@/sass/history.scss';
</style>
