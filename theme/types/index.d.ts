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
    navItems: NavItemWithChildren[]
  }>

  sidebar: {
    avatar: string
    author?: string
    intro?: string
    tagLimit?: number
    categoryLimit?: number
    friends?: {
      title: string
      url: string
    }[]
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
  title: string
  url?: string
  target?: string
}

export interface NavItemWithChildren extends NavItem {
  children?: NavItem[]
}

export type ThemeUserConfig = Partial<ThemeConfig>
