<script setup lang="ts">
import useLayout from '@/stores/layout'
import type { NetworkPopoverProps } from './types'

const layout = useLayout()
const props = defineProps<NetworkPopoverProps>()
</script>

<template>
  <div class="group relative">
    <button data-popover-target="popover-network" type="button">
      <slot name="trigger" />
    </button>

    <div data-popover id="popover-network" role="tooltip"
      class="absolute bottom-10 -left-20 z-10 inline-block w-64 transition-opacity duration-300 border rounded-lg shadow-sm text-gray-400 bg-[#1E1E28] border-gray-800 opacity-0 invisible group-hover:visible group-hover:opacity-100">
      <div class="p-3">
        <div class="flex items-center">
          <img class="w-10 h-10 rounded-full" :src="props.network.photo" :alt="$t(`home.networks.${props.network.key}.name`)">

          <div class="ml-2">
            <h6
              class="leading-none text-white"
              :class="layout.locale === 'np' ? 'font-medium' : 'font-semibold '"
            >
              {{ $t(`home.networks.${props.network.key}.name`) }}
            </h6>
            <p class="english font-normal text-stone-500">
              {{ props.network.roles }}
            </p>
          </div>
        </div>
      </div>
      <div data-popper-arrow></div>
    </div>
  </div>
</template>
