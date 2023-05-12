<template>
   <body>
    <Navbar />

    <main>
      <About />
      <Tokenomics />
      <Whitepaper />
    </main>
  </body>
</template>

<script>
import Navbar from './components/Navbar.vue';
import About from './components/About.vue';
import Tokenomics from './components/Tokenomics.vue';
import Whitepaper from './components/Whitepaper.vue';
export default {
  components: {
    Navbar,
    About,
    Tokenomics,
    Whitepaper,
  }
}
</script>
<style>
html, body {
  width: 100%;
  height:100%;
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
