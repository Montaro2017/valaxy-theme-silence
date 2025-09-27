<script lang="ts" setup>
import { usePostList, useSiteConfig } from 'valaxy'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

defineOptions({
  name: 'Index',
})

const posts = usePostList()

const siteConfig = useSiteConfig()
const pageSize = computed(() => siteConfig.value.pageSize)

const total = computed(() => posts.value.length)
const route = useRoute()
const routePage = computed(() => {
  const p = route.query.p
  if (!p) {
    return null
  }
  if (Array.isArray(p)) {
    return Number(p[0])
  }
  return Number(p)
})
const pageNum = computed(() => routePage.value ?? 1)
</script>

<template>
  <silence-post-list :posts="posts" />
  <silence-pagination :total="total" :page-size="pageSize" :page-num="pageNum" />
</template>

<route lang="yaml">
meta:
  layout: home
</route>
