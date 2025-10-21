<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

defineOptions({
  name: 'DefaultLayout',
})

const route = useRoute()
const frontmatter = computed(() => route.meta.frontmatter)

const sidebar = computed(() => frontmatter.value.sidebar ?? true)
</script>

<template>
  <silence-layout :sidebar="sidebar">
    <router-view />
  </silence-layout>
</template>
