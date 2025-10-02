import type { Post } from 'valaxy'

import type { ComputedRef } from 'vue'
import { useHead } from '@unhead/vue'
import { storeToRefs } from 'pinia'

import { useBackToTop, useSiteStore } from 'valaxy'

import { computed } from 'vue'

export function useAllPosts(): ComputedRef<Post[]> {
  return computed(() => {
    const siteStore = useSiteStore()
    const { postList } = storeToRefs(siteStore)
    return postList.value
  })
}

export function scrollToTop() {
  const { backToTop } = useBackToTop()
  backToTop?.()
}

export function useHighlight(selector: string | HTMLElement, option: {
  className: string
  duration?: number
}) {
  const { className, duration = 1000 } = option
  const el = typeof selector === 'string' ? document.querySelector(selector) : selector
  if (!el)
    return
  el.classList.add(className)
  setTimeout(() => {
    el.classList.remove(className)
  }, duration)
}

export function setTitle(title: ComputedRef<string> | string) {
  useHead({
    title,
  })
}
