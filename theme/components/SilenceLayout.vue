<script lang="ts" setup>
const props = withDefaults(defineProps<{
  header?: boolean
  sidebar?: boolean
  footer?: boolean
}>(), {
  header: true,
  sidebar: false,
  footer: true,
})
</script>

<template>
  <div class="silence-layout">
    <silence-header v-if="props.header" />
    <div class="flex">
      <silence-sidebar v-if="props.sidebar" />
      <div class="silence-layout-content">
        <slot />
      </div>
    </div>
    <silence-footer v-if="props.footer" />
  </div>
</template>

<style>
.silence-layout {
  width: 960px;
  margin: 0 auto;
}

.silence-layout-content {
  flex: 1;
}
</style>
