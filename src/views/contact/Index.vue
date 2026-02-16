<script setup lang="ts">
import { useHead } from '@vueuse/head'
import ContactInfo from '@/views/contact/components/ContactInfo.vue'
import Contact from '@/views/contact/components/Contact.vue'

useHead({
  title: 'Contact Me | Avishek Dangol',
  meta: [
    { name: 'description', content: 'Get in touch with me for web development, machine learning projects, or any collaboration opportunities. Let\'s work together!' },
    { property: 'og:title', content: 'Contact Me | Avishek Dangol' },
    { property: 'og:description', content: 'Get in touch with me for web development, machine learning projects, or any collaboration opportunities. Let\'s work together!' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Contact Me | Avishek Dangol' },
    { name: 'twitter:description', content: 'Get in touch for web development and machine learning projects.' },
  ],
})
</script>

<template>
  <section class="px-4 md:pl-7 w-[98%]">
    <ContactInfo class="mb-8" />

    <Contact class="mb-10" />

    <slot name="footer" />
  </section>
</template>
