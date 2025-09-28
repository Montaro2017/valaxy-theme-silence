<script lang="ts" setup>
import type { Post } from 'valaxy'

const props = withDefaults(defineProps<{
  posts?: Post[]
  pinMark?: boolean
}>(), {
  pinMark: true,
})
</script>

<template>
  <div class="silence-post-list">
    <template v-for="post in props.posts" :key="post.path">
      <template v-if="post">
        <silence-post-card :post="post" :pin-mark="props.pinMark" />
      </template>
    </template>
  </div>
</template>
