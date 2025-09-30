<script lang="ts" setup>
import { useSiteConfig } from 'valaxy'
import { computed } from 'vue'
import { useThemeConfig } from '../../composables'

const siteConfig = useSiteConfig()
const themeConfig = useThemeConfig()

const title = computed(() => {
  return themeConfig.value.header?.title ?? siteConfig.value.author.name ?? ''
})

const navItems = computed(() => themeConfig.value.header?.navItems ?? [])
</script>

<template>
  <div class="silence-header">
    <div class="silence-header-title">
      <app-link to="/">
        {{ title }}
      </app-link>
    </div>
    <div class="silence-header-navigator">
      <silence-header-nav-item v-for="item in navItems" :key="item.title" :item="item" />
    </div>
  </div>
</template>

<style>
.silence-header {
  height: 60px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
}

.silence-header-title a {
  font-size: 25px;
  font-weight: 600;
  font-family: Georgia;
}

.silence-header-navigator {
  display: flex;
  height: 100%;
  align-items: center;
}

.silence-header-nav-item {
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  font-size: 17px;
  padding: 0 15px;
}

.silence-header-nav-item::after {
  content: '';
  position: absolute;
  margin: 0 auto;
  height: 4px;
  left: -50%;
  bottom: 0;
  width: 100%;
  transform: translateX(50%) scaleX(0);
  transition: 0.2s ease-in-out;
  background-color: var(--theme-color);
}

.silence-header-nav-item:hover::after {
  visibility: visible;
  transform: translateX(50%) scaleX(1);
}
</style>
