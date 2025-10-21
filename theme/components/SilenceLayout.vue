<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useMobile } from 'valaxy'
import { computed } from 'vue'
import { useSilenceAppStore } from '../store/app'

const props = withDefaults(defineProps<{
  header?: boolean
  sidebar?: boolean
  footer?: boolean
}>(), {
  header: true,
  sidebar: false,
  footer: true,
})

const silenceAppStore = useSilenceAppStore()
const { toc } = storeToRefs(silenceAppStore)

const isMobile = useMobile()

const sidebar = computed(() => {
  return props.sidebar && !isMobile.value
})
</script>

<template>
  <div class="silence-layout-wrapper" :class="{ toc }">
    <div class="silence-layout">
      <silence-header v-if="props.header" :is-mobile="isMobile" />
      <div class="flex">
        <silence-sidebar v-if="sidebar" />
        <div class="silence-layout-content">
          <slot />
        </div>
      </div>
      <silence-footer v-if="props.footer" />
    </div>
  </div>
</template>

<style>
.silence-layout {
  max-width: 960px;
  margin: 0 auto;
}

@media only screen and (max-width: 990px) {
  .silence-layout {
    padding: 0 15px;
  }
}

.silence-layout-content {
  flex: 1;
  max-width: 100%;
}

.silence-layout-wrapper {
  width: 100%;
  transition: width 0.3s ease;
}

.silence-layout-wrapper.toc {
  width: calc(100% - 250px);
}
</style>
