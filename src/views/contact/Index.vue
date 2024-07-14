<script setup lang="ts">
import ContactInfo from '@/views/contact/components/ContactInfo.vue'
import Contact from '@/views/contact/components/Contact.vue'
</script>

<template>
  <section class="px-4 md:pl-7 w-[98%]">
    <ContactInfo class="mb-8" />

    <Contact class="mb-10" />

    <slot name="footer" />
  </section>
</template>
