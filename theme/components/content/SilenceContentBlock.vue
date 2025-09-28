<script lang="ts" setup>
const props = defineProps<{ title: string }>()
</script>

<template>
  <div class="silence-content-block">
    <div class="silence-content-block-title">
      {{ props.title }}
    </div>
    <div class="silence-content-block-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.silence-content-block-title {
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border-color);
}

.silence-content-block-content {
  margin-top: 16px;
}
</style>
