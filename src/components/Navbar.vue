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
            activeSection: "",
        };
    },
    methods: {
        scrollToSection(sectionId) {
            const section = document.querySelector(sectionId);
            if (section) {
                this.activeSection = sectionId.substring(1);
                section.scrollIntoView({ behavior: "smooth" });
            }
        },
        handleScroll() {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            const sections = document.querySelectorAll("section");
            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                const sectionOffsetTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute("id");
                if (scrollPosition >= sectionOffsetTop && scrollPosition < sectionOffsetTop + sectionHeight) {
                    this.activeSection = sectionId;
                    break;
                }
            }
        },
    },
    mounted() {
        this.handleScroll();
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
};
  </script>
  