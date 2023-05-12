<template>
    <header class="fixed top-0 left-0 w-full bg-white">
      <nav class="flex items-center justify-center h-16" role="navigation" aria-label="Main Navigation">
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
        isScrolling: false,
      };
    },
  
    methods: {
      debounce(func, wait) {
        let timeout;
        return function(...args) {
          const context = this;
          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(context, args), wait);
        };
      },
  
      handleScroll() {
        if (this.isScrolling) return;
        this.isScrolling = true;
  
        const scrollPosition = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;
        const sections = document.querySelectorAll("section");
  
        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          const sectionId = section.getAttribute("id");
          const sectionOffset = section.offsetTop;
  
          if (
            scrollPosition >= sectionOffset - windowHeight / 2 &&
            scrollPosition < sectionOffset + section.offsetHeight
          ) {
            this.activeSection = sectionId;
            break;
          }
        }
  
        setTimeout(() => {
          this.isScrolling = false;
        }, 100);
      },
  
      scrollToSection(sectionId) {
        const section = document.querySelector(sectionId);
        if (section) {
          this.activeSection = sectionId.substring(1);
          section.scrollIntoView({ behavior: "smooth" });
        }
      },
  
      observeSections() {
        // ...
      },
    },
  
    mounted() {
      this.observeSections();
      this.debouncedHandleScroll = this.debounce(this.handleScroll, 100);
      window.addEventListener("scroll", this.debouncedHandleScroll);
    },
  
    beforeDestroy() {
      window.removeEventListener("scroll", this.debouncedHandleScroll);
      this.observer.disconnect();
    },
  };
  </script>
  
  <style>
  body {
    scroll-behavior: smooth;
  }
  
  /* Other CSS styles here */
  </style>
  