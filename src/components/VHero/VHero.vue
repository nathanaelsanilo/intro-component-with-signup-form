<template>
  <div class="v-hero">
    <div class="v-hero__body">
      <slot name="body"></slot>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.v-hero {
  @apply text-white;
}
</style>
