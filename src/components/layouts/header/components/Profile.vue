<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import profilePhoto from '@/assets/images/local/profile.png'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import useLayoutStore from '@/stores/layout'

const layout = useLayoutStore()
</script>

<template>
  <div class="h-[235px] p-[30px] sidebar-light-background text-center">
    <Avatar class="w-[96px] h-[96px]">
      <AvatarImage :src="profilePhoto" alt="Avishek Dangol" />
      <AvatarFallback>AD</AvatarFallback>
    </Avatar>

    <router-link :to="{ name: 'home' }">
      <h6
        :data-locale="layout.locale"
        class="profile-name text-white cursor-pointer hover:text-yellow transition ease-in duration-300"
      >
        <span class="font-bold tracking-wider">{{ $t("profile.name") }}</span>
        <FontAwesomeIcon :icon="faCircleCheck" class="tick-icon text-[14px] ml-1 text-sky-400 bg-white rounded-2xl" />
      </h6>
    </router-link>
    <p class="text-[11px] english">{{ $t("profile.position") }}</p>
  </div>
</template>
