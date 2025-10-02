<script setup lang="ts">
import {
  Card, CardDescription, CardFooter, CardHeader, CardTitle,
} from '@/components/ui/card'
import services from '@/constants/home/services'
import projects from '@/constants/portfolio/projects'
import useLayoutStore from '@/stores/layout'
import { onMounted } from 'vue'
import gsap from 'gsap'

const layout = useLayoutStore()
const sortedProjects = [...projects].sort((a, b) => b.id - a.id)

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
  <section :data-locale="layout.locale">
    <div class="flex justify-between">
      <h4
        :data-locale="layout.locale"
        class="heading font-semibold my-5 text-center md:text-left"
      >
        {{ $t('home.services.title') }}
      </h4>

      <div class="flex items-center">
        <span class="counter english-font-only text-yellow text-[22px] font-semibold mr-5 w-[60px] md:w-[46px]">
          {{ new Date().getFullYear() - 2020 }} +
        </span>
        <h6 class="counter-text w-[48px] md:w-auto">{{ $t('counter.years-experience') }}</h6>
      </div>
    </div>

    <div class="w-full grid md:grid-cols-2 gap-8">
      <Card
        v-for="service of services"
        :key="service.title"
        class="p-2"
      >
        <CardHeader>
          <CardTitle class="english mb-3">{{ service.title }}</CardTitle>
          <CardDescription>
            <p
              v-for="description, index of service.description"
              :key="description"
              :class="index !== service.description.length - 1 ? 'mb-4' : ''"
              class="english description"
            >
              {{ $t(`home.services.${service.key}.description.${description}`) }}
            </p>
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <RouterLink
            :to="{ name: 'project', params: { project: sortedProjects.find(project => project.field === service.value)?.key } }"
            class="text-yellow font-semibold arrow-btn"
          >
            {{ $t('actions.view-latest-project') }}
          </RouterLink>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>

<style lang="scss" scoped>
[data-locale="np"] {
  .description:not(.english) {
    font-size: 18px;
  }
}
</style>
