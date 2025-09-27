<script lang="ts" setup>
import { useCategories } from 'valaxy'
import { computed } from 'vue'
import { useThemeConfig } from '../../composables'

const categories = computed(() => {
  return useCategories().value.children
})

const themeConfig = useThemeConfig()
const categoryLimit = computed(() => themeConfig.value.sidebar.categoryLimit ?? 0)

const categoriesToShow = computed(() => {
  if (categoryLimit.value > 0) {
    return new Map(Array.from(categories.value).slice(0, categoryLimit.value))
  }
  return categories.value
})
</script>

<template>
  <silence-sidebar-block class="silence-sidebar-categories" title="分类">
    <silence-sidebar-category-item v-for="category in categoriesToShow" :key="category[0]" :category="category" />
  </silence-sidebar-block>
</template>
