import type { ThemeConfig } from 'valaxy-theme-silence'
import { defineConfig } from 'valaxy'
import { addonAutoExcerpt } from 'valaxy-addon-auto-excerpt'
import themeConfig from './theme.config'

/**
 * User Config
 * do not use export const config to avoid defu conflict
 */
export default defineConfig<ThemeConfig>({
  theme: 'silence',
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
  addons: [
    addonAutoExcerpt(),
  ],
  themeConfig,
  devtools: false,
})
