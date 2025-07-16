<script setup lang="ts">
import {
  onBeforeUnmount, onMounted, ref, VueElement, watch,
  type Ref,
} from 'vue'
import { t } from '@/i18n'
import Typed from 'typed.js'

import Button from '@/components/ui/button/Button.vue'
import useLayoutStore from '@/stores/layout'

const layout = useLayoutStore()

const typing: Ref<VueElement|null> = ref(null)
const typed: Ref<Typed|null> = ref(null)

/** Initialise Typed */
const initTyped = () => {
  typed.value = new Typed(typing.value, {
    strings: [
      t('home.banner.develop-models'),
      t('home.banner.develop-websites'),
    ],
    typeSpeed: 80,
    backSpeed: 25,
    loop: true,
    cursorChar: layout.locale === 'np' ? '.' : '|',
  })
}
onMounted(() => initTyped())
watch(() => layout.locale, () => {
  if (typed.value) typed.value.destroy()
  initTyped()
})
onBeforeUnmount(() => {
  if (typed.value) typed.value.destroy()
})
</script>

<template>
  <div class="banner-overlay h-[80vh] md:h-[320px] w-full py-[60px] px-[30px] md:p-[60px] text-center md:text-left">
    <h1 class="font-extrabold text-[48px] md:text-[36px] md:w-[480px] leading-[58px] md:leading-[42px]">
      {{ $t('home.banner.title') }}
    </h1>

    <p
      class="typed-code mt-4 text-[16px] h-[64px] md:h-auto"
      :data-locale="layout.locale"
    >
      <span class="english">&lt;</span>
      <span class="text-yellow english">code</span>
      <span class="english">&gt;</span>

      {{ $t('home.banner.i') }} <span ref="typing" />

      <span class="english">&lt;/</span>
      <span class="text-yellow english">code</span>
      <span class="english">&gt;</span>
    </p>

    <RouterLink :to="{name: 'portfolio'}">
      <Button
        :data-locale="layout.locale"
        class="bg-yellow mt-6 explore-btn tracking-widest text-black rounded-none py-[1.4rem] px-10 hover:border-yellow hover:text-white hover:bg-transparent"
      >
        {{ $t('actions.explore-now') }}
      </Button>
    </RouterLink>
  </div>
</template>
