import { createRouter, createWebHashHistory } from 'vue-router';
import Landing from '@/views/Landing.vue';
// import ClientsView from '@/views/ClientsView.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Landing,
      // component: ClientsView,
      // children: [
      //   {
      //     path: '/',
      //     // component: () => import('@/views/HomeView.vue')
      //     component: () => import('@/views/Landing.vue')
      //   },
      //   {
      //     path: '/about',
      //     name: 'about',
      //     // route level code-splitting
      //     // this generates a separate chunk (About.[hash].js) for this route
      //     // which is lazy-loaded when the route is visited.
      //     component: () => import('@/views/AboutView.vue')
      //   },
      //   {
      //     path: '/landing',
      //     name: 'landing',
      //     // route level code-splitting
      //     // this generates a separate chunk (About.[hash].js) for this route
      //     // which is lazy-loaded when the route is visited.
      //     component: () => import('@/views/Landing.vue')
      //   }
      // ]
    }]
    
  });

export default router;
