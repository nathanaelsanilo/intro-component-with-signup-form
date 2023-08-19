<template>
  <div class="v-alert">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.v-alert {
  @apply rounded-lg bg-blue px-4 py-4 text-center text-sm text-blue-grayish-blue;
}
</style>
