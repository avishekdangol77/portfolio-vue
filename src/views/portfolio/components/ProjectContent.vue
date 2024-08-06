<script lang="ts" setup>
import {
  Card, CardContent, CardHeader, CardTitle,
} from '@/components/ui/card'
import { TickedList } from '@/components/ui/list'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { NetworkPopover } from '@/components/ui/popover'

import useLayout from '@/stores/layout'
import networks from '@/constants/home/networks'
import { computed } from 'vue'
import { Badge } from '@/components/ui/badge'
import type { Network } from '@/constants/home/types'
import type { ProjectProp } from './types'

const layout = useLayout()

/** Props */
const props = defineProps<ProjectProp>()

/** Associated Networks */
const associatedNetworks = computed((): Array<Network> => networks
  .filter((network: Network) => props.project?.networks
    .map(n => n.id)
    .includes(network.id))
  .map(network => ({
    ...network,
    roles: props.project?.networks.find(n => n.id === network.id)?.roles,
  })))

</script>

<template>
  <section>
    <h4 :data-locale="layout.locale" class="heading font-semibold my-5 text-center md:text-left">
      {{ $t('labels.project-details') }}
    </h4>

    <div class="grid grid-cols-3 gap-4">
      <!-- Project description starts -->
      <Card class="col-span-3 md:col-span-2 row-span-3">
        <CardHeader>
          <CardTitle :data-locale="layout.locale" :class="{ heading: layout.locale === 'np' }">
            {{ $t('labels.description') }}
          </CardTitle>
        </CardHeader>
        <CardContent class="english text-zinc-400">
          <p v-for="description of project.description" :key="description" class="mb-6">
            {{ $t(`portfolio.projects.${project.key}.description.${description}`) }}
          </p>

          <TickedList
            :title="$t('labels.features')"
            :items="project.features.map((feature: string) => $t(`portfolio.features.${feature}`))"
          />
        </CardContent>
      </Card>
      <!-- Project description ends -->

      <!-- General details start -->
      <Card class="col-span-3 md:col-span-1 min-h-[120px]">
        <CardContent class="py-5 grid gap-2">
          <div class="flex justify-between">
            <label>{{ $t('labels.status') }}</label>
            <h6
              class="inline-flex items-center bg-green-900 text-green-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
              <span class="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
              {{ $t(`portfolio.projects.${project.key}.status`) }}
            </h6>
          </div>

          <div class="flex justify-between">
            <label>{{ $t('labels.client') }}</label>
            <div
              variant="link"
              @click="project.clientUrl ? $helpers.goToPage(project.clientUrl) : ''"
            >
              <h6 class="text-right text-zinc-400">
                <TooltipProvider v-if="layout.locale !== 'np' && project.clientAbbr">
                  <Tooltip>
                    <TooltipTrigger>
                      <abbr class="underline decoration-dotted">
                        {{ $t(`portfolio.projects.${project.key}.client-abbr`) }}
                      </abbr>
                    </TooltipTrigger>

                    <TooltipContent>
                      {{ $t(`portfolio.projects.${project.key}.client`) }}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <span v-else>{{ $t(`portfolio.projects.${project.key}.client`) }}</span>
              </h6>
            </div>
          </div>

          <div class="flex justify-between">
            <label>{{ $t('labels.location') }}</label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    :class="project.googleMapUrl ? 'underline hover:no-underline cursor-pointer' : 'cursor-text'"
                    @click="project.googleMapUrl ? $helpers.goToPage(project.googleMapUrl) : ''"
                  >
                    <h6 class="text-zinc-400">{{ $t(`portfolio.projects.${project.key}.location`) }}</h6>
                  </div>
                </TooltipTrigger>

                <TooltipContent v-if="project.googleMapUrl">
                  {{ $t('labels.view-on-google-map') }}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardContent>
      </Card>
      <!-- General details end -->

      <!-- Associated networks start -->
      <Card class="col-span-3 md:col-span-1">
        <CardHeader>
          <CardTitle class="english">{{ $t('labels.associated-networks') }}</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="flex -space-x-4 rtl:space-x-reverse">
            <NetworkPopover
              v-for="network of associatedNetworks"
              :key="network.id"
              :network="network"
              :roles="network.roles"
              class="hover:z-[1]"
            >
              <template #trigger>
                <img
                  class="w-10 h-10 border-2 rounded-full border-zinc-400 hover:shadow-md hover:border-gray-300 hover:shadow-gray-200 transition duration-300 ease-out"
                  :src="network.photo"
                  :alt="$t(`home.networks.${network.key}.name`)"
                />
              </template>
            </NetworkPopover>
          </div>
        </CardContent>
      </Card>
      <!-- Associated networks end -->

      <!-- Skills start -->
      <Card class="english col-span-3 md:col-span-1">
        <CardHeader>
          <CardTitle class="english">{{ $t('labels.skills-and-deliverables') }}</CardTitle>
        </CardHeader>
        <CardContent>
          <Badge
            v-for="skill of project.skills"
            :key="skill"
            class="mr-1 mb-2 bg-violet-500 hover:bg-violet-600 hover:shadow-sm hover:shadow-violet-200 text-stone-200 hover:text-white"
          >
            {{ skill }}
          </Badge>
        </CardContent>
      </Card>
      <!-- Skills end -->
    </div>
  </section>
</template>
