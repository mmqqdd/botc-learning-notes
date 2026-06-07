import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "孟强定的笔记本",
  description: "学习、复盘、思考的归档地。",

  // 让 README.md 在博客构建中被忽略（首页用 index.md）
  // README.md 仅作为 Gitee 仓库主页展示
  srcExclude: ['README.md', 'node_modules/**'],

  // URL 重写：源文件保留中文名（仓库友好），博客 URL 用英文（分享友好）
  rewrites: {
    '01-快速入门.md': 'guide/quick-start.md',
    '02-完整规则.md': 'guide/rules.md',
    '03-暗流涌动角色详解.md': 'guide/roles.md',
    '04-新手策略与误区.md': 'guide/strategy.md',
    '05-学习资源.md': 'guide/resources.md',
    '06-术语速查表.md': 'guide/glossary.md',
    '游戏复盘.md': 'replays/001.md',
  },

  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
      {
        text: '血染钟楼',
        items: [
          { text: '快速入门', link: '/guide/quick-start' },
          { text: '完整规则', link: '/guide/rules' },
          { text: '暗流涌动角色详解', link: '/guide/roles' },
          { text: '新手策略与误区', link: '/guide/strategy' },
          { text: '学习资源', link: '/guide/resources' },
          { text: '术语速查表', link: '/guide/glossary' },
          { text: '第 1 局复盘', link: '/replays/001' },
        ],
      },
      { text: '关于', link: '/about' },
    ],

    // 左侧边栏
    sidebar: {
      '/': [
        {
          text: '血染钟楼 · 入门指南',
          collapsed: false,
          items: [
            { text: '01 · 快速入门', link: '/guide/quick-start' },
            { text: '02 · 完整规则', link: '/guide/rules' },
            { text: '03 · 暗流涌动角色详解', link: '/guide/roles' },
            { text: '04 · 新手策略与误区', link: '/guide/strategy' },
            { text: '05 · 学习资源', link: '/guide/resources' },
            { text: '06 · 术语速查表', link: '/guide/glossary' },
          ],
        },
        {
          text: '血染钟楼 · 实战复盘',
          collapsed: false,
          items: [
            { text: '第 1 局 · 暗流涌动 13 人', link: '/replays/001' },
          ],
        },
        {
          text: '其他',
          collapsed: true,
          items: [
            { text: '关于这个站点', link: '/about' },
          ],
        },
      ],
    },

    // 站点其他配置
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mmqqdd/botc-learning-notes' },
    ],

    outline: {
      level: [2, 3],
      label: '本页大纲',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    lastUpdatedText: '最后更新',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清空',
            backButtonTitle: '返回',
            noResultsText: '没有找到相关结果',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    footer: {
      message: '基于 VitePress 构建 · 仓库托管于 Gitee / GitHub',
      copyright: '© 2026 孟强定',
    },
  },
})
