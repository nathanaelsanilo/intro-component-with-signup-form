<script setup lang="ts">
import { ref } from 'vue'

const state = ref({
  name: '',
  age: 0,
  active: false
})
</script>

<template>
  <main class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
    {{ state.active }}
  </main>
</template>

<style scoped></style>
