export namespace SilenceTheme {
  export type Config = ThemeConfig
}

/**
 * Theme Config
 */
export interface ThemeConfig {
  colors: string[]

  toggleDarkWithCircleTransition?: boolean

  postLayout?: string | string[]

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
    archiveLimit?: number
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

  post: {
    signature?: Partial<Signature>

    sponsor?: {
      enable?: boolean
      text?: string
      alipay?: string
      paypal?: string
      wechat?: string
    }

    toc?: {
      active?: boolean
      serialNumber?: boolean
    }
  }

}

export interface NavItem {
  title: string
  url?: string
  target?: string
}

export type NavItemWithChildren = NavItem & {
  children?: NavItem[]
}

export interface Signature {
  enable: boolean
  author: string
  license: {
    name: string
    url: string
  }
  remark: string | null
}
