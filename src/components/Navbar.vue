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
          <router-link to="/#about_section1" class="nav-link" :class="{ 'nav-link-active': $route.hash === '#about_section1' }">About</router-link>
          <router-link to="/#tokenomics_section2" class="nav-link" :class="{ 'nav-link-active': $route.hash === '#tokenomics_section2' }">Tokenomics</router-link>
          <router-link to="/#whitepaper_section3" class="nav-link" :class="{ 'nav-link-active': $route.hash === '#whitepaper_section3' }">Whitepaper</router-link>

        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
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
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
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
  .nav-link-active {
  color: rgb(102, 59, 255);
}
    </style>