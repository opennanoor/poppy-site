<template>
    <header class="fixed top-0 left-0 w-full bg-white">
      <nav class="flex items-center justify-center h-16">
        <a
          href="#about"
          class="nav-link"
          :class="{ active: activeSection === 'about' }"
          @click.prevent="scrollToSection('#about')"
        >About Poppy</a>
        <a
          href="#tokenomics"
          class="nav-link"
          :class="{ active: activeSection === 'tokenomics' }"
          @click.prevent="scrollToSection('#tokenomics')"
        >Tokenomics</a>
        <a
          href="#whitepaper"
          class="nav-link"
          :class="{ active: activeSection === 'whitepaper' }"
          @click.prevent="scrollToSection('#whitepaper')"
        >Whitepaper</a>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeSection: "about",
        observer: null,
      };
    },
    methods: {
      scrollToSection(sectionId) {
        const section = document.querySelector(sectionId);
        if (section) {
          this.activeSection = sectionId.substring(1);
          this.scrollSmoothTo(section);
        }
      },
      scrollSmoothTo(element) {
        const targetPosition = element.offsetTop;
        const startPosition = window.pageYOffset || document.documentElement.scrollTop;
        const distance = targetPosition - startPosition;
        const duration = 500; // Adjust the scroll duration as desired
        let start = null;
  
        const animateScroll = (timestamp) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const percentage = Math.min(progress / duration, 1);
          const easing = this.easeInOutQuad(percentage);
          window.scrollTo(0, startPosition + distance * easing);
  
          if (progress < duration) {
            requestAnimationFrame(animateScroll);
          }
        };
  
        requestAnimationFrame(animateScroll);
      },
      easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      },
      observeSections() {
        const options = {
          root: null,
          rootMargin: "-50% 0% -50% 0%", // Adjust the rootMargin as needed
          threshold: 0.5,
        };
  
        const callback = (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.activeSection = entry.target.getAttribute("id");
            }
          });
        };
  
        this.observer = new IntersectionObserver(callback, options);
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
          this.observer.observe(section);
        });
      },
    },
    mounted() {
      this.observeSections();
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
      this.observer.disconnect();
    },
  };
  </script>