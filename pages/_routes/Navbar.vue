<template>
  <header :class="scrolled ? 'header-scrolled' : 'header-top'">
    <nav class="flex items-center justify-between h-16 px-4 sm:px-0 outlined-text" role="navigation"
      aria-label="Main Navigation">
      <div class="logo-container">
        <img :src="currentLogo" alt="Logo" :class="{ 'logo': true }">
      </div>
      <svg class="hamburger" :class="{ 'is-active': isMenuOpen }" @click="toggleMenu" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round">
        <image href="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" x="0" y="0" width="34"
          height="34"></image>
      </svg>
      <div data-aos="fade-down">
        <div :class="getNavItemsClass">
          <NuxtLink :to="{ path: '/', hash: '#' + link.name }" v-for="link in links" class="nav-link" @click="closeMenu">
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>


<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, computed } from 'vue'

const isMenuOpen = ref(false)
const scrolled = ref(false)
const logoImages = ref(["/images/logo.webp", "/images/logo1.webp"])
const currentLogo = ref("/img/logo.webp")
const intervalId = ref(null)

const links = reactive([
  { path: '/about', name: 'About' },
  { path: '/tokenomics', name: 'Tokenomics' },
  { path: '/whitepaper', name: 'Whitepaper' },
])

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleScroll = () => {
  requestAnimationFrame(() => {
    scrolled.value = window.scrollY > 0
  })
}

const handleClickOutside = (e) => {
  const menu = document.querySelector('.nav-items')
  const button = document.querySelector('.hamburger')
  if (!menu.contains(e.target) && !button.contains(e.target)) {
    closeMenu()
  }
}

const startLogoTransition = () => {
  intervalId.value = setInterval(changeLogoImage, 2000)
}

const changeLogoImage = () => {
  currentLogo.value = logoImages.value[(logoImages.value.indexOf(currentLogo.value) + 1) % logoImages.value.length]
}

const stopLogoTransition = () => {
  clearInterval(intervalId.value)
}

const getNavItemsClass = computed(() => {
  return [
    'nav-items',
    {
      'hidden': !isMenuOpen.value,
      'block': isMenuOpen.value,
      'animate__animated animate__fadeInRight': isMenuOpen.value
    }
  ]
})
watch(isMenuOpen, (newVal, oldVal) => {
  if (newVal !== oldVal && !newVal) {
    closeMenu();
  }
});

onMounted(() => {
  logoImages.value.forEach((logoImage) => {
    const img = new Image();
    img.src = logoImage;
  });

  changeLogoImage(); // Change the logo immediately on mount
  startLogoTransition()
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
  stopLogoTransition()
})
</script>


<style>
.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  transition: opacity 0.5s ease-in-out;
  width: 170px;
  /* Adjust the width as needed */
  height: auto;
  margin-right: 10px;
  /* Adjust the margin as needed */
  z-index: 10000;
}

.active {
  opacity: 1;
}

.inactive {
  opacity: 0;
}

.nav-link:hover {
  color: rgb(0, 98, 239);
}

nav {
  display: flex;
  justify-content: center;
  /* Center horizontally */
  align-items: center;
  height: 4rem;
  position: relative;
  /* Add this line */
  z-index: 999;
  /* Add this line */
}

.nav-link {
  margin: 0 1rem;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  font-family: 'Poppy Font Frompoppyplaytime';
  /* Use the 'Michroma' font, falling back to Sans-serif */
  z-index: 999;
  /* Add this line */

}

.hamburger {
  display: block;
  cursor: pointer;
  width: 30px;
  height: 22px;
  position: absolute;
  right: 1rem;
  /* Adjust the value as needed */
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
  width: 80%;
  /* Set the width to 80% */
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

@media screen and (min-width: 850px) {
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

@media screen and (max-width: 849px) {
  .hamburger {
    display: visible;
  }

  .nav-items {
    width: 80%;
    height: calc(100vh - 4rem);
    display: none;
    flex-direction: column;
    right: -75%;
    position: fixed;
    top: 5.5rem;
    left: 25%;
    padding-top: 2rem;
    background-color: #005bd1ea;
    overflow-y: auto;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    /* Add a box-shadow for the nav bar */
  }

  .nav-items .nav-link {
    position: relative;
    margin-bottom: 1rem;
    /* Adjust the value to increase or decrease the spacing between items */
  }

  .nav-items .nav-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
    /* Add a box-shadow for the underline */
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
  }

  .nav-items .nav-link:hover::after {
    transform: scaleX(1);
  }

  .nav-items.block {
    display: flex;
    right: 0;
  }
}

.nav-link-active {
  color: rgb(0, 98, 239);
}
</style>