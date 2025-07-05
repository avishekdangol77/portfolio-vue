<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import useLayoutStore from '@/stores/layout'

const layout = useLayoutStore()

onMounted(() => {
  gsap.from('.counter', {
    textContent: 0,
    duration: 1.5,
    ease: 'power2.out',
    snap: { textContent: 1 },
    onUpdate() {
      this.targets().forEach((target: Element) => {
        // eslint-disable-next-line no-param-reassign
        target.innerHTML = `${Math.ceil(Number.parseInt(target?.textContent ?? '0', 10))} +`
      })
    },
  })
})

</script>

<template>
  <div :data-locale="layout.locale" class="counters grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
    <!-- Experience -->
    <div class="flex items-center">
      <span class="counter english-font-only text-yellow text-[22px] font-semibold mr-5 w-[60px] md:w-[46px]">
        {{ new Date().getFullYear() - 2020 }} +
      </span>
      <h6 class="counter-text w-[48px] md:w-auto">{{ $t('counter.years-experience') }}</h6>
    </div>

    <!-- Previous Commissions -->
    <div class="flex items-center">
      <span class="counter english-font-only text-yellow text-[22px] font-semibold mr-5 w-[60px] md:w-[46px]">
        10 +
      </span>
      <h6 class="counter-text w-[48px] md:w-auto">{{ $t('counter.previous-commissions') }}</h6>
    </div>

    <!-- Happy Customers -->
    <div class="flex items-center">
      <span class="counter english-font-only text-yellow text-[22px] font-semibold mr-5 w-[60px]">
        115 +
      </span>
      <h6 class="counter-text w-[48px] md:w-auto">{{ $t('counter.happy-customers', { customers: 'u|fxsx?' }) }}</h6>
    </div>
  </div>
</template>
