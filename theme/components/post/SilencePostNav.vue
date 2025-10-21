<script lang="ts" setup>
import { usePrevNext } from 'valaxy'
import { getPostLink } from '../../utils/route'

const [prev, next] = usePrevNext()
</script>

<template>
  <div v-if="prev != null || next != null" class="silence-post-nav">
    <div v-if="prev != null" class="silence-post-nav-item">
      <span>« 上一篇：</span>
      <a :href="getPostLink(prev)">{{ prev.title }}</a>
    </div>
    <div v-if="next != null" class="silence-post-nav-item">
      <span>» 下一篇：</span>
      <a :href="getPostLink(next)">{{ next.title }}</a>
    </div>
  </div>
</template>

<style>
.silence-post-nav {
  margin-top: 15px;
}

.silence-post-nav-item {
  color: var(--text-color);
  font-weight: 300;
  display: flex;
  white-space: nowrap;
}

.silence-post-nav-item a {
  font-weight: 300;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
