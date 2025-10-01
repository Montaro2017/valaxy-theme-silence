<script lang="ts" setup>
import type { dayjs, Post } from 'valaxy'
import { computed } from 'vue'
import { getArchiveLink } from '../../utils/route'

const props = defineProps<{
  archive: [string, { id: string, date: dayjs.Dayjs, posts: Post[] }]
}>()

const group = computed(() => props.archive[0])
const count = computed(() => props.archive[1].posts.length)
</script>

<template>
  <app-link :to="getArchiveLink(archive)" class="silence-sidebar-archive-item">
    {{ group }}({{ count }})
  </app-link>
</template>

<style>
.silence-sidebar-archive-item {
  display: flex;
  padding: 5px 0;
  font-size: 15px;
  font-weight: 300;
}
</style>
