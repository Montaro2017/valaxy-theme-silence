<script lang="ts" setup>
import type { Post } from 'valaxy'
import { computed } from 'vue'
import { getCategoryLink, getTagLink } from '../../utils/route'

const props = defineProps<{
  frontmatter: Post
}>()

const categories = computed(() => {
  if (typeof (props.frontmatter.categories) === 'string') {
    return [props.frontmatter.categories]
  }
  return props.frontmatter.categories || []
})

const tags = computed(() => {
  return props.frontmatter.tags || []
})
</script>

<template>
  <div v-if="categories.length > 0 || tags.length > 0" class="silence-post-info">
    <div v-if="categories.length > 0" class="silence-post-info-categories">
      <silence-icon icon="i-material-symbols-light-category-outline" class="text-size-17px" />
      <span>分类：</span>
      <a
        v-for="category in categories" :key="category" :href="getCategoryLink(category)" target="_blank"
        class="silence-post-info-item"
      >
        {{ category }}
      </a>
    </div>
    <div v-if="tags.length > 0" class="silence-post-info-tags">
      <silence-icon icon="i-material-symbols-light-sell-outline-sharp" class="text-size-17px" />
      <span>标签：</span>
      <a v-for="tag in tags" :key="tag" :href="getTagLink(tag)" target="_blank" class="silence-post-info-item">
        {{ tag }}
      </a>
    </div>
  </div>
</template>

<style>
.silence-post-info {
  margin-top: 20px;
}

.silence-post-info-categories,
.silence-post-info-tags {
  gap: 4px;
  display: flex;
  align-items: center;
}

.silence-post-info-item {
  font-size: 13px;
  border-radius: 4px;
  padding: 4px 10px;
  line-height: 1.2;
  background-color: var(--panel-bg-color);
  margin-right: 5px;
  transition: none;
  color: var(--text-color);
}

.silence-post-info-item:hover {
  color: #fff !important;
  background-color: var(--theme-color);
  opacity: 1;
  transition: all 0.3s ease;
}
</style>
