<template>
  <form
    novalidate
    class="mt-4 space-y-4 rounded-lg bg-white px-5 py-5 lg:px-10 lg:py-10"
    @submit.prevent="onSubmit"
  >
    <VTextField type="text" name="firstName" placeholder="First Name" />
    <VTextField type="text" name="lastName" placeholder="Last Name" />
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
import { VBtn, VLink, VTextField } from '@/components'
import { toTypedSchema } from '@vee-validate/yup'
import { useForm } from 'vee-validate'
import { object, string } from 'yup'

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    object({
      firstName: string().required().label('First Name'),
      lastName: string().required().label('Last Name'),
      email: string().required().email().label('Email'),
      password: string().required().min(6).label('Password')
    })
  ),
  initialValues: {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
})

const onSubmit = handleSubmit((values) => {
  console.log(values)
})
</script>
