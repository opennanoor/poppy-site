<template>
  <div>
    <header class="fixed top-0 left-0 w-full bg-white shadow-md">
      <nav class="flex items-center justify-center h-16">
        <a href="#about" class="nav-link" @click.prevent="scrollToSection('#about')">About Poppy</a>
        <a href="#tokenomics" class="nav-link" @click.prevent="scrollToSection('#tokenomics')">Tokenomics</a>
        <a href="#whitepaper" class="nav-link" @click.prevent="scrollToSection('#whitepaper')">Whitepaper</a>
      </nav>
    </header>

    <main>
      <section id="about" class="section">
        <h2 class="text-4xl font-bold mb-8">About Poppy</h2>
        <!-- Content about Poppy -->
      </section>

      <section id="tokenomics" class="section">
        <h2 class="text-4xl font-bold mb-8">Tokenomics</h2>
        <!-- Content about Tokenomics -->
      </section>

      <section id="whitepaper" class="section">
        <h2 class="text-4xl font-bold mb-8">Whitepaper</h2>
        <!-- Content about Whitepaper -->
      </section>
    </main>

    <aside class="sticky top-0 w-full py-4 text-center text-lg font-bold text-gray-800 bg-white shadow-md">
      Follow Me!
    </aside>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToSection(sectionId) {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-link {
  margin: 0 2rem;
  text-decoration: none;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;
}

/* Section styles */
.section {
  padding: 8rem 0;
  scroll-margin-top: 4rem;
}

/* Sticky text styles */
aside {
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 0;
  font-size: 1.5rem;
  color: #333;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>