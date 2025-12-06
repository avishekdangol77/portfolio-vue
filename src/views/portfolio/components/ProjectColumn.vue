<script setup lang="ts">
import type { Project } from '@/constants/portfolio/types';

import {
  Card, CardDescription, CardHeader, CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { RouterLink } from 'vue-router'

defineProps<{
  projects: Project[],
  isMobile: boolean,
}>()
</script>

<template>
  <RouterLink
    v-for="project of projects"
    :key="project.id"
    :to="{name: 'project', params: { project: project.key}}"
    :class="isMobile ? 'pr-2' : ''"
    class="group"
  >
    <Card
      class="shadow-md cursor-pointer hover:ring ring-offset-2 ring-offset-zinc-500 ring-slate-700 hover:contrast-[1.1] hover:saturate-[1.1] transition ease duration-500"
    >
      <img
        :src="project.thumbnail"
        :alt="$t(`portfolio.projects.${project.key}.title`)"
      >
      <CardHeader class="pt-4 gap-y-0">
        <CardTitle class="flex justify-between items-center">
          <span class="english-font-only font-semibold">{{ $t(`portfolio.projects.${project.key}.title`) }}</span>
          <Badge class="text-stone-500">{{ $t(`portfolio.projects.${project.key}.duration`) }}</Badge>
        </CardTitle>
        <CardDescription class="text-stone-500 group-hover:text-stone-400 transition duration-300 ease">
          <h6 class="mb-2">{{ $t(`portfolio.projects.${project.key}.position`) }}</h6>
          <Badge
            v-for="skill of project.skills"
            :key="skill"
            class="h-4 mr-1 bg-violet-500 hover:bg-violet-500 text-stone-200 hover:text-white"
          >
            <small>{{ skill }}</small>
          </Badge>
        </CardDescription>
      </CardHeader>
    </Card>
  </RouterLink>
</template>
