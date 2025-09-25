<script lang="ts" setup>
import type { Post } from 'valaxy'
import { usePostList } from 'valaxy'
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  type?: string
  posts?: Post[]
  curPage?: number
}>(), {
  curPage: 1,
})

const routes = usePostList({ type: props.type || '' })
const posts = computed(() => props.posts || routes.value)
</script>

<template>
  <div class="silence-post-list">
    <template v-for="post in posts" :key="post.path">
      <template v-if="post">
        <silence-post-card :post="post" />
      </template>
    </template>
  </div>
</template>
