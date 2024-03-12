import { createApp }
 from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'

import { useDark } from '@vueuse/core'

const isDark = useDark()

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    // defaultTheme: isDark.value ? 'dark' : 'light'
    defaultTheme: 'light'
  }
})

const app = createApp(App);

app.use(vuetify);

app.use(router);

app.mount('#app');
