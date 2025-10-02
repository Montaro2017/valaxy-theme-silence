<script lang="ts" setup>
import { useSiteConfig } from 'valaxy'
import { computed } from 'vue'

import { useRoute } from 'vue-router'
import { useThemePagination } from '../utils/pagination'

import { getCategoryLink, getFirstParam, getFirstQuery } from '../utils/route'

import { scrollToTop, setTitle, useAllPosts } from '../utils/theme'

const siteConfig = useSiteConfig()
const pageSize = computed(() => siteConfig.value.pageSize)

const route = useRoute()

const category = getFirstParam(route, 'category')
const routePage = getFirstQuery(route, 'page')
const pageNum = computed(() => Number(routePage.value ?? 1))

setTitle(`${category.value} - 分类`)

const allPosts = useAllPosts()
const pagination = useThemePagination(
  allPosts,
  pageNum,
  pageSize,
  p => p.categories?.includes(category.value!) ?? false,
)
const total = computed(() => pagination.value.total)
const posts = computed(() => pagination.value.list)

function categoryPageLink(n: number) {
  return getCategoryLink(category.value!, n)
}
</script>

<template>
  <silence-content-block :title="`当前分类: ${category}`">
    <silence-post-list :posts="posts" :pin-mark="false" />
    <silence-pagination
      :total="total" :page-size="pageSize" :page-num="pageNum" :link="categoryPageLink"
      @after="scrollToTop"
    />
  </silence-content-block>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
