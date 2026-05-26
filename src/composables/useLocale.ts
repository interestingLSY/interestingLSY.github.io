import { useI18n } from 'vue-i18n'
import { watch } from 'vue'

const STORAGE_KEY = 'locale'

function detectLocale(): string {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'zh' || saved === 'en') return saved

  const browserLang = navigator.language || ''
  if (browserLang.startsWith('zh')) return 'zh'
  return 'en'
}

export function useLocale() {
  const { locale } = useI18n()

  function setLocale(newLocale: string) {
    locale.value = newLocale
    localStorage.setItem(STORAGE_KEY, newLocale)
    document.documentElement.lang = newLocale === 'zh' ? 'zh-CN' : 'en'
  }

  function toggleLocale() {
    setLocale(locale.value === 'zh' ? 'en' : 'zh')
  }

  return { locale, setLocale, toggleLocale, detectLocale }
}

export { detectLocale }
