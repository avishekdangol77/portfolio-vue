<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'

defineProps({
  blog: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <Card class="p-2">
    <CardHeader>
      <CardTitle class="text-white mb-3">{{ blog.title }}</CardTitle>
      <CardDescription class="h-[162px]! line-clamp-[9] text-ellipsis">
        {{ blog.content[0] }}
      </CardDescription>
    </CardHeader>
    <CardFooter>
      <RouterLink
        :to="{ name: 'blog', params: { blog: blog.id } }"
        class="text-yellow font-semibold arrow-btn"
      >
        Read more
      </RouterLink>
    </CardFooter>
  </Card>
</template>