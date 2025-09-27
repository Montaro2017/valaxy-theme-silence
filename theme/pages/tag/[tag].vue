<script lang="ts" setup>
import type { Post } from 'valaxy'
import { usePostList } from 'valaxy'

import { computed } from 'vue'

import { useRoute } from 'vue-router'

const route = useRoute()
// 将 tag 从 string|string[] 转换为 string 类型
const tag = computed(() => {
  const tagParam = route.params.tag
  return Array.isArray(tagParam) ? tagParam[0] : tagParam
})
const title = computed(() => `当前标签: ${tag.value}`)

const posts = computed(() => {
  const routes = usePostList()
  return routes.value.filter(p => p?.tags?.includes(tag.value))
})
</script>

<template>
  <silence-content-block :title="title">
    <silence-post-list :posts="posts" />
  </silence-content-block>
</template>
