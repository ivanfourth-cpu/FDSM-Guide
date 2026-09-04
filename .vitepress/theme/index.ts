import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Giscus from '@giscus/vue'
import FeedbackForm from './components/FeedbackForm.vue'
import { useData, useRoute } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout() {
    const { isDark } = useData()
    const route = useRoute()

    return h(DefaultTheme.Layout, null, {
      'doc-after': () => [
        // 1. 先展示私聊反馈/提问表单
        h(FeedbackForm),
        // 2. 紧接着展示公开的 Giscus 讨论区
        h(Giscus, {
          id: 'comments',
          repo: 'ivanfourth-cpu/FDSM-Guide',
          repoId: 'R_kgDOTUuUgQ',
          category: 'General',
          categoryId: 'DIC_kwDOTUuUgc4DE1vV',
          mapping: 'pathname',
          strict: '0',
          reactionsEnabled: '1',
          emitMetadata: '0',
          inputPosition: 'top',
          theme: isDark.value ? 'dark' : 'light',
          lang: 'zh-CN',
          key: route.path
        })
      ]
    })
  }
}
