<template>
  <button class="v-btn">
    <slot></slot>
  </button>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.v-btn {
  @apply w-full rounded bg-green px-4 py-4 text-center text-base uppercase text-white transition-all ease-in-out active:bg-green-300;
}
</style>
