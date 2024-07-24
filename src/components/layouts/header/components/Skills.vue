<script setup lang="ts">
import progressBar from 'progressbar.js'
import { onMounted } from 'vue'
import progressConstants from '@/constants/profile/progress'
import profileConstants from '@/constants/profile/profile'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion'
import { onEnterSlideUpAnimation } from '@/lib/animations'

onMounted(() => {
  profileConstants.SKILLS.forEach((skill, index) => {
    const skillBar = new progressBar.Line(`#${skill.id}`, {
      ...progressConstants.LINE,
      duration: 1500 + (index + 1) * 200,
    })
    skillBar.text.style.color = 'rgb(140, 140, 142)'
    skillBar.text.classList.add('english')
    skillBar.animate(skill.value / 100)
  })
})
</script>

<template>
  <div class="skills">
    <!-- Major Skills -->
    <div class="border-b border-zinc-700 pb-6 mt-8">
      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="skill of profileConstants.SKILLS"
          :key="skill.label"
          class="mb-4 border-0"
          :value="skill.label"
        >
          <AccordionTrigger
            class="py-0 hover:text-white hover:no-underline"
            @click="onEnterSlideUpAnimation(`${skill.id}-skills`)"
          >
            <div class="flex flex-col items-start border-0">
              <p class="text-white english">{{ skill.label }}</p>
              <div :id="skill.id" />
            </div>
          </AccordionTrigger>

          <AccordionContent class="mt-4">
            <div
              v-for="child of skill.children"
              :key="child"
              class="mb-1"
              :class="`${skill.id}-skills`"
            >
              <FontAwesomeIcon :icon="faCheck" class="text-green-500 mx-2" />
              <span class="english text-gray-400 text-[12px]">{{ child }}</span>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>

    <!-- Minor Skills -->
    <div class="border-b border-zinc-700 pb-6 mt-8">
      <div
        v-for="knowledge of profileConstants.KNOWLEDGE"
        :key="knowledge"
      >
        <div class="flex items-center">
          <FontAwesomeIcon :icon="faCheck" class="text-yellow english mr-1" />
          <p class="english">{{ knowledge }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.skills .progressbar-text {
  left: 95% !important;
  top: -12px !important;
}
</style>
