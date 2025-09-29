<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useThemeConfig } from '../composables'

const themeConfig = useThemeConfig()
const postLayouts = computed(() => {
  const layout = themeConfig.value.postLayout
  if (!Array.isArray(layout)) {
    return [layout]
  }
  return layout
})

const route = useRoute()

const showMore = ref(false)
const tocBtn = computed(() => {
  return postLayouts.value.includes(route.meta.layout as string)
})
</script>

<template>
  <div class="silence-toolbar" :class="{ 'show-more': showMore }">
    <div class="silence-toolbar-more" @click.stop="showMore = !showMore">
      <div class="i-material-symbols-light-more-horiz" />
    </div>
    <div class="silence-toolbar-palette silence-toolbar-btn">
      <div class="i-material-symbols-light-palette-outline" />
    </div>
    <div class="silence-toolbar-mode silence-toolbar-btn">
      <div class="i-material-symbols-light-dark-mode-outline" />
    </div>
    <div class="silence-toolbar-top silence-toolbar-btn">
      <div class="i-material-symbols-light-keyboard-arrow-up" />
    </div>
    <div v-if="tocBtn" class="silence-toolbar-menu silence-toolbar-btn">
      <div class="i-material-symbols-light-menu" />
    </div>
  </div>
</template>

<style scoped>
.silence-toolbar {
  position: fixed;
  right: 30px;
  bottom: 30px;
}

.silence-toolbar > div {
  cursor: pointer;
}

.silence-toolbar-more {
  width: 45px;
  height: 45px;
  color: #fff;
  display: flex;
  border-radius: 50%;
  line-height: 45px;
  font-size: 28px;
  z-index: 1001;
  position: relative;
  text-align: center;
  transition: transform 0.3s ease;
  background-color: var(--theme-color);
  box-shadow: var(--toolbar-box-shadow);
}

.show-more .silence-toolbar-more {
  transform: rotate(270deg);
}

.silence-toolbar-more > div {
  margin: auto auto;
}

.silence-toolbar-btn {
  width: 35px;
  height: 35px;
  z-index: 1000;
  right: 0;
  bottom: 0;
  opacity: 0;
  display: flex;
  font-size: 24px;
  border-radius: 4px;
  position: absolute;
  color: var(--text-color);
  background-color: #fff;
  transition: all 0.3s ease;
  box-shadow: var(--toolbar-box-shadow);
}

.silence-toolbar-btn > div {
  margin: auto auto;
}

.silence-toolbar-btn:hover {
  color: #fff;
  background-color: var(--theme-color);
}

.show-more .silence-toolbar-btn {
  opacity: 1;
}

.show-more .silence-toolbar-palette {
  transform: translate(-200%, 0);
}

.show-more .silence-toolbar-mode {
  transform: translate(-140%, -140%);
}

.show-more .silence-toolbar-top {
  transform: translate(0, -200%);
}

.show-more .silence-toolbar-menu {
  transform: translate(-350%, 0);
}
</style>
