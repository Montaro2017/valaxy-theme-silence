import type { DefaultTheme } from 'valaxy'

export namespace StarterTheme {
  export type Config = ThemeConfig
  export type Sidebar = any
}

/**
 * Theme Config
 */
export interface ThemeConfig extends DefaultTheme.Config {
  colors: string[]

  header?: Partial<{
    title: string
    navItems: NavItem[]
  }>

  sidebar: {
    avatar: string
    author?: string
    intro?: string
    tagLimit?: number
    categoryLimit?: number
  }
  /**
   * footer
   */
  footer: Partial<{
    copyright: string
    beian: {
      enable: boolean
      icp: string
      url?: string
    }
    powered: {
      enable: boolean
      withSilence?: boolean
    }
  }>
}

export interface NavItem {
  text: string
  link: string
}

export type ThemeUserConfig = Partial<ThemeConfig>
