<script lang="ts" setup>
import { computed, ref } from 'vue'

const props = withDefaults(defineProps<{
  total: number
  pageSize: number
  pageNum?: number
}>(), {
  pageNum: 1,
})

const maxButtonCount = 7

const maxPageNum = computed(() => Math.ceil(props.total / props.pageSize))
const pageNum = computed(() => Math.min(Math.max(props.pageNum, 1), maxPageNum.value))

const buttons = computed(() => {
  const left = Array.from({ length: maxButtonCount - 1 })
    .map((_, i) => pageNum.value - maxButtonCount + 1 + i)
    .filter((n: number) => n > 0)
  const right = Array.from({ length: maxButtonCount - 1 })
    .map((_, i) => pageNum.value + i + 1)
    .filter((n: number) => n <= maxPageNum.value)
  const buttons = [...left, pageNum.value, ...right]
  if (buttons.length <= maxButtonCount) {
    return buttons
  }
  const pageNumIndex = left.length
  const offset = pageNumIndex <= Math.ceil(maxButtonCount / 2) ? 0 : pageNumIndex - Math.ceil(maxButtonCount / 2) + 1
  return buttons.slice(offset, offset + maxButtonCount)
})

const leftButtons = computed(() => {
  return buttons.value.filter((n: number) => n < pageNum.value)
})

const leftEllipsis = computed(() => {
  return leftButtons.value.length > 0 && !leftButtons.value.includes(1)
})

const displayLeftButtons = computed(() => {
  if (!leftEllipsis.value) {
    return leftButtons.value
  }
  return leftButtons.value.slice(2)
})

const rightButtons = computed(() => {
  return buttons.value.filter((n: number) => n > pageNum.value)
})

const rightEllipsis = computed(() => {
  return rightButtons.value.length > 0 && !rightButtons.value.includes(maxPageNum.value)
})

const displayRightButtons = computed(() => {
  if (!rightEllipsis.value) {
    return rightButtons.value
  }
  return rightButtons.value.slice(0, -2)
})

const hasPrev = computed(() => {
  return pageNum.value > 1
})

const hasNext = computed(() => {
  return pageNum.value < maxPageNum.value
})
</script>

<template>
  <div class="silence-pagination">
    <silence-button v-if="hasPrev" class="silence-patination-item">
      上一页
    </silence-button>
    <silence-button v-if="leftEllipsis" class="silence-patination-item">
      1
    </silence-button>
    <div v-if="leftEllipsis" class="silence-pagination-ellipsis">
      ···
    </div>
    <silence-button v-for="n in displayLeftButtons" :key="n" class="silence-patination-item">
      {{ n }}
    </silence-button>
    <silence-button class="silence-patination-item active">
      {{ pageNum }}
    </silence-button>
    <silence-button v-for="n in displayRightButtons" :key="n" class="silence-patination-item">
      {{ n }}
    </silence-button>
    <div v-if="rightEllipsis" class="silence-pagination-ellipsis">
      ···
    </div>
    <silence-button v-if="rightEllipsis" class="silence-patination-item">
      {{ maxPageNum }}
    </silence-button>
    <silence-button v-if="hasNext" class="silence-patination-item">
      下一页
    </silence-button>
  </div>
</template>

<style scoped>
.silence-pagination {
  display: flex;
  gap: 8px;
  margin-top: 16px;
  justify-content: end;
}

.silence-patination-item.active {
  border: none;
}
</style>
