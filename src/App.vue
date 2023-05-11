<template>
  <div>
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

    <main>
      <section id="about" class="section">
        <div class="shadow-box">
          <h2>About Poppy</h2>
          <p class="typed-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </section>

      <section id="tokenomics" class="section">
        <div class="shadow-box">
          <h2>Tokenomics</h2>
          <p class="typed-text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </section>

      <section id="whitepaper" class="section">
        <div class="shadow-box">
          <h2>Whitepaper</h2>
          <p class="typed-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </section>
    </main>

    <aside class="sticky top-0 w-full py-4 text-center text-lg font-bold text-gray-800 bg-white shadow-md">
      Follow Me!
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSection: '',
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.querySelector(sectionId);
      if (section) {
        this.activeSection = sectionId.substring(1);
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
    handleScroll() {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      const sections = document.querySelectorAll('section');
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionOffsetTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionOffsetTop && scrollPosition < sectionOffsetTop + sectionHeight) {
          this.activeSection = sectionId;
          break;
        }
      }
    },
  },
  mounted() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
<style>
/* Navbar styles */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
}

.nav-link {
  margin: 0 2rem;
  text-decoration: none;
  font-size: 2rem;
  color: #333;
  cursor: pointer;
  position: relative; /* Add relative positioning */
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -0.25rem; /* Adjust the value to position the underline */
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #333; /* Change the color of the underline */
  opacity: 0; /* Initially hide the underline */
  transition: opacity 0.2s ease-in-out; /* Add transition for smooth animation */
}

.nav-link.active::after {
  opacity: 1; /* Show the underline for the active nav link */
}

/* Section styles */
.section {
  height: 100vh; /* Set each section to occupy full page height */
  scroll-snap-align: start; /* Snap each section to the top of the viewport */
  display: flex;
  justify-content: center;
  align-items: center;
}

.shadow-box {
  margin: 0 auto;
  max-width: 800px;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.typed-text span {
  opacity: 0;
  transform: translateX(-20%);
  transition: opacity 0.5s, transform 0.5s;
  display: inline-block;
}

.section.in-view .typed-text span {
  opacity: 1;
  transform: translateX(0%);
}
</style>
