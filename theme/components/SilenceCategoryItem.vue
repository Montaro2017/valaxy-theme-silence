<script lang="ts" setup>
import type { CategoryList } from 'valaxy'
import { isCategoryList } from 'valaxy'
import { computed, ref } from 'vue'

import { getCategoryLink } from '../utils/route'

const props = withDefaults(defineProps<{
  category: CategoryList
  defaultExpand?: boolean
  hasParent?: boolean
}>(), {
  hasParent: false,
})

const category = computed(() => props.category)
const children = computed(() => {
  return Array.from(category.value.children)
    .filter(([_, child]) => isCategoryList(child))
    .map(([_, child]) => child as CategoryList)
})

const hasChildren = computed(() => children.value.length > 0)

const expand = ref(props.defaultExpand ?? false)
</script>

<template>
  <div class="silence-category-item" :class="{ expand }">
    <div class="silence-category-item-inner" :class="{ 'has-parent': props.hasParent }" @click="expand = !expand">
      <div class="silence-category-item-inner-left">
        <div class="silence-category-item-inner-icon" :class="{ expand }">
          <silence-icon v-if="hasChildren" icon="i-material-symbols-light-arrow-right" class="text-2xl" />
        </div>
        <app-link :to="getCategoryLink(category)" @click.stop>
          {{ category.name }}
        </app-link>
      </div>
      <div class="silence-category-item-inner-count">
        {{ category.total }}
      </div>
    </div>
    <div v-if="hasChildren" class="silence-category-item-sub" :class="{ expand }">
      <div class="silence-category-item-sub-inner">
        <template v-for="child in children" :key="child.name">
          <silence-category-item :category="child" :default-expand="props.defaultExpand" has-parent />
        </template>
      </div>
    </div>
  </div>
</template>

<style>
.silence-category-item {
  cursor: pointer;
}

.silence-category-item-inner {
  display: flex;
  user-select: none;
  position: relative;
  padding: 8px 16px 8px 8px;
  align-items: center;
}

.has-parent.silence-category-item-inner::before {
  content: '';
  width: 1.5em;
  left: 0;
  position: absolute;
  display: inline-block;
  transform: translateX(-1.5em);
  border-top: 2px dashed var(--border-color);
}

.silence-category-item-inner:hover {
  background-color: var(--panel-bg-color);
}

.silence-category-item-inner-left {
  flex: 1;
  display: flex;
}

.silence-category-item-inner-count {
  padding: 0 10px;
  border-radius: 4px;
  background-color: var(--panel-bg-color);
}

.silence-category-item-inner:hover .silence-category-item-inner-count {
  background-color: var(--blog-bg-color);
}

.silence-category-item-inner-icon {
  width: 2em;
  height: 2em;
  transition: transform 0.2s ease-out;
}

.silence-category-item-sub {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.2s ease-out;
}

.silence-category-item-sub-inner {
  min-height: 0;
  padding-left: 3em;
  position: relative;
  overflow: hidden;
}

.silence-category-item-sub-inner::before {
  content: '';
  height: calc(100% - 22px);
  left: 0;
  transform: translate(1.5em, 0);
  position: absolute;
  display: inline-block;
  border-left: 2px dashed var(--border-color);
}

.silence-category-item-sub.expand {
  grid-template-rows: 1fr;
}

.silence-category-item-inner-icon.expand {
  transform: rotate(90deg);
}
</style>
