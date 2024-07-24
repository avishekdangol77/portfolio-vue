<script setup lang="ts">
import { RouterView } from 'vue-router'
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import DisableScroll from '@/utils/disableScrollPlugin'
import {
  ref, watch, computed, nextTick, onBeforeUnmount, getCurrentInstance, onBeforeMount,
  type Ref,
} from 'vue'
import gsap from 'gsap'
import useLayoutStore from '@/stores/layout'

import { useI18n } from 'vue-i18n'

import { Card, CardContent } from '@/components/ui/card'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

import Header from '@/components/layouts/header/Index.vue'
import Sidebar from '@/components/layouts/sidebar/Index.vue'
import Preloader from '@/components/layouts/preloader/Index.vue'
import SidebarButton from '@/components/common/SidebarButton.vue'

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import utils from '@/utils/common'

import localeInit from './utils/locale'

const { locale } = useI18n()

const instance = getCurrentInstance()

const appScrollArea = ref()
const scrollbar = ref()
const currentSidebar = ref<'right'|'left'>()
const layout = useLayoutStore()
const currentLocale = computed((): string => layout.locale)

const getYear = computed((): number => (new Date().getFullYear()))
const currentPath = computed((): string|undefined => (instance?.proxy?.$route.path))

/** Preloader */
const showLoader: Ref<boolean> = ref(true)
const preloaderComplete: Ref<boolean> = ref(false)

watch(preloaderComplete, (value: boolean) => {
  if (value) {
    showLoader.value = false

    nextTick(() => {
      Scrollbar.use(DisableScroll)
      Scrollbar.use(OverscrollPlugin)
      scrollbar.value = Scrollbar.init(appScrollArea.value, {
        renderByPixels: true,
        continuousScrolling: true,
        damping: 0.05,
      })

      scrollbar.value.track.yAxis.element.remove()
      scrollbar.value.track.xAxis.element.remove()
    })
  }
})

/** Scroll to top on page change */
watch(currentPath, (value: string|undefined) => {
  if (value && scrollbar.value) scrollbar.value.scrollTo(0, 0, 1000)
})

/** Change Locale */
watch(currentLocale, () => {
  localeInit(locale)
})

/** Sidebar Animation */
const slideMainView = (slideLeft: boolean): void => {
  gsap.to(appScrollArea.value, {
    x: (!utils.isMobile() && slideLeft) ? -120 : 0,
    duration: 0.5,
    opacity: slideLeft ? 0.5 : 1,
    ease: 'power1.inOut',
    pointerEvents: slideLeft ? 'none' : 'auto',
  })
}

const showingSidebar = computed((): boolean => (layout.showingSidebar))
watch(showingSidebar, (value: boolean) => {
  slideMainView(value)
})
const showSider = (): void => {
  currentSidebar.value = 'right'
  layout.toggleSidebar(true)
}

/** Lifecycle Hooks */
onBeforeMount((): void => {
  localeInit(locale)
})

onBeforeUnmount((): void => {
  if (scrollbar.value) {
    scrollbar.value.destroy()
  }
})
</script>

<template>
  <section :data-locale="layout.locale" class="screen-box h-screen w-screen bg-[#191923]">
    <!-- Preloader starts -->
    <Preloader
      v-if="showLoader"
      @loader-complete="preloaderComplete = true"
    />
    <!-- Preloader ends -->

    <Sheet v-else>
      <!-- Mobile Topbar starts -->
      <div class="block md:hidden flex justify-between items-center">
        <SheetTrigger
          class="w-full h-[64px] dark-background flex content-between"
          @click="currentSidebar = 'left'"
        >
          <FontAwesomeIcon :icon="faEllipsisV" class="text-[16px] p-[30px]" />
        </SheetTrigger>

        <SheetTrigger @click="showSider">
          <SidebarButton />
        </SheetTrigger>
      </div>
      <!-- Mobile Topbar ends -->

      <div
        class="relative flex shadow-xl rounded-md justify-between h-[96vh] w-[100vw] md:w-[97.5vw] overflow-hidden dark-background md:m-4"
      >
        <!-- Header / Left side starts -->
         <div v-if="utils.isMobile() ">
          <SheetContent
            v-if="currentSidebar === 'left'"
            side="left"
            class="p-0"
          >
            <Header class="min-w-[290px] max-w-[290px]" />
          </SheetContent>
         </div>

        <Header v-else class="min-w-[290px] max-w-[290px]" />
        <!-- Header / Left side ends -->

        <div class="box flex-grow flex">
          <!-- Main content starts -->
          <div ref="appScrollArea" class="md:pr-[72px] md:w-[92vw]">
            <div class="top-bg">
              <div class="top-bg-overlay" />
            </div>

            <RouterView v-slot="{ Component }">
              <Transition name="fade" mode="out-in">
                <component :is="Component" class="relative">
                  <template #footer>
                    <footer class="mt-4 pb-16 md:pb-0">
                      <Card>
                        <CardContent class="pb-4">
                          <div class="flex justify-between items-center text-[11px] text-zinc-400 pt-4">
                            <div class="flex items-center">
                              <p class="english">&copy; {{ getYear }} &nbsp;</p>
                              <h6>{{ $t('profile.name') }}</h6>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </footer>
                  </template>
                </component>
              </Transition>
            </RouterView>
          </div>
          <!-- Main content ends -->

          <!-- Sidebar navigation starts -->
          <div v-if="utils.isMobile()">
            <SheetContent
              v-if="currentSidebar === 'right'"
              class="p-0 dark-background w-[200px]"
              @closed="layout.toggleSidebar(false)"
            >
              <Sidebar
                v-click-away="() => { layout.toggleSidebar(false) }"
              />
            </SheetContent>
          </div>

          <Sidebar
            v-else
            v-click-away="() => { layout.toggleSidebar(false) }"
          />
          <!-- Sidebar navigation ends -->
        </div>
      </div>
    </Sheet>
  </section>
</template>

<style>
@import '@/sass/common.scss';

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

[data-locale="np"] {
  h6:not(.english) {
    font-size: 16px;
  }
}
</style>
