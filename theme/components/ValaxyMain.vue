<script lang="ts" setup>
import type { Post } from 'valaxy'
import { useSiteConfig } from 'valaxy'
import { computed } from 'vue'
import { useThemeConfig } from '../composables'
import { useSignature, useSponsor } from '../utils/theme'

const props = defineProps<{
  frontmatter: Post
}>()
const siteConfig = useSiteConfig()

const signature = useSignature()
const sponsor = useSponsor()

const themeConfig = useThemeConfig()

const defaultToc = computed(() => {
  return props.frontmatter.toc ?? themeConfig.value.post.toc?.active ?? false
})

const tocSerialNumber = computed(() => {
  return themeConfig.value.post.toc?.serialNumber ?? true
})
</script>

<template>
  <div class="silence-post">
    <header class="silence-post-title">
      {{ frontmatter.title }}
    </header>
    <main>
      <div class="max-w-none prose dark:prose-invert">
        <ValaxyMd :frontmatter="frontmatter">
          <slot name="main-content-md" />
        </ValaxyMd>
      </div>
      <silence-signature v-if="signature.enable" :signature="signature" />
      <silence-post-info :frontmatter="frontmatter" />
      <silence-sponsor v-if="sponsor.enable" :sponsor="sponsor" />
      <silence-post-nav />
    </main>
    <footer>
      <silence-post-toc :default-toc="defaultToc" :serial-number="tocSerialNumber" />
      <slot v-if="siteConfig.comment.enable && frontmatter.comment !== false" name="comment" />
    </footer>
  </div>
</template>

<style>
.silence-post-title {
  font-size: 21px;
  line-height: 1.2;
}
</style>
