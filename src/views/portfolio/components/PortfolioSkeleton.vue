<script setup>
import { Skeleton } from '@/components/ui/skeleton'
</script>

<template>
  <div class="grid grid-cols-2 mt-6">
      <div>
        <Skeleton class="h-[250px] w-[425px] mb-4 bg-slate-300 rounded-xl" />
        <div class="space-y-2">
          <Skeleton class="h-4 w-[250px] bg-slate-300" />
          <Skeleton class="h-4 w-[200px] bg-slate-300" />
        </div>
      </div>

      <div class="space-y-8 mt-5">
        <div
          v-for="i of Array(3).fill({})"
          :key="i"
        >
          <div class="flex items-center space-x-4">
            <Skeleton class="h-12 w-12 bg-slate-300 rounded-full" />
            <div class="space-y-2">
              <Skeleton class="h-4 w-[250px] bg-slate-300" />
              <Skeleton class="h-4 w-[200px] bg-slate-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
