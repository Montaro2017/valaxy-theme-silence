<script lang="ts" setup>
import { usePostList, useSiteConfig } from 'valaxy'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useThemePagination } from '../utils/pagination'
import { getFirstQuery } from '../utils/route'
import { scrollToTop } from '../utils/theme'

defineOptions({
  name: 'Index',
})

const siteConfig = useSiteConfig()
const pageSize = computed(() => siteConfig.value.pageSize)

const route = useRoute()
const routePage = getFirstQuery(route, 'page')
const pageNum = computed(() => Number(routePage.value ?? 1))

const allPosts = usePostList()
const pagination = useThemePagination(allPosts, pageNum, pageSize)
const total = computed(() => pagination.value.total)
const posts = computed(() => pagination.value.list)

function pageHref(n: number) {
  return `/?page=${n}`
}
</script>

<template>
  <silence-post-list :posts="posts" />
  <silence-pagination :total="total" :page-size="pageSize" :page-num="pageNum" :href="pageHref" @after="scrollToTop" />
</template>

<route lang="yaml">
meta:
  layout: home
</route>
