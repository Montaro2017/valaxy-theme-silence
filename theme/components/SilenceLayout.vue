<script lang="ts" setup>
import type { ThemeConfig } from 'theme/types'
import { useAppStore, useThemeConfig } from 'valaxy'
import { computed } from 'vue'

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

const themeConfig = useThemeConfig<ThemeConfig>()

const colors = computed(() => {
  return themeConfig.value.colors
})

const color = computed(() => {
  return colors.value[0]
})
</script>

<template>
  <div class="silence-layout" :mode="mode" :color="color">
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
