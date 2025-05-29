<template>
  <div class="flex-1 flex items-center justify-end pt-2 gap-2">
    <Mail />
    <Notification />
    <User />
  </div>
</template>

<script setup lang="ts">
  import Notification from './Notification.vue';
  import User from './User.vue';
  import Mail from './Mail.vue';
</script>

<style scoped></style>
