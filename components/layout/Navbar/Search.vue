<template>
  <div class="flex-1">
    <el-input v-model="searchContent" prefix-icon="Search" placeholder="Search for song, artist" />
  </div>
</template>

<script setup lang="ts">
  const searchContent = ref<string>('');
</script>

<style scoped></style>
