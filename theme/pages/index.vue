<script lang="ts" setup>
import { usePostList, useSiteConfig } from 'valaxy'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

defineOptions({
  name: 'Index',
})

const siteConfig = useSiteConfig()
const pageSize = computed(() => siteConfig.value.pageSize)

const route = useRoute()
const routePage = computed(() => {
  const page = route.query.page
  if (!page) {
    return null
  }
  if (Array.isArray(page)) {
    return Number(page[0])
  }
  return Number(page)
})
const pageNum = computed(() => routePage.value ?? 1)

const posts = usePostList()
const displayPosts = computed(() => {
  const start = (pageNum.value - 1) * pageSize.value
  const end = start + pageSize.value
  return posts.value.slice(start, end)
})
const total = computed(() => posts.value.length)

function pageHref(n: number) {
  return `/?page=${n}`
}
</script>

<template>
  <silence-post-list :posts="displayPosts" />
  <silence-pagination :total="total" :page-size="pageSize" :page-num="pageNum" :href="pageHref" />
</template>

<route lang="yaml">
meta:
  layout: home
</route>
