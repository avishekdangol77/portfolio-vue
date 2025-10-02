<script setup lang="ts">
import Counter from '@/components/common/Counter.vue'
import Services from '@/views/home/components/Services.vue'
import Networks from '@/views/home/components/Networks.vue'
import Recommendations from '@/views/home/components/Recommendations.vue'
import Workshops from '@/views/home/components/Workshops.vue'
import PreviousCommissions from '@/views/home/components/PreviousCommissions.vue'
import Banner from './components/Banner.vue'

</script>

<template>
  <main>
    <div class="pl-4 md:p-7 md:pr-9 text-white mx-auto">
      <div class="w-[92vw] md:w-auto h-[320px] bg-[url('@/assets/images/local/bg.jpg')] bg-center bg-cover shadow-[0_3px_8px_0_rgba(15, 15, 20, 0.2)]">
        <Banner />
        <!-- <Counter /> -->
        <Services />
        <Workshops />
        <Recommendations />
        <Networks />
        <PreviousCommissions />

        <slot name="footer" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '@/sass/home.scss';
</style>
