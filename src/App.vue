<script setup lang="ts">
import { VHero } from '@/components'
</script>

<template>
  <main class="h-full bg-red bg-mobile">
    <section class="container mx-auto h-full px-24">
      <div class="flex h-full flex-col items-center justify-center space-x-20 lg:flex-row">
        <div class="text-white">
          <h1 class="text-center text-2xl font-semibold lg:text-left lg:text-4xl">
            Learn to code by watching others
          </h1>
          <h2 class="lg:text-md mt-4 text-center text-xs font-light lg:text-left">
            See how experienced developers solve problems in real-time. Watching scripted tutorials
            is great, but understanding how developers think is invaluable.
          </h2>
        </div>
        <div class="mt-14">
          <div class="rounded-lg bg-blue px-16 py-4 text-center text-sm text-white shadow-2xl">
            <p class="font-light text-blue-grayish-blue">
              <span class="text-white">Try it free 7 days</span> then $20/mo. thereafter
            </p>
          </div>
          <form novalidate class="mt-4 rounded-lg bg-white px-6 py-6">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              class="w-full rounded border-blue-grayish-blue px-5 py-4 text-sm placeholder:font-medium"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              class="mt-4 w-full rounded border-blue-grayish-blue px-5 py-4 text-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              class="mt-4 w-full rounded border-blue-grayish-blue px-5 py-4 text-sm"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              class="mt-4 w-full rounded border-blue-grayish-blue px-5 py-4 text-sm"
            />
            <button
              type="submit"
              class="text-md mt-4 w-full rounded bg-green px-4 py-4 text-center uppercase text-white shadow-xl"
            >
              Claim your free trial
            </button>
            <p class="mt-4 w-full text-xs text-blue-grayish-blue">
              By clicking the button, you are agreeing to our
              <span class="text-red">Terms and Services</span>
            </p>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
