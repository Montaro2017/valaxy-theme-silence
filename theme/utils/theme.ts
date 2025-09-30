import type { Post } from 'valaxy'

import type { ComputedRef } from 'vue'
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
