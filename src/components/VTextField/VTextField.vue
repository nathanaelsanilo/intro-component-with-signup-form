<template>
  <input
    :type="props.type"
    :name="props.name"
    :placeholder="props.placeholder"
    class="w-full rounded border-blue-grayish-blue px-5 py-4 text-sm placeholder:font-medium active:border-blue"
  />
</template>
<script lang="ts" setup>
type Props = Partial<{
  name: string
  placeholder: string
  type: string
}>
const props = defineProps<Props>()
</script>
