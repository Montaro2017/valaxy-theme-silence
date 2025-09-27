<script lang="ts" setup>
import type { Post } from 'valaxy'

defineProps<{
  post: Post
}>()
</script>

<template>
  <div class="silence-post-card">
    <h2 class="silence-post-card-title" :title="post.title as string">
      <app-link :to="post.path || ''" class="block">
        <span v-if="post.top" class="color-[var(--theme-color)] font-300">[置顶]</span>
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
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border-color);
}

.silence-post-card-title {
  font-size: 0;
}

.silence-post-card-title a {
  max-height: 3em;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  font-size: 19px;
  line-height: 1.5;
  overflow: hidden;
  font-weight: 300;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-box-orient: vertical;
}

.silence-post-card-title-top {
  display: inline;
  font-size: 12px;
  font-weight: 400;
  padding: 2px 10px;
  border-radius: 4px;
  line-height: 38.5px;
  color: var(--theme-color);
  background-color: var(--panel-bg-color);
  border: 1px solid var(--border-bg-color);
}

/* .silence-post-card-inner-title {
  display: inline;
  font-size: 19px;
  line-height: 1.5;
  overflow: hidden;
  max-height: 3em;
  font-weight: 700 !important;
} */

.silence-post-card-excerpt {
  height: 4.5em;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  font-size: 16px;
  line-height: 1.5;
  overflow: hidden;
  margin-top: 10px;
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
