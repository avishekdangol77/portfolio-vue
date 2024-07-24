<script setup lang="ts">
import { onMounted } from 'vue'
import progressBar from 'progressbar.js'
import progressConstants from '@/constants/profile/progress'
import profileConstants from '@/constants/profile/profile'

onMounted(() => {
  profileConstants.LANGUAGES.forEach((language, index) => {
    const container = document.getElementById(language.id)
    const lang = new progressBar.Circle(container, {
      ...progressConstants.CIRCLE,
      duration: 1500 + (index + 1) * 200,
    })
    lang.text.style.color = 'rgb(140, 140, 142)'
    lang.text.classList.add('english')
    lang.animate(language.value / 100)
  })
})
</script>

<template>
  <div class="border-b border-zinc-700 flex justify-around pb-6 mt-8">
    <div
      v-for="language of profileConstants.LANGUAGES"
      :key="language.ref"
    >
      <div
        :id="language.id"
        class="relative w-[52px]"
      />
    <h6 class="text-white text-center mt-2">
      {{ $t(`languages.${language.label}`) }}
    </h6>
  </div>
  </div>
</template>
