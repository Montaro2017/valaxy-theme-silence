<script lang="ts" setup>
import type { CategoryList } from 'valaxy'
import { isCategoryList, useCategories } from 'valaxy'
import { computed } from 'vue'

const categories = computed(() => {
  return new Map(Array.from(useCategories().value.children)
    .filter(([_, child]) => isCategoryList(child))
    .map(([name, child]) => [name, child as CategoryList]))
})

const displayCategories = computed(() => new Map(Array.from(categories.value).filter(([name, _]) => name !== 'Uncategorized')))
</script>

<template>
  <silence-content-block class="silence-categories" title="所有分类">
    <div v-for="[name, category] in displayCategories" :key="name">
      <silence-category-item :category="category" :default-collapse="false" />
    </div>
  </silence-content-block>
</template>
