<script lang="ts" setup>
import { useSiteConfig } from 'valaxy'
import { computed } from 'vue'

import { useRoute } from 'vue-router'

import { useThemePagination } from '../utils/pagination'
import { getFirstParam, getFirstQuery, getTagLink } from '../utils/route'
import { scrollToTop, setTitle, useAllPosts } from '../utils/theme'

const siteConfig = useSiteConfig()
const pageSize = computed(() => siteConfig.value.pageSize)

const route = useRoute()

const tag = getFirstParam(route, 'tag')
const routePage = getFirstQuery(route, 'page')
const pageNum = computed(() => Number(routePage.value ?? 1))

setTitle(`${tag.value} - 标签`)

const allPosts = useAllPosts()
const pagination = useThemePagination(
  allPosts,
  pageNum,
  pageSize,
  p => p.tags?.includes(tag.value!) ?? false,
)
const total = computed(() => pagination.value.total)
const posts = computed(() => pagination.value.list)

function tagPageLink(n: number) {
  return getTagLink(tag.value!, n)
}
</script>

<template>
  <silence-content-block :title="`当前标签: ${tag}`">
    <silence-post-list :posts="posts" :pin-mark="false" />
    <silence-pagination
      :total="total" :page-size="pageSize" :page-num="pageNum" :link="tagPageLink"
      @after="scrollToTop"
    />
  </silence-content-block>
</template>
