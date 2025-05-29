<template>
  <div class="flex-1 flex items-center justify-between">
    <div
      class="title select-none text-4xl font-bold pr-6 cursor-pointer"
      @mouseenter="title = 'Tien Music'"
      @mouseleave="title = 'neiT cisuM'"
    >
      {{ title }}
    </div>
    <Search />
  </div>
</template>

<script setup lang="ts">
  import Search from './Search.vue';

  const title = ref('neiT cisuM');
</script>

<style scoped lang="scss">
  .title {
    transition: color 0.3s ease;
  }
</style>
