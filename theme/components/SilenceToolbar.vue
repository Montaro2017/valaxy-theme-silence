<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { useLayout } from 'valaxy'
import { computed, ref, useTemplateRef, watch } from 'vue'
import { useThemeConfig } from '../composables'
import { useSilenceAppStore } from '../store/app'
import { scrollToTop } from '../utils/theme'

const themeConfig = useThemeConfig()
const postLayouts = computed(() => {
  const layout = themeConfig.value.postLayout
  if (!Array.isArray(layout)) {
    return [layout]
  }
  return layout
})

const layout = useLayout()
const showMore = ref(false)
const tocBtn = computed(() => {
  return postLayouts.value.includes(layout.value as string)
})

const silenceToolbar = useTemplateRef('silenceToolbar')
onClickOutside(silenceToolbar, () => {
  showMore.value = false
})

const colors = computed(() => themeConfig.value.colors)
const paletteRow = computed(() => {
  const colorCount = colors.value.length
  return Math.ceil(colorCount / 5)
})

const gridTemplateRows = computed(() => {
  return `repeat(${paletteRow.value}, 1fr)`
})

const paletteColumn = computed(() => {
  const colorCount = colors.value.length
  return Math.ceil(colorCount / paletteRow.value)
})

const gridTemplateColumns = computed(() => {
  return `repeat(${paletteColumn.value}, 1fr)`
})

const showPalette = ref(false)

watch(showMore, (newValue) => {
  if (!newValue) {
    showPalette.value = false
  }
})

const silenceAppStore = useSilenceAppStore()
const { toggleDark } = silenceAppStore
const { color, isDark } = storeToRefs(silenceAppStore)
</script>

<template>
  <div ref="silenceToolbar" class="silence-toolbar" :class="{ 'show-more': showMore, 'show-palette': showPalette }">
    <div class="silence-toolbar-more" @click.stop="showMore = !showMore">
      <silence-icon icon="i-material-symbols-light-more-horiz" />
    </div>
    <div class="silence-toolbar-btn-palette silence-toolbar-btn" @click="showPalette = !showPalette">
      <div class="i-material-symbols-light-palette-outline" />
    </div>
    <div class="silence-toolbar-btn-mode silence-toolbar-btn" @click="e => toggleDark(e)">
      <div v-if="!isDark" class="i-material-symbols-light-dark-mode-outline" />
      <div v-else class="i-material-symbols-light-light-mode-outline" />
    </div>
    <div class="silence-toolbar-btn-top silence-toolbar-btn" @click="scrollToTop">
      <div class="i-material-symbols-light-keyboard-arrow-up" />
    </div>
    <div v-if="tocBtn" class="silence-toolbar-menu silence-toolbar-btn">
      <div class="i-material-symbols-light-menu" />
    </div>
    <div class="silence-toolbar-palette">
      <div class="m-b-0.5em text-center text-16px">
        选择颜色
      </div>
      <div class="silence-toolbar-palette-colors" :style="{ gridTemplateRows, gridTemplateColumns }">
        <div
          v-for="c in colors" :key="c" class="silence-toolbar-palette-color" :style="{ '--color': c }"
          @click="color = c"
        />
      </div>
    </div>
  </div>
</template>

<style>
.silence-toolbar {
  position: fixed;
  right: 30px;
  bottom: 30px;
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
  cursor: pointer;
  position: relative;
  text-align: center;
  transition: transform 0.2s ease;
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
  display: flex;
  cursor: pointer;
  visibility: hidden;
  right: 0;
  bottom: 0;
  opacity: 0;
  font-size: 24px;
  border-radius: 4px;
  position: absolute;
  color: var(--text-color);
  transition: all 0.2s ease;
  background-color: var(--blog-bg-color);
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
  visibility: visible;
}

.show-more .silence-toolbar-btn-palette {
  transform: translate(-200%, 0);
}

.show-more .silence-toolbar-btn-mode {
  transform: translate(-140%, -140%);
}

.show-more .silence-toolbar-btn-top {
  transform: translate(0, -200%);
}

.show-more .silence-toolbar-menu {
  transform: translate(-350%, 0);
}

.silence-toolbar-palette {
  bottom: 0;
  left: 50%;
  z-index: 1000;
  position: fixed;
  padding: 20px 50px;
  transition: all 0.2s ease;
  transform: translate(-50%, 100%);
  box-shadow: var(--toolbar-box-shadow);
  background-color: var(--blog-bg-color);
}

.show-more.show-palette .silence-toolbar-palette {
  transform: translate(-50%, 0);
}

.silence-toolbar-palette-colors {
  gap: 8px;
  display: grid;
}

.silence-toolbar-palette-color {
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 4px;
  background-color: var(--color);
}
</style>
