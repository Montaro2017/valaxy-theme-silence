<script lang="ts" setup>
import type { Post } from 'valaxy'

const props = defineProps<{
  posts?: Post[]
  curPage?: number
}>()
</script>

<template>
  <div class="silence-post-list">
    <template v-for="post in props.posts" :key="post.path">
      <template v-if="post">
        <silence-post-card :post="post" />
      </template>
    </template>
  </div>
</template>
