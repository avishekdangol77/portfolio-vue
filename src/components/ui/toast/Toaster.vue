<script setup lang="ts">
import { isVNode } from 'vue'
import { useToast } from './use-toast'
import {
  Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport,
} from '.'

const { toasts } = useToast()
</script>

<template>
  <ToastProvider>
    <Toast v-for="toast in toasts" :key="toast.id" v-bind="toast" class="bg-[#1E1E28] border-[#1E1E28]">
      <div v-if="toast.isMessage" id="toast-simple" class="flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-[#252531] divide-x divide-zinc-400 rtl:divide-x-reverse divide-gray-200 rounded-lg shadow" role="alert">
        <svg class="w-5 h-5 text-yellow-600 dark:text-yellow-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
        </svg>
        <div class="ps-4 text-sm font-normal">Message sent successfully.</div>
      </div>

      <div v-else class="grid gap-1">
        <ToastTitle v-if="toast.title">
          {{ toast.title }}
        </ToastTitle>
        <template v-if="toast.description">
          <ToastDescription v-if="isVNode(toast.description)">
            <component :is="toast.description" />
          </ToastDescription>
          <ToastDescription v-else>
            {{ toast.description }}
          </ToastDescription>
        </template>
        <ToastClose />
      </div>
      <component :is="toast.action" />
    </Toast>
    <ToastViewport />
  </ToastProvider>
</template>
