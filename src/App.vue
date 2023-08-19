<script setup lang="ts">
import { HeroLanding, VAlert, FormSignup } from '@/components'
</script>

<template>
  <main class="grid h-full place-items-center">
    <section class="container mx-auto px-4 py-20 lg:px-12 lg:py-4">
      <div
        class="flex flex-col items-center justify-start gap-y-10 px-0 py-0 lg:flex-row lg:gap-x-16"
      >
        <HeroLanding class="flex-1" />
        <div class="flex-1">
          <VAlert>
            <template #default>
              <p><span class="text-white">Try it free 7 days</span> then $20/mo. thereafter</p>
            </template>
          </VAlert>
          <FormSignup />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
