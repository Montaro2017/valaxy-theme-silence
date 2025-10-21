import type { ThemeConfig } from 'valaxy-theme-starter'
import { defineConfig } from 'valaxy'

/**
 * User Config
 * do not use export const config to avoid defu conflict
 */
export default defineConfig<ThemeConfig>({
  theme: 'starter',
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
  themeConfig: {
    colors: [
      '#ff5722',
      '#0078E7',
      '#fa7298',
      '#42b983',
      '#607d8b',
      '#5e72e4',
      '#ff9700',
      '#009688',
      '#673bb7',
      '#906f61',
    ],
    header: {
      title: '碱式碳酸铜\'s Blog',
      navItems: [
        {
          title: '首页',
          url: '/',
        },
        {
          title: 'Github',
          children: [
            {
              title: 'Github',
              url: 'https://github.com/montaro2017',
            },
            {
              title: 'Gitee',
              url: 'https://gitee.com/montaro2017',
            },
          ],
        },
        {
          title: '分类',
          url: '/categories',
        },
        {
          title: '标签',
          url: '/tags',
        },
        {
          title: '归档',
          url: '/archives',
        },
      ],
    },
    sidebar: {
      avatar: '/assets/avatar.jpg',
      intro: '你所热爱的，就是你的生活',
      tagLimit: 0,
      categoryLimit: 0,
      archiveLimit: 0,
    },
    footer: {
      copyright: 'Copyright © 2025 XXXXX',
      beian: {
        enable: true,
        icp: '苏ICP备xxxxxxxx号',
      },
      powered: {
        enable: true,
      },
    },
    post: {
      signature: {
        enable: true,
      },
      sponsor: {
        enable: true,
        alipay: '/alipay.jpg',
        wechat: '/wechat.png',
      },
      toc: {
        active: false,
        serialNumber: true,
      },
    },
  },
  devtools: false,
})
