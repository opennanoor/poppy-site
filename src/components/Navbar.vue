<template>
    <header :class="scrolled ? 'header-scrolled' : 'header-top'">
      <nav class="flex items-center justify-between h-16 px-4 sm:px-0 outlined-text" role="navigation" aria-label="Main Navigation">
        <div class="logo-container">
          <img src="https://cdn.discordapp.com/attachments/1106185526584823918/1106714435751514182/Low-Res-Huggy-Wuggy-Head.png" alt="Logo" class="logo" @mouseover="activateBounce" @mouseout="deactivateBounce">
        </div>
        <svg class="hamburger" :class="{ 'is-active': isMenuOpen }" @click="toggleMenu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <image href="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" x="0" y="0" width="34" height="34"></image>
        </svg>
        <div data-aos="fade-down">
          <div :class="['nav-items', { 'hidden': !isMenuOpen, 'block': isMenuOpen, 'animate__animated animate__fadeInRight': isMenuOpen } ]">
            <a href="#about" @mouseover="activateBounce" @mouseout="deactivateBounce"  class="nav-link" :class="{ active: activeSection === 'about' }" @click.prevent="scrollToSection('#about')">About</a>
            <a href="#tokenomics" @mouseover="activateBounce" @mouseout="deactivateBounce"  class="nav-link" :class="{ active: activeSection === 'tokenomics' }" @click.prevent="scrollToSection('#tokenomics')">Tokenomics</a>
            <a href="#whitepaper" @mouseover="activateBounce" @mouseout="deactivateBounce" class="nav-link" :class="{ active: activeSection === 'whitepaper' }" @click.prevent="scrollToSection('#whitepaper')">Whitepaper</a>
          </div>
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
        scrolled: false // new data property for header transparency
      };
    },
    methods: {
      activateBounce(event) {
      event.target.classList.add('animate__animated', 'animate__pulse');
    },
    deactivateBounce(event) {
      event.target.classList.remove('animate__animated', 'animate__pulse');
    },
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

        // new code for header transparency
        this.scrolled = window.scrollY > 0;
      },
      scrollToSection(sectionId) {
        const section = document.querySelector(sectionId);
        if (section) {
            this.activeSection = sectionId.substring(1);
            section.scrollIntoView({ behavior: "smooth" });
            this.isMenuOpen = false; // Close the hamburger menu
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
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.debouncedHandleScroll);
      window.removeEventListener('scroll', this.handleScroll);
      this.observer.disconnect();
    },
};
</script>
    
<style>
.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 170px; /* Adjust the width as needed */
  height: auto;
  margin-right: 10px; /* Adjust the margin as needed */
  z-index: 10000;
}
  .nav-link:hover {
    color: rgb(102, 59, 255);
  }
    nav {
        display: flex;
        justify-content: center; /* Center horizontally */
        align-items: center;
        height: 4rem;
        position: relative; /* Add this line */
          z-index: 999; /* Add this line */
    }

    .nav-link {
  margin: 0 1rem;
  text-decoration: none;
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  font-family: 'Poppy Font Frompoppyplaytime'; /* Use the 'Michroma' font, falling back to Sans-serif */
  z-index: 999; /* Add this line */

}
        
    .hamburger {
    display: block;
    cursor: pointer;
    width: 30px;
    height: 22px;
    position: absolute;
    right: 1rem; /* Adjust the value as needed */
    top: 50%;
    transform: translateY(-50%);
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
      width: 80%; /* Set the width to 80% */
      display: none;
      flex-direction: column;
      right: -80%;
      position: absolute;
      top: 100%;
      background-color: #ffffff71;
    }
    
    .nav-items.block {
      display: flex;
      right: 0;
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