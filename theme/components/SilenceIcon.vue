<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  icon?: string
}>()

const iconClass = computed(() => {
  if (!props.icon) {
    return null
  }
  return `i-${props.icon.replace(':', '-')}`
})
</script>

<template>
  <div class="silence-icon">
    <slot>
      <div :class="iconClass" />
    </slot>
  </div>
</template>

<style>
.silence-icon {
  color: var(--text-color);
}
</style>
