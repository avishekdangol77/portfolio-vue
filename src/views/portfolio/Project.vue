<script lang="ts" setup>
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'

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
const { t } = useI18n()

const currentProject = computed((): Project|undefined => projects.find(project => project.key === route.params.project))

// Update meta tags for social sharing
watchEffect(() => {
  if (currentProject.value) {
    const projectTitle = t(`portfolio.projects.${currentProject.value.key}.title`)
    const projectDescription = t(`portfolio.projects.${currentProject.value.key}.description.0`)
    const url = window.location.href
    const image = currentProject.value.thumbnail
    
    const metaTags: any[] = [
      { name: 'description', content: projectDescription },
      { property: 'og:title', content: projectTitle },
      { property: 'og:description', content: projectDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: url },
      { property: 'og:site_name', content: 'Avishek Dangol' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: projectTitle },
      { name: 'twitter:description', content: projectDescription },
    ]
    
    if (image) {
      metaTags.push(
        { property: 'og:image', content: new URL(image, window.location.origin).href },
        { name: 'twitter:image', content: new URL(image, window.location.origin).href }
      )
    }
    
    useHead({
      title: `${projectTitle} | Avishek Dangol`,
      meta: metaTags,
    })
  }
})
</script>

<template>
  <section
     v-if="currentProject"
    :data-locale="layout.locale"
    class="project text-white px-4 md:pl-7 w-[98%]"
  >
    <!-- Breadcrumb starts -->
    <Breadcrumb
      :breadcrumbs="$route.meta.breadcrumb"
      :currentPage="$t(`portfolio.projects.${currentProject.key}.title`)"
    />
    <!-- Breadcrumb ends -->

    <!-- Header starts -->
    <header class="flex justify-between items-center">
      <Button
        v-if="currentProject.url"
        class="text-white pl-0"
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

      <h4
        v-else
        class="heading english-font-only font-semibold my-5 text-center md:text-left"
      >
        {{ $t(`portfolio.projects.${currentProject.key}.title`) }}
      </h4>

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
      <!-- <Counter /> -->

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
