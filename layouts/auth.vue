<template>
  <div id="auth-layout" class="w-screen h-screen">
    <div class="flex w-full h-full">
      <div class="flex-1/3">Hello</div>
      <div class="flex-2/3">
        Test flex

        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
