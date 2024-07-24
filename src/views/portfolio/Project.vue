<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import Breadcrumb from '@/components/common/Breadcrumb.vue'
import { Badge } from '@/components/ui/badge'

import useLayout from '@/stores/layout'
import projects from '@/constants/portfolio/projects'
import Counter from '@/components/common/Counter.vue'
import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
import ProjectCarousel from './components/ProjectCarousel.vue'
import ProjectContent from './components/ProjectContent.vue'
import type { Project } from '@/constants/portfolio/types'

const route = useRoute()
const layout = useLayout()

const currentProject = computed((): Project|undefined => projects.find(project => project.key === route.params.project))
</script>

<template>
  <section
    :data-locale="layout.locale"
    class="project text-white px-4 md:pl-7 w-[98%]"
  >
    <!-- Breadcrumb starts -->
    <Breadcrumb
      :breadcrumbs="$route.meta.breadcrumb"
      currentPage="Asian Population Association"
    />
    <!-- Breadcrumb ends -->

    <div v-if="currentProject">
      <!-- Header starts -->
      <header class="flex justify-between items-center">
        <Button
          class="text-white"
          variant="link"
          @click="currentProject?.url ? $helpers.goToPage(currentProject.url) : ''"
        >
          <h4
            class="heading english-font-only font-semibold my-5 text-center md:text-left"
          >
            {{ $t(`portfolio.projects.${currentProject.key}.title`) }}
            <FontAwesomeIcon :icon="faExternalLink" />
          </h4>
        </Button>

        <Badge>
          <h4
            class="text-stone-400"
            :class="{ 'text-lg': layout.locale === 'np' }"
          >
            {{ $t(`portfolio.projects.${currentProject.key}.duration`) }}
          </h4>
        </Badge>
      </header>
      <!-- Header ends -->

      <!-- Main content starts -->
      <main>
        <ProjectCarousel :snapshots="currentProject?.snapshots ?? []" />
        <ProjectContent
          class="mt-12"
          :project="currentProject"
        />
      </main>
      <!-- Main content ends -->

      <!-- Footer starts -->
      <footer class="pt-8">
        <Counter />

        <section :class="`w-full h-[415px] md:h-[280px] centralise flex-col bg-[url('@/assets/images/local/bg.jpg')] overflow-hidden bg-cover bg-center -mb-[16px]`">
          <div class="banner-overlay w-full h-full p-[40px] md:p-[60px] text-center">
            <h3 class="font-extrabold text-[46px] leading-tight md:text-4xl">{{ $t('portfolio.order') }}</h3>
            <h6
              class="font-monospace my-6"
              :class="layout.locale === 'np' ? '' : 'tracking-widest text-[15px]'"
            >
              {{ $t('portfolio.work-together') }}
            </h6>

            <Button
              :data-locale="layout.locale"
              class="explore-btn bg-yellow text-[11px] font-semibold text-black rounded-none py-[1.4rem] px-10 border-yellow hover:text-white hover:bg-transparent"
              :class="layout.locale === 'np' ? '' : 'tracking-widest'"
            >
              {{ $t('actions.contact-me') }}
            </Button>
          </div>
        </section>
        <slot name="footer" />
      </footer>
      <!-- Footer ends -->
    </div>
  </section>
</template>

<style lang="scss">
.project {
  .font-monospace {
    font-family: "Courier Prime", monospace;
  }
  [data-locale='np'] {
    .font-monospace {
      font-size: 20px;
    }
  }
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.2;
    }
  }
}
</style>
