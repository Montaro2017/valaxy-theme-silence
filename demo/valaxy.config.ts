import type { ThemeConfig } from 'valaxy-theme-starter'
import { defineConfig } from 'valaxy'

/**
 * User Config
 * do not use export const config to avoid defu conflict
 */
export default defineConfig<ThemeConfig>({
  theme: 'starter',

  themeConfig: {
    sidebar: {
      avatar: '/assets/avatar.jpg',
      intro: '你所热爱的，就是你的生活',
      tagLimit: 3,
      categoryLimit: 4,
    },
    footer: {
      copyright: 'Copyright © 2025 XXXXX',
      beian: {
        enable: true,
        icp: '苏ICP备xxxxxxxx号',
      },
      powered: {
        enable: false,
      },
    },
  },
})
