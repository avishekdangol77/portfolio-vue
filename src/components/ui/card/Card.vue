<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-sm card-background text-card-background shadow-sm',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
