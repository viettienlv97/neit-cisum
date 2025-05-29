<template>
  <client-only>
    <div class="absolute bottom-1 left-2 text-xs">
      {{ route.path }}
    </div>
  </client-only>
</template>

<script setup lang="ts">
  const route = useRoute();
</script>

<style scoped></style>
