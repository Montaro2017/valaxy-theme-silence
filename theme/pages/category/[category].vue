<script lang="ts" setup>
import { usePostList, useSiteConfig } from 'valaxy'
import { computed } from 'vue'

import { useRoute } from 'vue-router'

import { useThemePagination } from '../../utils/pagination'
import { getFirstParam, getFirstQuery } from '../../utils/route'

const siteConfig = useSiteConfig()
const pageSize = computed(() => siteConfig.value.pageSize)

const route = useRoute()

const category = getFirstParam(route, 'category')
const routePage = getFirstQuery(route, 'page')
const pageNum = computed(() => Number(routePage.value ?? 1))

const title = computed(() => `当前分类: ${category.value}`)

const allPosts = usePostList()
const pagination = useThemePagination(
  allPosts,
  pageNum,
  pageSize,
  p => p.categories?.includes(category.value!) ?? false,
)
const total = computed(() => pagination.value.total)
const posts = computed(() => pagination.value.list)

function pageHref(n: number) {
  return `/category/${category.value}?page=${n}`
}
</script>

<template>
  <silence-content-block :title="title">
    <silence-post-list :posts="posts" :pin-mark="false" />
    <silence-pagination :total="total" :page-size="pageSize" :page-num="pageNum" :href="pageHref" />
  </silence-content-block>
</template>
