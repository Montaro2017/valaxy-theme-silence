<script lang="ts" setup>
import { ref } from 'vue'
import { getSearchLink } from '../../utils/route'

const keyword = ref<string | null>(null)

function search() {
  if (keyword.value == null || keyword.value.length <= 0) {
    return
  }
  const searchLink = getSearchLink(keyword.value)
  window.open(searchLink, '_blank')
}
</script>

<template>
  <silence-sidebar-block title="搜索">
    <div class="silence-sidebar-search">
      <input v-model="keyword" type="text" @keyup.enter="search">
      <silence-button @click="search">
        找找看
      </silence-button>
    </div>
  </silence-sidebar-block>
</template>

<style>
.silence-sidebar-search {
  gap: 4px;
  display: flex;
}

.silence-sidebar-search > * {
  height: 32px;
}

.silence-sidebar-search input {
  min-width: 0;
  padding: 0 6px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid var(--border-color);
}
</style>
