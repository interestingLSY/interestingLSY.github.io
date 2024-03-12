import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    // {
    //   path: '/problemlist',
    //   component: () => import('../views/ProblemListView.vue')
    // },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { 
        el: to.hash,
        top: 100  // Apply an offset here since we have a fixed TopBar
      };
    }
    return { x: 0, y: 0 };
  }
})

export default router
