export namespace SilenceTheme {
  export type Config = ThemeConfig
}

/**
 * Theme Config
 */
export interface ThemeConfig {
  colors: string[]

  toggleDarkWithCircleTransition?: boolean

  header?: Partial<{
    title: string
    navItems: NavItemWithChildren[]
  }>

  sidebar?: {
    avatar: string
    author?: string
    intro?: string
    tagLimit?: number
    categoryLimit?: number
    archiveLimit?: number
    friends?: {
      title: string
      url: string
    }[]
  }
  /**
   * footer
   */
  footer?: Partial<{
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

  post?: Partial<{
    toc?: {
      serialNumber?: boolean
    }
    dateFormat?: string
  }>

}

export interface NavItem {
  title: string
  url?: string
  target?: string
}

export type NavItemWithChildren = NavItem & {
  children?: NavItem[]
}
