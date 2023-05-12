<template>
    <header class="fixed top-0 left-0 w-full bg-white">
      <nav class="flex items-center justify-between h-16 px-4 sm:px-0" role="navigation" aria-label="Main Navigation">
        <button class="hamburger" :class="{ 'is-active': isMenuOpen }" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="nav-items" :class="{ 'hidden': !isMenuOpen, 'block': isMenuOpen }">
          <a href="#about" class="nav-link" :class="{ active: activeSection === 'about' }" @click.prevent="scrollToSection('#about')">About Poppy</a>
          <a href="#tokenomics" class="nav-link" :class="{ active: activeSection === 'tokenomics' }" @click.prevent="scrollToSection('#tokenomics')">Tokenomics</a>
          <a href="#whitepaper" class="nav-link" :class="{ active: activeSection === 'whitepaper' }" @click.prevent="scrollToSection('#whitepaper')">Whitepaper</a>
        </div>
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
        isMenuOpen: false,
      };
    },
    methods: {
      debounce(func, wait) {
        let timeout;
        return function (...args) {
          const context = this;
          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(context, args), wait);
        };
      },
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
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
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 4rem;
    }
    
    .nav-link {
      margin: 0 1rem;
      text-decoration: none;
      font-size: 1rem;
      color: #333;
      cursor: pointer;
    }
    
    .hamburger {
      display: block;
      cursor: pointer;
      width: 30px;
      height: 22px;
      position: relative;
    }
    
    .hamburger span {
      display: block;
      position: absolute;
      height: 3px;
      width: 100%;
      background: #333;
      border-radius: 3px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: .25s ease-in-out;
    }
    
    .hamburger span:nth-child(1) {
      top: 0px;
      transform-origin: left center;
    }
    
    .hamburger span:nth-child(2) {
      top: 9px;
      transform-origin: left center;
    }
    
    .hamburger span:nth-child(3) {
      top: 18px;
      transform-origin: left center;
    }
    
    .hamburger.is-active span:nth-child(1) {
      transform: rotate(45deg);
      top: -3px;
      left: 8px;
    }
    
    .hamburger.is-active span:nth-child(2) {
      width: 0%;
      opacity: 0;
    }
    
    .hamburger.is-active span:nth-child(3) {
      transform: rotate(-45deg);
      top: 18px;
      left: 8px;
    }
    
    .nav-items {
      display: none;
      flex-direction: column;
      width: 100%;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #fff;
    }
    
    .nav-items.block {
      display: flex;
    }
    
    @media screen and (min-width: 640px) {
      .hamburger {
        display: none;
      }
    
      .nav-items {
        display: flex;
        position: static;
        flex-direction: row;
        background-color: transparent;
      }
    }
    </style>