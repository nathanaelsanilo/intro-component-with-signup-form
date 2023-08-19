<template>
  <form novalidate class="mt-4 space-y-4 rounded-lg bg-white px-10 py-10">
    <VTextField type="text" name="first_name" placeholder="First Name" />
    <VTextField type="text" name="last_name" placeholder="Last Name" />
    <VTextField type="email" name="email" placeholder="Email Address" />
    <VTextField type="password" name="password" placeholder="Password" />
    <VBtn type="submit"> Claim your free trial </VBtn>
    <div class="v-helper">
      <p class="text-center">
        By clicking the button, you are agreeing to our
        <VLink> Terms and Services </VLink>
      </p>
    </div>
  </form>
</template>
<script lang="ts" setup>
import { VBtn, VTextField, VLink } from '@/components'
</script>
