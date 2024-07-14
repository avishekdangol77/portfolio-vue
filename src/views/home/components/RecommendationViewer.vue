<script setup>
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star } from 'lucide-vue-next'
import useLayoutStore from '@/stores/layout'

const layout = useLayoutStore()

/** Props */
defineProps({
  recommendation: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <DialogContent :data-locale="layout.locale">
    <!-- Header starts -->
    <DialogHeader>
      <div class="flex items-center text-left">
        <Avatar class="w-[60px] h-[60px] mr-4">
          <AvatarImage
            :src="recommendation.photo ?? ''"
            :alt="$t(`home.recommendations.${recommendation.key}.name`)"
          />
          <AvatarFallback>{{ $helpers.getInitials(recommendation.key) }}</AvatarFallback>
        </Avatar>

        <div :data-locale="layout.locale">
          <DialogTitle class="text-[14px]">
            {{ $t(`home.recommendations.${recommendation.key}.name`) }}
          </DialogTitle>
          <DialogDescription class="text-[10px] text-slate-400">
            <div v-if="recommendation.company">
              <span>{{ $t(`home.recommendations.${recommendation.key}.position`) }}, </span>
              <span class="english">{{ recommendation.company }}</span>
            </div>
            {{ $t(`home.recommendations.${recommendation.key}.address`) }}
          </DialogDescription>
          <div class="flex">
            <Star
              v-for="i in 5"
              :key="i"
              size="10"
              fill="#ffc107"
              stroke="#ffc107"
              class="mr-1 mt-2"
            />
          </div>
        </div>
      </div>
    </DialogHeader>
    <!-- Header ends -->

    <!-- Content starts -->
    <DialogDescription>
      <p
        v-for="description of recommendation.description"
        :key="description"
        class="english mb-4 text-[12px] text-[#8C8C8E]"
      >
        {{ description }}
      </p>
    </DialogDescription>
    <!-- Content ends -->
  </DialogContent>
</template>

<style lang="scss" scoped>
[data-locale='np'] {
  h2 {
    font-size: 20px;
  }

  p {
    font-size: 18px;
  }
}
</style>
