<script lang="ts" setup>
import type { CategoryList } from 'valaxy'
import { isCategoryList } from 'valaxy'
import { computed } from 'vue'

import { getCategoryLink } from '../utils/route'

const props = withDefaults(defineProps<{
  category: CategoryList
  defaultCollapse?: boolean
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
</script>

<template>
  <div class="silence-category-item">
    <silence-collapse :default-collapse="props.defaultCollapse">
      <template #default="{ toggle, collapse }">
        <div class="silence-category-item-title" :class="{ 'has-parent': hasParent }" @click="toggle">
          <div class="silence-category-item-title-left">
            <div class="silence-category-item-title-icon" :class="{ expand: !collapse }">
              <silence-icon v-if="hasChildren" icon="i-material-symbols-light-arrow-right" class="text-2xl" />
            </div>
            <app-link :to="getCategoryLink(category)" @click.stop>
              {{ category.name }}
            </app-link>
          </div>
          <div class="silence-category-item-title-count">
            {{ category.total }}
          </div>
        </div>
      </template>
      <template v-if="hasChildren" #content>
        <div class="silence-category-item-sub">
          <template v-for="child in children" :key="child.name">
            <silence-category-item :category="child" :default-collapse="props.defaultCollapse" has-parent />
          </template>
        </div>
      </template>
    </silence-collapse>
  </div>
</template>

<style>
.silence-category-item {
  cursor: pointer;
}

.silence-category-item-title {
  display: flex;
  user-select: none;
  align-items: center;
  position: relative;
  padding: 8px 16px 8px 8px;
}

.silence-category-item-title:hover {
  background-color: var(--panel-bg-color);
}

.silence-category-item-title-left {
  flex: 1;
  display: flex;
}

.silence-category-item-title-icon {
  width: 2em;
  height: 2em;
  transition: transform 0.2s ease;
}

.silence-category-item-title-icon.expand {
  transform: rotate(90deg);
}

.silence-category-item-title-count {
  padding: 0 10px;
  border-radius: 4px;
  background-color: var(--panel-bg-color);
}

.silence-category-item-title:hover .silence-category-item-title-count {
  background-color: var(--blog-bg-color);
}

.silence-category-item-sub {
  padding-left: 3em;
  position: relative;
}

.silence-category-item-sub::before {
  content: '';
  left: 0;
  top: 0;
  display: inline-block;
  position: absolute;
  height: calc(100% - 22px);
  transform: translate(calc(1.5em));
  border-left: 2px solid var(--panel-bg-color);
}

.silence-category-item-title.has-parent::before {
  content: '';
  display: inline-block;
  width: 1.5em;
  left: 0;
  position: absolute;
  border-top: 2px solid var(--panel-bg-color);
  transform: translate(calc(-1.5em));
}
</style>
