<script lang="ts" setup>
import type { Signature } from '../../types'
import { computed } from 'vue'

const props = defineProps<{
  signature: Signature
  postUrl?: string
}>()

const signature = computed(() => props.signature)
const postUrl = computed(() => props.postUrl ?? window.location.href)
</script>

<template>
  <div class="silence-post-signature">
    <p class="flex">
      <span class="shrink-0">作者：</span>
      <span>{{ signature.author }}</span>
    </p>
    <p class="flex">
      <span class="shrink-0">出处：</span>
      <a :href="postUrl">{{ postUrl }}</a>
    </p>
    <p class="flex">
      <span class="shrink-0">版权：</span>
      <span>本作品采用「<a :href="signature.license.url" target="_blank">{{ signature.license.name }}</a>」许可协议进行许可。</span>
    </p>
    <p v-if="signature.remark">
      {{ signature.remark }}
    </p>
  </div>
</template>

<style>
.silence-post-signature {
  padding: 12px 24px 12px 20px;
  font-size: 15px;
  background: var(--panel-bg-color);
  position: relative;
  border-radius: 4px;
  border-left: 4px solid var(--theme-color);
}

.silence-post-signature a {
  font-weight: 300;
  color: var(--text-color) !important;
}

.silence-post-signature a:hover {
  opacity: 0.7;
}
</style>
