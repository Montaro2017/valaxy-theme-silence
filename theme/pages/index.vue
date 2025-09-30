<script lang="ts" setup>
import { usePostList, useSiteConfig } from 'valaxy'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useThemePagination } from '../utils/pagination'
import { getFirstQuery, getIndexLink } from '../utils/route'
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
</script>

<template>
  <silence-post-list :posts="posts" />
  <silence-pagination :total="total" :page-size="pageSize" :page-num="pageNum" :link="getIndexLink" @after="scrollToTop" />
</template>

<route lang="yaml">
meta:
  layout: home
</route>
