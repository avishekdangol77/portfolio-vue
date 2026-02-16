<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useHead } from '@vueuse/head'
import blogs from '@/constants/blog/blogs'
import BlogCard from './components/BlogCard.vue'

useHead({
  title: 'Blog | Avishek Dangol',
  meta: [
    { name: 'description', content: 'Read my articles on software development, machine learning, web technologies, and industry trends.' },
    { property: 'og:title', content: 'Blog | Avishek Dangol' },
    { property: 'og:description', content: 'Read my articles on software development, machine learning, web technologies, and industry trends.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Blog | Avishek Dangol' },
    { name: 'twitter:description', content: 'Articles on software development and machine learning.' },
  ],
})
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
