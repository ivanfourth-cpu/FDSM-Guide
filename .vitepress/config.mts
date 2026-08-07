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
        collapsed: false, // 👈 开启折叠功能（默认展开）
        items: [
          { text: '一些个人碎碎念', link: '/prelogue/self_thoughts' },
          { text: '指南的初衷', link: '/prelogue/aim' }
        ]
      },

// 第零章-------
   {
        text: '第零章：Maybe Tips',
        collapsed: false,
        items: [
          { text: '如何适应大学生活', link: '/tips/adaption' },
          { text: '别样的生活方式', link: '/tips/lifestyle' }
        ]
      },

// 第一章-------
      {
        text: '第一章：课程',
        collapsed: false, // 👈 主章节可折叠
        items: [
          { text: '选课概览', link: '/academic/selection' },
          
          // 🔽 增加的中间层级：数学与基础课
          {
            text: '专业课程',
            collapsed: true, // 👈 子分组默认折叠，点开才能看到里面的课程
            items: [
              { text: '数学分析 A I', link: '/academic/Math Analysis A I' },
              { text: '数学分析 A II', link: '/academic/Math Analysis A II' },
              { text: '线性代数 I', link: '/academic/Linear Algebra I' },
              { text: '线性代数 II', link: '/academic/Linear Algebra II' },
              { text: '管理学导论', link: '/academic/Management Intro' },
              { text: 'Python', link: '/academic/Python' },
              { text: '微观经济学', link: '/academic/Microeconomics' },
              { text: '会计学', link: '/academic/Accounting' },
              { text: '数据结构与算法导论', link: '/academic/dsa' },
              { text: '商业与技术伦理学', link: '/academic/ethics' }
            ]
          },
          {
            text: '其他课程',
            collapsed: true, // 👈 子分组默认折叠
            items: [
              { text: '军事理论', link: '/academic/military' },
              { text: '学术英语视听说', link: '/academic/Engsts' },
              { text: '文化阅读', link: '/academic/Cultural Reading' },
              { text: '中国民族器乐概览', link: '/academic/Chinese Instrument' },
            ]
          }
        ]
      },

// 第二章-------
      {
        text: '第二章：比赛',
        collapsed: false,
        items: [
          { text: '商赛', link: '/competition/business' },
          { text: '创赛', link: '/competition/start-up' },
          { text: '其他', link: '/competition/others' }
        ]
      },

// 第三章-------
      {
        text: '第三章：实习',
        collapsed: false,
        items: [
          { text: '或许你需要一些尝试', link: '/career/aim' },
          { text: '实践项目', link: '/career/program' },
          { text: '实习', link: '/career/internship' },
        ]
      },

// 尾章-------
      {
        text: '尾章：致谢',
        collapsed: false,
        items: [
          { text: '致谢', link: '/contribution/Acknowledgement' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ivanfourth-cpu/FDSM-Guide' }
    ]
  }
})
