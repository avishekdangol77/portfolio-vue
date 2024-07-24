<script setup>
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

defineProps({
  currentPage: {
    type: String,
    required: true,
  },
  breadcrumbs: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <Breadcrumb class="mt-4">
      <BreadcrumbList>
        <div
          v-for="breadcrumb of breadcrumbs"
          :key="breadcrumb"
          class="flex items-center"
        >
          <RouterLink :to="{ name: breadcrumb }">
            <BreadcrumbItem class="capitalize mr-2 text-slate-500 hover:text-slate-400 transition ease duration-500 english">
              {{ breadcrumb }}
            </BreadcrumbItem>
          </RouterLink>
          <BreadcrumbSeparator />
        </div>
        <BreadcrumbItem>
          <BreadcrumbPage class="english text-slate-400">{{ currentPage }}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
</template>
