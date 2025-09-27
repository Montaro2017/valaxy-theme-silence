<script lang="ts" setup>
import { useTags } from 'valaxy'

const tags = useTags()
</script>

<template>
  <silence-content-block title="所有标签">
    <div class="silence-tag-list">
      <app-link v-for="[name, { count }] in tags" :key="name" :to="`/tag/${name}`" class="silence-tag-list-item">
        <div class="silence-tag-list-item-name">
          {{ name }}
        </div>
        <div class="silence-tag-list-item-count">
          {{ count }}
        </div>
      </app-link>
    </div>
  </silence-content-block>
</template>

<style scoped>
.silence-tag-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
}

.silence-tag-list-item {
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;
  align-items: center;
  margin: 0 8px 8px 0;
  border-radius: 4px;
  overflow: hidden;
  padding: 2px 10px;
  background-color: var(--panel-bg-color);
}

.silence-tag-list-item-name,
.silence-tag-list-item-count {
  color: inherit;
}

.silence-tag-list-item-count {
  font-weight: 300;
}
</style>
