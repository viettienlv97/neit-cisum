// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: false,
  devServer: { host: process.env.TAURI_DEV_HOST ?? 'localhost' },
  vite: {
    clearScreen: false,
    envPrefix: ['TAURI_', 'NUXT_', 'VITE_'],
    server: {
      strictPort: true,
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: '',
    },
  },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@element-plus/nuxt'],
  tailwindcss: {
    viewer: false,
  },
  css: ['@/assets/scss/_base.scss', 'element-plus/dist/index.css'],
});
