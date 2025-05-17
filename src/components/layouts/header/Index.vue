<script setup>
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import { onMounted, ref } from 'vue'
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload'
import CV from '@/assets/files/CV.pdf'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import profileConstants from '@/constants/profile/profile'
import useLayoutStore from '@/stores/layout'
import Profile from './components/Profile.vue'
import Address from './components/Address.vue'
import Languages from './components/Languages.vue'
import Skills from './components/Skills.vue'

const layout = useLayoutStore()

const scrollArea = ref()
onMounted(() => {
  Scrollbar.use(OverscrollPlugin)
  Scrollbar.init(scrollArea.value, {
    renderByPixels: true,
    continuousScrolling: true,
    plugins: {
      overscroll: true,
    },
  })
})
</script>

<template>
  <section class="relative w-full sidebar-background pb-0">
    <Profile />

    <div
      ref="scrollArea"
      class="sidebar-background overflow-auto leading-6 pt-5 pb-[120px] md:pb-[32px] px-7"
      :class="$helpers.isMobile() ? 'h-[80vh]' : 'h-[520px]'"
    >
      <Address />
      <Languages />
      <Skills />
    </div>

    <div class="fixed md:absolute left-0 bottom-0 w-[290px] md:w-full h-[48px] bg-[#24242F] flex items-center justify-between">
      <div class="socials flex ml-6">
        <a
          v-for="social of profileConstants.SOCIALS"
          :key="social.id"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-white transition-colors duration-300 ease-in px-2"
        >
          <FontAwesomeIcon :icon="social.icon" class="english" />
        </a>
      </div>

      <a
        class="flex items-baseline mr-6 cursor-pointer transition-colors duration-300 ease-in hover:text-white"
        :href="CV"
        target="_blank"
        download="Avishek_Dangol_CV"
      >
        <h6
          class="cv-download-btn mr-1"
          :data-locale="layout.locale"
        >
          <span
            v-if="layout.locale === 'np'"
            class="english"
          >CV</span>

          {{ $t('profile.download-cv') }}
        </h6>
        <FontAwesomeIcon :icon="faDownload" class="english" />
      </a>
    </div>
  </section>
</template>

<style>
@import '@/sass/home.scss';
.scrollbar-track {
  opacity: 0 !important;
}
</style>
