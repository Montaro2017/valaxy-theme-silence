<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  defaultCollapse?: boolean
}>(), {
  defaultCollapse: true,
})

// 是否折叠
const collapse = defineModel<boolean>('collapse')
collapse.value = props.defaultCollapse

const style = computed(() => {
  if (collapse.value ?? props.defaultCollapse) {
    return 'grid-template-rows: 0fr;'
  }
  else {
    return 'grid-template-rows: 1fr;'
  }
})

function toggle() {
  collapse.value = !collapse.value
}
</script>

<template>
  <div class="silence-collapse">
    <slot :toggle="toggle" :collapse="collapse" />
    <div class="silence-collapse-content-wrapper" :style="style">
      <div class="silence-collapse-content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<style>
.silence-collapse-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.2s ease;
}

.silence-collapse-content {
  min-height: 0;
  overflow: hidden;
}
</style>
