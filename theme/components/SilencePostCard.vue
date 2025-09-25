<script lang="ts" setup>
import type { Post } from 'valaxy'

defineProps<{
  post: Post
}>()
</script>

<template>
  <div class="silence-post-card">
    <h2 class="silence-post-card-title">
      <app-link :to="post.path || ''">
        {{ post.title }}
      </app-link>
    </h2>
    <div class="silence-post-card-excerpt" v-html="post.excerpt" />
    <div class="silence-post-card-read-more">
      <app-link :to="post.path || ''">
        阅读全文
      </app-link>
    </div>
    <div class="silence-post-card-meta-info">
      <div class="silence-post-card-meta-info-date">
        posted @ {{ post.date }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.silence-post-card {
  border-bottom: 1px solid var(--border-color);
}

.silence-post-card-title a {
  font-size: 19px;
  font-weight: 700 !important;
}

.silence-post-card-excerpt {
  height: 4.5em;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  font-size: 16px;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-box-orient: vertical;
}

.silence-post-card-read-more {
  margin-top: 10px;
}

.silence-post-card-read-more a {
  border-bottom: 1px dotted var(--text-color);
}

.silence-post-card-read-more a:hover {
  border-bottom: 1px dotted var(--theme-color);
}

.silence-post-card-read-more a::after {
  content: '\00bb';
}

.silence-post-card-meta-info {
  display: flex;
  justify-content: end;
}
</style>
