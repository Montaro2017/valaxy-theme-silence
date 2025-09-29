<script lang="ts" setup>
import { useAppStore } from 'valaxy'
import { computed, watch } from 'vue'
import { useThemeConfig } from '../composables'

const props = withDefaults(defineProps<{
  header?: boolean
  sidebar?: boolean
  footer?: boolean
}>(), {
  header: true,
  sidebar: false,
  footer: true,
})

const appStore = useAppStore()

const mode = computed(() => {
  return appStore.isDark ? 'dark' : 'light'
})

const themeConfig = useThemeConfig()

const colors = computed(() => {
  return themeConfig.value.colors
})

const color = computed(() => {
  return colors.value[0]
})

watch(() => [mode.value, color.value], (_) => {
  const app = document.querySelector('#app')
  app?.setAttribute('color', color.value)
  app?.setAttribute('mode', mode.value)
}, {
  immediate: true,
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
