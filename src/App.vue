<template>
  <body>
    <Navbar />

    <main>
      <section id="about" class="section">
        <div class="about-container">
          <div class="about-content">
            <div class="about-text-container">
              <h1 class="about-text animate__animated animate__fadeIn poppyText outlined-text" style="animation-duration: 3s;">About $Poppy</h1>
              <div data-aos="fade-down-right"><About /></div>
            </div>
            <img style="width: auto; height: 400px; max-width: 100%;" src="https://cdn.discordapp.com/attachments/1106185526584823918/1106700296119398520/Low-Res-Huggy-Wuggy.webp" alt="About Poppy Image" class="about-image animate__animated animate__rotateInUpRight">
          </div>
        </div>
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
        typeSpeed: 15, // Adjust the typing speed as desired
        showCursor: false, // Set to false if you don't want a cursor
      };

      const typed = new Typed('.typed-text', options);
    },
  },
}
</script>

<style>
.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
}
.about-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}

.about-text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  text-align: center;
}
.about-text {
  font-size: 3rem; /* Adjust the font size as needed */
  color: white; /* Adjust the text color as needed */
}

.about-image {
  display: block;
  width: auto;
  height: 400px;
  max-width: 100%;
  margin-top: 2rem;
}
@media screen and (max-width: 640px) {
  .about-container {
    justify-content: flex-start;
    padding-left: 1rem;
  }
  
  .about-text-container {
    margin-left: 0;
  }
}

.typed-text {
  color: rgb(247, 247, 247);
  font-size: 1.5rem;
  font-family: Playtime; /* Specify the Michroma font and fallback to Sans-serif */

  /* Add any additional styles as desired */
}

@media (max-width: 768px) {
  .about-container {
    padding: 2rem;
  }
  
  .about-text-container {
    margin-bottom: 1rem;
  }
  
  .about-image {
    display: none;
  }
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


body {
  background: linear-gradient(-45deg, #8b8b8b, #490149, #033d6d, #131ec5);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  scroll-behavior: smooth;
  padding-top: 4rem
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
.header-top:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 91, 209, 0.219); /* Adjust the color and opacity as needed */
  pointer-events: none; /* So it doesn't interfere with interactions */
}

.header-scrolled:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #005bd1; /* Adjust the color as needed */
  pointer-events: none; /* So it doesn't interfere with interactions */
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

header:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 91, 209, 0.219); /* Adjust the color and opacity as needed */
    pointer-events: none; /* So it doesn't interfere with interactions */
}

/* Section styles */
.section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.section > div {
  width: 100%;
  max-width: 1200px; /* Adjust the max-width as desired */
  padding: 0 1rem; /* Adjust the horizontal padding as desired */
}
.shadow-box {
  width: 100%;
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
  font-family: Playtime; /* Specify the Michroma font and fallback to Sans-serif */
}

.shadow-box p {
  font-size: 1.4rem; /* Increase the font size for the paragraphs */
  font-family: Playtime; /* Specify the Michroma font and fallback to Sans-serif */
}

.poppyText {
  font-size: 4rem; /* Increase the font size for the paragraphs */
  font-family: Playtime; /* Specify the Michroma font and fallback to Sans-serif */
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
.outlined-text {
  color: white; /* Set the text color */
  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
}
</style>