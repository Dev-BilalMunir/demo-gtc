import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import Landing from '@/views/Landing.vue';

const isGitHubPages = process.env.NODE_ENV === 'production';

const router = createRouter({
  history: isGitHubPages ? createWebHistory() : createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Landing,
    },
  ],
});

export default router;
