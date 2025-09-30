<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  icon: string
}>()

const iconClass = computed(() => {
  if (!props.icon) {
    return null
  }
  let icon = props.icon
  if (!icon.startsWith('i-')) {
    icon = `i-${icon}`
  }
  return `${icon.replace(':', '-')}`
})
</script>

<template>
  <div class="silence-icon" :class="iconClass" />
</template>

<style>
.silence-icon {
  color: inherit;
  font-size: inherit;
}
</style>
