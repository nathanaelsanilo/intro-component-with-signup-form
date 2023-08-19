<script setup lang="ts">
import { HeroLanding, VAlert, FormSignup } from '@/components'
</script>

<template>
  <main class="h-full bg-red bg-mobile">
    <section class="container mx-auto h-full lg:px-24">
      <div
        class="flex h-full flex-col items-center justify-center gap-y-10 px-8 py-8 lg:flex-row lg:gap-x-16"
      >
        <HeroLanding />
        <div>
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
