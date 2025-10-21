<script lang="ts" setup>
import { useSiteConfig } from 'valaxy'
import { computed } from 'vue'

const siteConfig = useSiteConfig()

const search = computed(() => siteConfig.value.search)
</script>

<template>
  <div class="silence-sidebar">
    <silence-sidebar-profile />
    <silence-sidebar-search v-if="search.enable" />
    <silence-sidebar-tag />
    <silence-sidebar-category />
    <silence-sidebar-archive />
  </div>
</template>

<style>
.silence-sidebar {
  width: 230px;
  padding-right: 15px;
  margin-right: 15px;
  box-sizing: content-box;
  border-right: 1px solid var(--border-color);
}
</style>
