import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "FDSM 生存指南",
  description: "一本小书",
  // 匹配你的 GitHub 仓库名
  base: '/FDSM-Guide/',
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '核心指南', link: '/academic/selection' }
    ],

    // 这里就是你的左侧目录树
    sidebar: [
      {
        text: '第一章：学术与选课避雷',
        items: [
          { text: '抢课玄学与递签手册', link: '/academic/selection' }
        ]
      },
      {
        text: '第二章：商赛与职业早期规划',
        items: [
          { text: '大一实习与 PTA 线', link: '/career/internship' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ivanfourth-cpu/FDSM-Guide' }
    ]
  }
})
