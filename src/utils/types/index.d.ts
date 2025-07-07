/* eslint-disable no-unused-vars */
export interface Helper {
  getInitials: (title: string) => string;
  goToPage: (url: string) => void;
}

declare module 'vue/types/vue' {
  interface Vue {
    $helpers: Helper
  }
}
