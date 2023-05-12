<template>
   <div class="gradient-bg">
    <Navbar />

    <main>
      <About />
      <Tokenomics />
      <Whitepaper />
    </main>

    <aside class="sticky top-0 w-full py-4 text-center text-lg font-bold text-gray-800 bg-white shadow-md">
      Follow Me!
    </aside>
  </div>
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
.gradient-bg {
  min-height: 100vh;
  transition: background-color 0.3s ease-in-out;
}
/* Navbar styles */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
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
