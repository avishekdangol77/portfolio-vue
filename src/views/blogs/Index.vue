<script setup lang="ts">
import { RouterLink } from 'vue-router'
import blogs from '@/constants/blog/blogs'
import BlogCard from './components/BlogCard.vue'

</script>

<template>
  <section class="px-4 md:pl-7 w-[98%]">
    <div class="min-h-[88vh] pt-2">
      <h4
        class="heading text-[17px] text-white font-semibold my-5 text-center md:text-left"
      >
        Blogs
      </h4>

      <div v-if="blogs.length" class="w-full grid md:grid-cols-2 gap-8">
        <BlogCard
          v-for="blog of blogs"
          :key="blog.id"
          :blog="blog"
        />
      </div>
    </div>

    <slot name="footer" />
  </section>
</template>
