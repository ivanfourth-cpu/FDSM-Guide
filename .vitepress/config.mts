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

 // 左侧目录树
    sidebar: [
       {
        text: '前言',
        items: [
          { text: '一些个人碎碎念', link: '/prelogue/self_thoughts' },
          { text: '怎么适应大学生活', link: '/prelogue/adaption' },
          { text: '指南的初衷', link: '/prelogue/aim' }
        ]
      },
      {
        text: '第一章：学好一门课程',
        items: [
          { text: '选课概览', link: '/academic/selection' },
          { text: '数学分析A I', link: '/academic/Math Analysis A I' },
          { text: '数学分析A II', link: '/academic/Math Analysis A II' },
          { text: '线性代数 I', link: '/academic/Linear Algebra I' },
          { text: '线性代数 II', link: '/academic/Linear Algebra II' },
          { text: '管理学导论', link: '/academic/Management Intro' },
          { text: 'Python', link: '/academic/Python' },
          { text: '微观经济学', link: '/academic/Microeconomics' },
          { text: '会计学', link: '/academic/Accounting' },
          { text: '数据结构与算法导论', link: '/academic/dsa' },
          { text: '商业与技术伦理学', link: '/academic/ethics' },
        ]
      },
      {
        text: '第二章：打比赛？打什么？怎么打？',
        items: [
          { text: '商赛', link: '/competition/business' },
          { text: '创赛', link: '/competition/start-up' },
          { text: '其他', link: '/competition/others' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ivanfourth-cpu/FDSM-Guide' }
    ]
  }
})
