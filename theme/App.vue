<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { setTitle } from './utils/theme'

const route = useRoute()
const title = computed(() => {
  return route.meta.title as string ?? route.meta.frontmatter.title as string
})

setTitle(title)
</script>

<template>
  <silence-toolbar />
</template>
