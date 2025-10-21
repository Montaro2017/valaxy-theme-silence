<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useOutline } from 'valaxy'
import { nextTick, onUnmounted } from 'vue'
import { useSilenceAppStore } from '../../store/app'

const props = withDefaults(defineProps<{
  defaultToc?: boolean
  serialNumber?: boolean
}>(), {
  defaultToc: false,
  serialNumber: true,
})

const outline = useOutline()
const { headers } = outline

const silenceAppStore = useSilenceAppStore()

const { toc } = storeToRefs(silenceAppStore)

nextTick(() => {
  if (headers.value.length <= 0) {
    toc.value = false
  }
  else {
    toc.value = props.defaultToc
  }
})

onUnmounted(() => {
  toc.value = false
})
</script>

<template>
  <div class="silence-post-toc" :class="{ open: toc }">
    <silence-post-toc-item :headers="headers" :serial-number="serialNumber" />
  </div>
</template>

<style>
.silence-post-toc {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 280px;
  padding: 1em;
  z-index: 900;
  transform: translate(100%, 0);
  transition: transform 0.3s ease;
  background-color: var(--blog-bg-color);
  border-left: 1px solid var(--border-color);
}

.silence-post-toc.open {
  transform: translate(0, 0);
}
</style>
