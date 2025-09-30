<script lang="ts" setup>
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="silence-sidebar-block">
    <div class="silence-sidebar-block-title">
      {{ props.title }}
    </div>
    <slot />
  </div>
</template>

<style>
.silence-sidebar-block-title {
  margin: 20px 0;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.25;
  border-left: 4px solid var(--theme-color);
  border-radius: 4px;
  padding-left: 7px;
}
</style>
