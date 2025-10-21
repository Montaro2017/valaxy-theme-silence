import type { Post } from 'valaxy'

import type { ComputedRef } from 'vue'
import type { Signature } from '../types'
import { useHead, useMediaQuery } from '@unhead/vue'

import { storeToRefs } from 'pinia'

import { isEmpty } from 'radash'
import { useBackToTop, useSiteConfig, useSiteStore } from 'valaxy'

import { computed } from 'vue'
import { useThemeConfig } from '../composables'

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

export function useSignature(): ComputedRef<Signature> {
  return computed(() => {
    const siteConfig = useSiteConfig()
    const themeConfig = useThemeConfig()

    const enable = themeConfig.value.post.signature?.enable ?? false
    const author = themeConfig.value.post.signature?.author ?? siteConfig.value.author.name
    const license = themeConfig.value.post.signature?.license ?? {
      name: '署名-非商业性使用-相同方式共享 4.0 国际',
      url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
    }
    const remark = themeConfig.value.post.signature?.remark ?? null
    return {
      enable,
      author,
      license,
      remark,
    }
  })
}

export function useSponsor(): ComputedRef<{
  enable: boolean
  text?: string
  paypal?: string
  wechat?: string
  alipay?: string
}> {
  return computed(() => {
    const themeConfig = useThemeConfig()
    const text = themeConfig.value.post.sponsor?.text
    const paypal = themeConfig.value.post.sponsor?.paypal
    const wechat = themeConfig.value.post.sponsor?.wechat
    const alipay = themeConfig.value.post.sponsor?.alipay
    const enable = (themeConfig.value.post.sponsor?.enable ?? false) && (!isEmpty(paypal) || !isEmpty(wechat) || !isEmpty(alipay))
    return {
      enable,
      text,
      paypal,
      wechat,
      alipay,
    }
  })
}
