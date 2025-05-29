<template>
  <div class="relative h-screen w-screen">
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
    <RouteBar />
  </div>
</template>

<script setup lang="ts">
  import RouteBar from '@/components/UI/RouteBar.vue';
</script>
<style scoped></style>
