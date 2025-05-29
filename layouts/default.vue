<template>
  <div class="flex flex-col h-full">
    <Navbar />
    <div class="flex-1 flex">
      <Sidebar />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Navbar from '@/components/layout/Navbar/index.vue';
  import Sidebar from '@/components/layout/Sidebar/index.vue';
</script>

<style scoped></style>
