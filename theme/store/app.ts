import { isClient, useStorage } from '@vueuse/core'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { useValaxyDark } from 'valaxy'
import { computed, ref, watch } from 'vue'

import { useThemeConfig } from '../composables'

export const useSilenceAppStore = defineStore('silence', () => {
  const themeConfig = useThemeConfig()

  const color = useStorage('silence.color', themeConfig.value.colors?.[0] ?? '#ff5722')

  watch(color, () => {
    if (isClient) {
      document.documentElement.setAttribute('color', color.value)
    }
  }, {
    immediate: true,
  })

  const {isDark, toggleDark: toggleDarkWithoutTransition, toggleDarkWithTransition} = useValaxyDark({
    useDarkOptions: {
      selector: 'html',
      attribute: 'mode',
      valueDark: 'dark',
      valueLight: 'light',
      onChanged: (isDark: boolean | undefined, defaultHandler: (arg0: any) => void, mode: any) => {
        defaultHandler(mode)
        // valaxy自带html.dark样式
        if (isClient) {
          document.documentElement.classList.toggle('dark', isDark)
        }
      },
    },
  })

  const toggleDark = computed(() => {
    if (themeConfig.value.toggleDarkWithCircleTransition) {
      return (e: MouseEvent) => {
        toggleDarkWithTransition(e, {
          duration: 200,
        })
      }
    } else {
      return (_: MouseEvent) => {
        toggleDarkWithoutTransition()
      }
    }
  })

  const toc = ref(false)

  function toggleToc() {
    toc.value = !toc.value
  }

  return {
    color,
    isDark,
    toggleDark,
    toc,
    toggleToc,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSilenceAppStore, import.meta.hot))
}
