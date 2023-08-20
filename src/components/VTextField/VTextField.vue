<template>
  <div>
    <div
      class="form-input flex flex-row items-center justify-start rounded border border-blue-grayish-blue transition-all ease-in-out"
      :class="{ 'ring-red': isInvalid, 'ring-1': isInvalid }"
    >
      <input
        v-model="inputValue"
        v-bind="$attrs"
        :type="props.type"
        :name="props.name"
        :placeholder="props.placeholder"
        class="w-full border-0 text-sm transition-all ease-in-out placeholder:font-medium focus:ring-0"
        :class="{ 'text-red': isInvalid, 'placeholder-red': isInvalid }"
        @change="handleChange"
        @blur="handleBlur"
      />
      <ErrorIcon v-show="isInvalid" class="v-icon v-icon--error" />
    </div>
    <p class="mt-2 text-right text-xs italic text-red">
      {{ errorMessage }}
    </p>
  </div>
</template>
<script lang="ts" setup>
import ErrorIcon from '~icons/mdi/error'
import { useField } from 'vee-validate'
import { computed } from 'vue'

type Props = { name: string } & Partial<{
  placeholder: string
  type: string
  modelValue: string
}>

const props = withDefaults(defineProps<Props>(), {
  type: 'text'
})

const {
  value: inputValue,
  errorMessage,
  meta,
  handleBlur,
  handleChange
} = useField(() => props.name, undefined, {
  syncVModel: true,
  initialValue: props.modelValue
})

const isInvalid = computed(() => !meta.valid && meta.touched)
</script>
