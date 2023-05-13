import { createRouter, createWebHistory } from 'vue-router';
import About from './components/About.vue';
import Tokenomics from './components/Tokenomics.vue';
import Whitepaper from './components/Whitepaper.vue';

const routes = [
    {
      path: '/',
      component: About,
      alias: '/#about_section1'
    },
    {
      path: '/',
      component: Tokenomics,
      alias: '/#tokenomics_section2'
    },
    {
      path: '/',
      component: Whitepaper,
      alias: '/#whitepaper_section3'
    }
  ];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;