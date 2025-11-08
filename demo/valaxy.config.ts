import type { ThemeConfig } from 'valaxy-theme-silence'
import { defineConfig } from 'valaxy'
import themeConfig from './theme.config'

/**
 * User Config
 * do not use export const config to avoid defu conflict
 */
export default defineConfig<ThemeConfig>({
  theme: 'silence',
  fuse: {
    extendKeys: ['date']
  },
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
  groupIcons: {
    customIcon: {
      '.java': 'vscode-icons:file-type-java',
    },
  },
  themeConfig,
  devtools: false,
})
