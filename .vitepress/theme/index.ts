import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Giscus from '@giscus/vue'
import { useData, useRoute } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout() {
    const { isDark } = useData()
    const route = useRoute()

    return h(DefaultTheme.Layout, null, {
      'doc-after': () =>
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
    })
  }
}
