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
      component: () => import('@/views/works/PageSpeedView.vue'),
    },
    {
      path: '/flashquiz',
      name: 'flashquiz',
      component: () => import('@/views/works/FlashQuizView.vue'),
    },
    {
      path: '/sharedbites',
      name: 'sharedbites',
      component: () => import('@/views/works/SharedBitesView.vue'),
    },
    {
      path: '/gsap-animations',
      name: 'gsap-animations',
      component: () => import('@/views/works/GsapAnimationsView.vue'),
    },
    {
      path: '/skullfest',
      name: 'skullfest',
      component: () => import('@/views/works/SkullfestView.vue'),
    },
    {
      path: '/programming-animation',
      name: 'programming-animation',
      component: () => import('@/views/works/ProgrammingAnimationView.vue'),
    },
  ],
});

router.afterEach((to, from) => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 500);
});

export default router;
