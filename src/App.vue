<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TopNavigationBar from '@/components/TopNavigationBar.vue'
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'

const { locale } = useI18n()

document.documentElement.lang = locale.value === 'zh' ? 'zh-CN' : 'en'

watch(locale, () => {
  document.documentElement.lang = locale.value === 'zh' ? 'zh-CN' : 'en'
})
</script>

<template>
  <v-layout>
  <TopNavigationBar />
  <v-main>
    <RouterView />
  </v-main>
  </v-layout>
</template>
