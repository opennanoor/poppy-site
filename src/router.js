import { createRouter, createWebHistory } from 'vue-router';
import About from './components/About.vue';
import Tokenomics from './components/Tokenomics.vue';
import Whitepaper from './components/Whitepaper.vue';

const routes = [
  {
    path: '/about',
    component: About,
    meta: {
      scrollTo: '#about_section1' // Specify the ID of the section to scroll to
    }
  },
  {
    path: '/tokenomics',
    component: Tokenomics,
    meta: {
      scrollTo: '#tokenomics_section2' // Specify the ID of the section to scroll to
    }
  },
  {
    path: '/whitepaper',
    component: Whitepaper,
    meta: {
      scrollTo: '#whitepaper_section3' // Specify the ID of the section to scroll to
    }
  },
  // Add a catch-all route to redirect to the home page if the path is not found
  {
    path: '/:pathMatch(.*)*',
    redirect: '/about'
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/about',
      component: About,
      meta: { scrollTo: '#about_section1' } // Add meta field with scrollTo value
    },
    {
      path: '/tokenomics',
      component: Tokenomics,
      meta: { scrollTo: '#tokenomics_section2' } // Add meta field with scrollTo value
    },
    {
      path: '/whitepaper',
      component: Whitepaper,
      meta: { scrollTo: '#whitepaper_section3' } // Add meta field with scrollTo value
    },
    // Other route definitions...
  ],
  scrollBehavior(to, savedPosition) {
    if (to.meta.scrollTo) {
      const sectionElement = document.querySelector(to.meta.scrollTo);
      const offset = 10; // Adjust the offset value as needed
      return {
        top: sectionElement.offsetTop - offset,
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