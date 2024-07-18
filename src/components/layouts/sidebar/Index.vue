<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

import { Avatar } from '@/components/ui/avatar'
import SidebarButton from '@/components/common/SidebarButton.vue'

import navigations from '@/navigations/index'
import languages from '@/constants/profile/languages'
import { onGroupEnterSlideLeftAnimation, onGroupLeaveSlideRightAnimation } from '@/lib/animations'
import useLayoutStore from '@/stores/layout'
import { SheetClose } from '@/components/ui/sheet'
import useSidebar from './useSidebar'

const route = useRoute()

const { locale } = useI18n()
const { showSider } = useSidebar

/** Data Properties */
const sidebar = ref()

const layout = useLayoutStore()

/** Computed Properties */
const currentPage = computed(() => navigations.find(nav => nav.name === route.name)?.label)
const currentLocale = computed(() => locale.value)
const showingSider = computed(() => (layout.showingSidebar))
const isActiveRoute = (nav:string) => (route?.path.includes(nav) || route?.name === nav)

/** Methods */
const changeLocale = (language: string) => {
  if (locale.value !== language) {
    locale.value = language
    layout.changeLocale(language)
  }
}

</script>

<template>
  <aside
    ref="sidebar"
    class="absolute english right-0 h-full w-full md:w-[196px] sidebar-background shadow-md sidebar-closed"
  >
    <section class="relative h-[96vh]">
      <!-- Sidebar toggle button starts -->
      <SidebarButton
        class="hidden md:block"
        @show-sider="value => { showSider(sidebar, value) }"
      />
      <!-- Sidebar toggle button ends -->

      <!-- Current page title starts -->
      <div
        class="uppercase font-semibold tracking-widest text-[11px] transition ease-in-out duration-500"
        :class="{ 'opacity-0': showingSider }"
      >
        <p class="rotate-[90deg] font-semibold mt-16 w-[84px]">
          {{ currentPage }}
        </p>
      </div>
      <!-- Current page title ends -->

      <!-- navigation bar starts -->
      <nav class="absolute top-[35%]">
        <TransitionGroup
          @enter="onGroupEnterSlideLeftAnimation"
          @leave="onGroupLeaveSlideRightAnimation"
        >
          <div v-if="showingSider">
            <router-link
              v-for="navigation of navigations"
              :key="navigation.name"
              class="block p-2 nav-list mx-4 text-[11px] upp font-medium cursor-pointer hover:active-nav"
              :class="{'active-nav': isActiveRoute(navigation.name) }"
              :to="{ name: navigation.name }"
              @click="layout.toggleSidebar()"
            >
              <SheetClose class="english-font-only uppercase tracking-widest">{{ navigation.label }}</SheetClose>
            </router-link>
          </div>
        </TransitionGroup>
      </nav>
      <!-- navigation bar ends -->

      <!-- Language starts -->
      <div class="absolute bottom-7 md:bottom-0 w-full bg-[#252532] flex items-center pl-6 py-7">
        <div class="flex flex-col">
          <Avatar
            v-for="language of languages"
            :key="language.lang"
            class="english-font-only w-[24px] h-[24px] text-[10px] bg-[#191923] p-3 my-1 text-zinc-400 font-bold"
            :class="currentLocale === language.locale ? 'bg-yellow text-black' : 'hover:text-yellow transition ease-in-out duration-300 cursor-pointer'"
            @click="changeLocale(language.locale)"
          >
            {{ language.lang }}
          </Avatar>
        </div>
      </div>
      <!-- Language ends -->
    </section>
  </aside>
</template>

<style lang="scss" scoped>
@import '@/sass/sidebar.scss';
</style>
