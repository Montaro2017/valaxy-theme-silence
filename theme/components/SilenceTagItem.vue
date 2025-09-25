<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{ tag: [string, { count: number }] }>()
const name = computed(() => props.tag[0])
const count = computed(() => props.tag[1].count)
</script>

<template>
  <a class="silence-tag-item" href="#">
    <span class="silence-tag-item-name">
      {{ name }}
    </span>
    <span class="silence-tag-item-count">
      {{ count }}
    </span>
  </a>
</template>

<style scoped>
.silence-tag-item {
  font-size: 14px;
  white-space: nowrap;
  border-radius: 4px;
  overflow: hidden;
  padding: 5px 8px;
  display: inline-block;
  margin: 0 6px 6px 0;
  transition: all 0.3s ease;
  background-color: var(--panel-bg-color);
}

.silence-tag-item:hover {
  color: #fff !important;
  background-color: var(--theme-color);
}

.silence-tag-item-name {
  color: inherit;
}

.silence-tag-item-count {
  display: none;
}

.silence-tag-item-count::before {
  content: '(';
}

.silence-tag-item-count::after {
  content: ')';
}
</style>
