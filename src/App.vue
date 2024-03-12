<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'
import TopNavigationBar from '@/components/TopNavigationBar.vue'

</script>

<template>
  <v-layout>
  <TopNavigationBar />
  <v-main>
    <RouterView />
  </v-main>
  </v-layout>
</template>
