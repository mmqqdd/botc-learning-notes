<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'
import { useData, useRoute } from 'vitepress'

const { isDark } = useData()
const route = useRoute()
const container = ref<HTMLDivElement | null>(null)

const GISCUS_CONFIG = {
  repo: 'mmqqdd/botc-learning-notes',
  repoId: 'R_kgDOSz1mxA',
  category: 'Announcements',
  categoryId: 'DIC_kwDOSz1mxM4C-vBB',
  mapping: 'pathname',
  strict: '0',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top',
  lang: 'zh-CN',
  loading: 'lazy',
} as const

function renderGiscus() {
  if (!container.value) return
  container.value.innerHTML = ''

  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.crossOrigin = 'anonymous'
  script.async = true

  const attrs: Record<string, string> = {
    'data-repo': GISCUS_CONFIG.repo,
    'data-repo-id': GISCUS_CONFIG.repoId,
    'data-category': GISCUS_CONFIG.category,
    'data-category-id': GISCUS_CONFIG.categoryId,
    'data-mapping': GISCUS_CONFIG.mapping,
    'data-strict': GISCUS_CONFIG.strict,
    'data-reactions-enabled': GISCUS_CONFIG.reactionsEnabled,
    'data-emit-metadata': GISCUS_CONFIG.emitMetadata,
    'data-input-position': GISCUS_CONFIG.inputPosition,
    'data-theme': isDark.value ? 'dark' : 'light',
    'data-lang': GISCUS_CONFIG.lang,
    'data-loading': GISCUS_CONFIG.loading,
  }

  for (const [key, value] of Object.entries(attrs)) {
    script.setAttribute(key, value)
  }

  container.value.appendChild(script)
}

watch(isDark, (dark) => {
  const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame')
  iframe?.contentWindow?.postMessage(
    { giscus: { setConfig: { theme: dark ? 'dark' : 'light' } } },
    'https://giscus.app',
  )
})

watch(
  () => route.path,
  () => {
    nextTick(() => renderGiscus())
  },
)

onMounted(() => {
  renderGiscus()
})
</script>

<template>
  <div class="giscus-wrapper">
    <h3 class="giscus-title">💬 评论与建议</h3>
    <p class="giscus-hint">
      读完有想法？欢迎在下面留言。评论使用 GitHub 账号登录，会同步到本仓库的 Discussions。
    </p>
    <div ref="container" class="giscus" />
  </div>
</template>

<style scoped>
.giscus-wrapper {
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
}

.giscus-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px;
}

.giscus-hint {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin: 0 0 20px;
}
</style>
