<template>
  <body>
    <Navbar />

    <main>
      <section id="about" class="section">
        <div class="about-container">
          <h1 class="about-text animate__animated animate__backInDown poppyText" style="animation-duration: 1s;">About Poppy</h1>
        </div>
        <div data-aos="fade-down-right"><About /></div>
      </section>
      <section id="tokenomics" class="section">
        <div data-aos="fade-down-right"><Tokenomics /></div>
      </section>
      <section id="whitepaper" class="section">
        <div data-aos="fade-down-left"><Whitepaper /></div>
      </section>
    </main>
  </body>
</template>

<script>
import Navbar from './components/Navbar.vue';
import About from './components/About.vue';
import Tokenomics from './components/Tokenomics.vue';
import Whitepaper from './components/Whitepaper.vue';
import Typed from 'typed.js';

export default {
  components: {
    Navbar,
    About,
    Tokenomics,
    Whitepaper,
  },
  mounted() {
    // Remove horizontal scrollbar on mount
    document.body.style.overflowX = 'hidden';
    this.initializeTyped();
  },
  methods: {
    initializeTyped() {
      const options = {
        strings: ['Poppy is a revolutionary meme token that brings joy and laughter to the crypto world.'],
        typeSpeed: 10, // Adjust the typing speed as desired
        showCursor: false, // Set to false if you don't want a cursor
      };

      const typed = new Typed('.typed-text', options);
    },
  },
}
</script>

<style>
.about-container {
  position: absolute;
  top: calc(50% - 120px);
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1; /* Ensure the About text is positioned above the shadow-box */
  text-align: center;
}

.about-text {
  font-size: 3rem; /* Adjust the font size as needed */
  color: white; /* Adjust the text color as needed */
}
.typed-text {
  color: rgb(247, 247, 247);
  font-size: 1.5rem;
  font-family: Playtime; /* Specify the Michroma font and fallback to Sans-serif */

  /* Add any additional styles as desired */
}

@font-face {
  font-family: 'Michroma';
  src: url('/fonts/Michroma-Regular.ttf') format('truetype');
  /* Add additional font formats if available */
  /* Adjust the file paths as per your project structure */
  /* Make sure to update the font file names and formats accordingly */
}
@font-face {
  font-family: 'Poppy Font Frompoppyplaytime';
  src: url('/fonts/PoppyFontFrompoppyplaytime-Regular.ttf') format('truetype');
  /* Add additional font formats if available */
  /* Adjust the file path as per your project structure */
  /* Make sure to update the font file name and format accordingly */
}
@font-face {
  font-family: 'Playtime';
  src: url('/fonts/Playtime.ttf') format('truetype');
  /* Add additional font formats if available */
  /* Adjust the file path as per your project structure */
  /* Make sure to update the font file name and format accordingly */
}

html, body {
  width: 100%;
  height: 100%;
}

body {
  background: linear-gradient(-45deg, #8b8b8b, #490149, #033d6d, #131ec5);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  scroll-behavior: smooth;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Navbar styles */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #001659;
}

/* Section styles */
.section {
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: visible; /* explicitly set the visibility */
}

.section > div {
  width: 100%;
}
.shadow-box {
  color: white;
  margin: 0 auto;
  max-width: 800px;
  padding: 2rem;
  background: rgba(134, 134, 134, 0.404); /* Adjust the opacity as needed */
  border-radius: 20px; /* Increase the border radius for a more round shape */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.3); /* Adjust the box shadow properties as desired */
  border: none; /* Remove the border property */
}

/* Apply the border colors to the pseudo-elements */
.shadow-box:before {
  border: 5px solid rgba(0, 0, 0, 0.15); /* Adjust the border color and opacity as desired */
}

.shadow-box:after {
  border: 5px solid rgba(255, 255, 255, 0.1); /* Adjust the border color and opacity as desired */
}

.shadow-box h2 {
  font-size: 2.2rem; /* Increase the font size for the heading */
  font-family: Poppy Font Frompoppyplaytime, sans-serif; /* Specify the Michroma font and fallback to Sans-serif */
}

.shadow-box p {
  font-size: 1.4rem; /* Increase the font size for the paragraphs */
  font-family: Poppy Font Frompoppyplaytime, sans-serif; /* Specify the Michroma font and fallback to Sans-serif */
}

.poppyText {
  font-size: 4rem; /* Increase the font size for the paragraphs */
  font-family: Poppy Font Frompoppyplaytime, sans-serif; /* Specify the Michroma font and fallback to Sans-serif */
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