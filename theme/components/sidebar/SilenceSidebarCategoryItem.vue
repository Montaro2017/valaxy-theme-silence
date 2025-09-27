<script lang="ts" setup>
import type { CategoryList, Post } from 'valaxy'
import { computed } from 'vue'

const props = defineProps<{
  category: [string, Post | CategoryList]
}
>()

const name = computed(() => props.category[0])
const total = computed(() => props.category[1].total)
</script>

<template>
  <app-link class="silence-sidebar-category-item">
    <div class="silence-sidebar-category-item-name">
      {{ name }}
    </div>
    <div class="silence-sidebar-category-item-total">
      ({{ total }})
    </div>
  </app-link>
</template>

<style scoped>
.silence-sidebar-category-item {
  display: flex;
  align-items: center;
  padding: 5px 0;
  font-size: 15px;
  font-weight: 300;
}
</style>
