<script setup>
import { Card, CardDescription, CardHeader } from '@/components/ui/card'
import profile from '@/constants/profile/profile'
import useLayout from '@/stores/layout'

const layout = useLayout()
</script>

<template>
  <section>
    <h4
      :data-locale="layout.locale"
      class="heading text-[17px] text-white font-semibold my-5 text-center md:text-left"
    >
      {{ $t('contact.title') }}
    </h4>

    <div :data-locale="layout.locale" class="grid grid-cols-2 gap-8">
      <!-- Contact starts -->
      <Card class="px-2 py-7 card-background shadow-md">
        <CardHeader>
          <CardDescription>
            <!-- Country starts -->
            <div class="flex justify-between mb-2">
              <h6 class="mb-0 text-white">{{ $t('labels.country') }}</h6>
              <h6 class="mb-0">{{ $t('profile.country') }}</h6>
            </div>
            <!-- Country ends -->

            <!-- City starts -->
            <div class="flex justify-between">
              <h6 class="mb-0 text-white">{{ $t('labels.city') }}</h6>
              <h6 class="mb-0">{{ $t('profile.city') }}</h6>
            </div>
            <!-- City ends -->
          </CardDescription>
        </CardHeader>
      </Card>
      <!-- Contact ends -->

      <!-- Socials starts -->
      <Card class="px-2 py-7 card-background shadow-md">
        <CardHeader>
          <CardDescription>
            <div
              v-for="social of profile.SOCIALS"
              :key="social.id"
              class="flex justify-between mb-2"
            >
              <p class="english mb-0 text-white">{{ social.name }}</p>
              <a
                class="english mb-0 hover:text-white transition-colors duration-300 ease-in"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ social.id }}
              </a>
            </div>
          </CardDescription>
        </CardHeader>
      </Card>
      <!-- Socials ends -->
    </div>
  </section>
</template>

<style lang="scss" scoped>
[data-locale="np"] {
  p:not(.english) {
    font-size: 18px;
  }
}
</style>
