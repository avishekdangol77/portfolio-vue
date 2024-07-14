<script setup>
import { computed, watch } from 'vue'
import useLayoutStore from '@/stores/layout'

const layout = useLayoutStore()

const emit = defineEmits(['show-sider'])

/** Sidebar Animation */
const showingSider = computed(() => (layout.showingSidebar))
watch(showingSider, value => {
  emit('show-sider', value)
})
</script>

<template>
  <div class="bg-[#252531] h-[70px]">
    <div
      class="ham-btn flex flex-col justify-center items-center w-[80px] h-[80px] cursor-pointer"
      @click="layout.toggleSidebar()"
    >
      <span class="line" :class="{ 'line-1': showingSider }" />
      <span class="line" :class="{ 'line-2': showingSider }" />
      <span class="line" :class="{ 'line-3': showingSider }" />
    </div>
  </div>
</template>
