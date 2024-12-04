import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/works',
      name: 'works',
      component: () => import('@/views/WorksView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
    },
    {
      path: '/page-speed',
      name: 'page-speed',
      component: () => import('@/views/PageSpeedView.vue'),
    },
    {
      path: '/flashquiz',
      name: 'flashquiz',
      component: () => import('@/views/FlashQuizView.vue'),
    },
    {
      path: '/sharedbites',
      name: 'sharedbites',
      component: () => import('@/views/SharedBitesView.vue'),
    },
    {
      path: '/gsap-animations',
      name: 'gsap-animations',
      component: () => import('@/views/GsapAnimationsView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
