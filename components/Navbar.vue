
<template>
  <header :class="scrolled ? 'header-scrolled' : 'header-top'">
    <nav class="flex items-center justify-between h-16 px-4 sm:px-0 outlined-text" role="navigation"
      aria-label="Main Navigation">
      <div class="logo-container">
        <nuxt-img :src="currentLogo" format="webp" sizes="sm:100px md:50vw lg:164px" alt="PoppyToken logo"
          :class="{ 'logo': true }" />
      </div>
      <svg class="hamburger" :class="{ 'is-active': isMenuOpen }" @click="toggleMenu">
        <Icon name="ion:navicon-round" size=48 color="white" />
      </svg>
      <div data-aos="fade-down">
        <div :class="getNavItemsClass">
          <NuxtLink v-for="link in links" class="nav-link" :class="{ 'nav-link-active': activeLink === link.sectionId }"
            @click.prevent="navigateToSection(link)">
            {{ link.name }}
          </NuxtLink>

          <div class="social-icons-mobile">
            <a href="#">
              <Icon name="line-md:discord" size=48 color="white" />
            </a>
            <a href="#">
              <Icon name="line-md:twitter" size=48 color="white" />
            </a>
            <a href="#">
              <Icon name="line-md:telegram" size=48 color="white" />
            </a>
          </div>
          <div class="svg-section" style="justify-content: flex-end;">
            <Icon name="line-md:discord" size=48 color="#00b5cc" />
            <span class="svg-text typed-text outlined-text">Discord</span>
            <Icon name="line-md:twitter" size=48 color="#00b5cc" />
            <span class="svg-text typed-text outlined-text">Telegram</span>
            <Icon name="line-md:telegram" size=48 color="#00b5cc" />
            <span class="svg-text typed-text outlined-text">Uniswap</span>

          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, computed, watch, nextTick, watchEffect } from 'vue'

const router = useRouter()

const debounce = (func, delay) => {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  }
}

const titlePrefix = ref("Poppy - ")
const isMenuOpen = ref(false)
const scrolled = ref(false)
const currentLogo = ref("/images/logo.png");
const logoImages = ref(["/images/logo.png", "/images/logo.png"]);
const intervalId = ref(null)
const activeLink = ref(null)

const navigateToSection = (link) => {
  router.push('/', () => { }).then(() => {
    nextTick().then(() => {
      const el = document.getElementById(link.sectionId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })
}

const links = reactive([
  { sectionId: 'about', name: 'About' },
  { sectionId: 'buy-poppy', name: 'How to buy' },
  { sectionId: 'tokenomics', name: 'Tokenomics' },
  { sectionId: 'roadmap', name: 'Roadmap' }])

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleScroll = debounce(() => {
  requestAnimationFrame(() => {
    scrolled.value = window.scrollY > 0
  })
})

const handleClickOutside = (e) => {
  nextTick(() => {
    const menu = document.querySelector('.nav-items')
    const button = document.querySelector('.hamburger')
    if (!menu.contains(e.target) && !button.contains(e.target)) {
      closeMenu()
    }
  })
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

let stopWatchIsMenuOpen;
let observer;

onMounted(() => {
  stopWatchIsMenuOpen = watch(isMenuOpen, (newVal, oldVal) => {
    if (newVal !== oldVal && !newVal) {
      closeMenu();
    }
  });

  watchEffect(() => {
    if (activeLink.value) {
      document.title = titlePrefix.value + activeLink.value;
    }
  });

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeLink.value = entry.target.id
      }
    })
  }, {
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
  })

  links.forEach(link => {
    const element = document.getElementById(link.sectionId)
    if (element) {
      observer.observe(element)
    }
  })

  logoImages.value.forEach((logoImage) => {
    const img = new Image();
    img.src = logoImage;
  });

  startLogoTransition()
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  stopWatchIsMenuOpen();
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
  stopLogoTransition()
  if (observer) {
    observer.disconnect()
  }
})

</script>


<style>
.header-top:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 91, 209, 0);
  /* Adjust the color and opacity as needed */
  pointer-events: none;
  /* So it doesn't interfere with interactions */
}

@media screen and (min-width: 849px) {
  .header-scrolled::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #353535ab;
    ;
    pointer-events: none;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(15px);
  }

  header:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 91, 209, 0.219);
    /* Adjust the color and opacity as needed */
    pointer-events: none;
    /* So it doesn't interfere with interactions */
  }
}

@media screen and (max-width: 849px) and (orientation: landscape) {
  .header-scrolled::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #ffffff00;
  }
}

/* Navbar styles */
header {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 25px;
}

.social-icon:hover svg {
  fill: red;
  /* Replace "red" with the desired color */
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  transition: opacity 0.5s ease-in-out;
  width: 150px;
  /* Adjust the width as needed */
  height: auto;
  margin-right: 10px;
  margin-top: 45px;
  /* Adjust the margin as needed */
  z-index: 1000;
}

.active {
  opacity: 1;
}

.inactive {
  opacity: 0;
}

.nav-link:hover {
  color: #afdc27;
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
  cursor: url('/images/cursor.png'), auto;
  white-space: nowrap;
  /* Add this line */
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
  pointer-events: none;
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

.social-icons-mobile {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

@media screen and (min-width: 970px) {
  .social-icons-mobile {
    display: none;
  }

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

@media screen and (max-width: 970px) {
  .logo {
    display: none;
  }

  .social-icons-mobile a {
    margin: 0 10px;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    padding-top: 2rem;
  }

  .social-icons a {
    display: inline-block;
    margin-right: 0.5rem;
  }

  .social-icon {
    width: 24px;
    height: 24px;
    fill: #b1de28;
  }

  .hamburger {
    z-index: 9999;
    display: visible;
    cursor: pointer;
    width: 48px;
    height: 48px;
    position: absolute;
    right: 1rem;
    /* Adjust the value as needed */
    top: 50%;
    transform: translateY(-50%);
    user-select: none;
    /* Add this line */
  }

  .nav-link {
    font-size: 4rem;
  }

  .nav-items {
    width: 100%;
    height: 100vh;
    display: none;
    flex-direction: column;
    justify-content: center;
    /* Adjust this from flex-start to center */
    align-items: center;
    position: fixed;
    top: 0;
    /* Let's keep this as 0 */
    padding-top: 0;
    /* Adjust the padding as necessary, but initially setting it to 0 */
    background-color: #b1de28;
    overflow-y: auto;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    z-index: 999;
    left: 0;
  }

  .nav-items .nav-link:hover::after {
    transform: scaleX(1);
    transition: transform 0.2s ease-in-out;
    /* Add back the transition only for hover state */
  }

  .nav-items.block {
    display: flex;
  }
}


.nav-link-active {
  color: #b1de28;
}
</style>