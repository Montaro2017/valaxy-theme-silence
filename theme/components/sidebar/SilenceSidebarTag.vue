<script lang="ts" setup>
import type { ThemeConfig } from 'theme/types'
import { useTags, useThemeConfig } from 'valaxy'
import { computed } from 'vue'

const themeConfig = useThemeConfig<ThemeConfig>()

const tagLimit = computed(() => themeConfig.value.sidebar.tagLimit ?? 0)
const tags = useTags()

const tagsToShow = computed(() => {
  if (tagLimit.value > 0) {
    return new Map(Array.from(tags.value).slice(0, tagLimit.value))
  }
  return tags.value
})
</script>

<template>
  <silence-sidebar-block class="silence-sidebar-tags" title="标签">
    <silence-tag-item v-for="tag in tagsToShow" :key="tag[0]" :tag="tag" />
  </silence-sidebar-block>
</template>
