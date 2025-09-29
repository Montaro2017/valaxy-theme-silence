<script lang="ts" setup>
import type { NavItem, NavItemWithChildren } from 'theme/types'
import { computed } from 'vue'

const props = defineProps<{
  item: NavItemWithChildren | NavItem
}>()

const item = computed(() => props.item)
const hasChildren = computed(() => ((item.value as NavItemWithChildren).children?.length ?? 0) > 0)
</script>

<template>
  <div class="silence-header-nav-item">
    <app-link :to="item.url" :target="item.target">
      {{ item.title }}
    </app-link>
    <template v-if="hasChildren">
      <silence-icon icon="material-symbols-light:keyboard-arrow-down" />
      <div class="silence-header-nav-item-subnav">
        <div class="silence-header-nav-item-subnav-caret" />
        <div class="silence-header-nav-item-subnav-content">
          <div
            v-for="child in (item as NavItemWithChildren).children" :key="child.title"
            class="silence-header-nav-item-subnav-item"
          >
            <app-link :to="child.url" :target="child.target" class="h-100% w-100%">
              {{ child.title }}
            </app-link>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.silence-header-nav-item {
  display: flex;
  gap: 4px;
  position: relative;
}

.silence-header-nav-item a {
  font-weight: 300;
}

.silence-header-nav-item > .silence-icon {
  transition: transform 0.2s ease-in-out;
}

.silence-header-nav-item:hover > .silence-icon {
  transform: rotate(180deg);
}

.silence-header-nav-item-subnav {
  opacity: 0;
  transform: scaleY(0);
  position: absolute;
  top: 0;
  z-index: 900;
  width: 160px;
  padding-top: 8px;
  left: calc(50% - 80px);
  transition: all 0.2s ease-in-out;
  background-color: var(--blog-bg-color);
}

.silence-header-nav-item:hover .silence-header-nav-item-subnav {
  opacity: 1;
  top: 100%;
  transform: scaleY(1);
}

.silence-header-nav-item-subnav-content {
  padding: 10px;
  box-shadow: var(--pane-box-shadow);
}

.silence-header-nav-item-subnav-caret {
  width: 0;
  margin: 0 auto;
  position: relative;
  border-top: 0 solid transparent;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid var(--blog-bg-color);
}

.silence-header-nav-item-subnav-item {
  display: flex;
  height: 50px;
  text-align: center;
  line-height: 50px;
}

.silence-header-nav-item-subnav-item:hover {
  background-color: var(--panel-bg-color);
}
</style>
