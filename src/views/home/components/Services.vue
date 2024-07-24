<script setup lang="ts">
import {
  Card, CardDescription, CardFooter, CardHeader, CardTitle,
} from '@/components/ui/card'
import services from '@/constants/home/services'
import useLayoutStore from '@/stores/layout'

const layout = useLayoutStore()
</script>

<template>
  <section>
    <h4
      :data-locale="layout.locale"
      class="heading font-semibold my-5 text-center md:text-left"
    >
      {{ $t('home.services.title') }}
    </h4>

    <div class="w-full grid md:grid-cols-3 gap-8">
      <Card
        v-for="service of services"
        :key="service.title"
        class="p-2"
      >
        <CardHeader>
          <CardTitle class="english mb-3">{{ service.title }}</CardTitle>
          <CardDescription class="max-w-[250px]">
            <p
              v-for="description, index of service.description"
              :key="description"
              :class="index !== service.description.length - 1 ? 'mb-4' : ''"
              class="english"
            >
              {{ description }}
            </p>
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <RouterLink
            :to="{ name: 'contact' }"
            class="text-yellow font-semibold arrow-btn"
          >
            {{ $t('actions.enquire-more') }}
          </RouterLink>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>
