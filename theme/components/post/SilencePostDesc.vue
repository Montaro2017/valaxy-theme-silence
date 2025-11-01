<script lang="ts" setup>
import type { Post } from 'valaxy'
import { useSiteConfig } from 'valaxy'
import { computed } from 'vue'

defineProps<{
  frontmatter: Post
}>()

const siteConfig = useSiteConfig()

const author = computed(() => siteConfig.value.author.name)
</script>

<template>
  <div class="silence-post-desc">
    <div>posted @ </div>
    <div class="silence-post-desc-date">
      {{ frontmatter.date }}
    </div>
    <div class="silence-post-desc-author">
      {{ author }}
    </div>
  </div>
</template>

<style>
.silence-post-desc {
  padding-top: 5px;
  margin-top: 5px;
  display: flex;
  gap: 4px;
  justify-content: end;
  border-top: 1px solid var(--border-color);
}
</style>
