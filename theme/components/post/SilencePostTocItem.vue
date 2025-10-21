<script lang="ts" setup>
import type { MenuItem } from 'valaxy'

defineProps<{
  headers: MenuItem[]
  serialNumber: boolean
  numbers?: number[]
}>()
</script>

<template>
  <ul class="silence-post-toc-item">
    <li v-for="(header, index) in headers" :key="header.title">
      <a :href="header.link">{{ serialNumber ? `${(numbers ?? []).concat(index + 1).join('.')}. ` : '' }}{{ header.title
      }}</a>
      <silence-post-toc-item
        v-if="header.children?.length ?? 0 > 0" :headers="header.children!"
        :numbers="(numbers ?? []).concat(index + 1)" :serial-number="serialNumber"
      />
    </li>
  </ul>
</template>

<style>
.silence-post-toc-item a {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 300 !important;
}

.silence-post-toc-item > li > .silence-post-toc-item {
  padding-left: 1em;
}
</style>
