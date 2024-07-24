export interface Helper {
  getInitials: (title: string) => string;
  isMobile: () => boolean;
  goToPage: (url: string) => void;
}

declare module 'vue/types/vue' {
  interface Vue {
    $helpers: Helper
  }
}
