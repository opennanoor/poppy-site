<script setup>
import Navbar from '../components/Navbar.vue'
import About from '../components/About.vue'
import BuyPoppy from '../components/BuyPoppy.vue'
import Tokenomics from '../components/Tokenomics.vue'
import Whitepaper from '../components/Whitepaper.vue'
</script>
<template>
    <body>
        <Navbar />
        <main>
            <section id="about" class="section">
                <div data-aos="fade-down-right">
                    <About />
                </div>
            </section>
            <section id="buy-poppy" class="section">
                <div>
                    <BuyPoppy />
                </div>
            </section>
            <section id="tokenomics" class="section">
                <div data-aos="fade-down-right">
                    <Tokenomics />
                </div>
            </section>
            <section id="whitepaper" class="section">
                <div data-aos="fade-down-left ">
                    <Whitepaper />
                </div>
            </section>
        </main>
    </body>
</template>
  
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
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.about-text {
    color: white;
    /* Adjust the text color as needed */
}

.about-image-container {
    flex-basis: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}

.about-image {
    width: auto;
    height: 400px;
    max-width: 100%;
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
    font-size: 1.3rem;
    font-family: 'Michroma';
    /* Specify the Michroma font and fallback to Sans-serif */

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
    background-image: url('/images/bg.webp');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    padding-top: 4rem;
    overflow-x: hidden;
    overflow-x: hidden;
}

/* Section styles */
.section {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: calc(100vh - 80px);
    /* Adjusted height calculation without bottom space */
    margin-bottom: 200px;
    /* Added margin-bottom for the space between sections */
}

.section>div {
    width: 100%;
    max-width: 1200px;
    /* Adjust the max-width as desired */
    padding: 0 1rem;
    /* Adjust the horizontal padding as desired */
}

.poppyText {
    font-size: 4rem;
    /* Increase the font size for the paragraphs */
    font-family: Playtime;
    /* Specify the Michroma font and fallback to Sans-serif */
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
    color: white;
    /* Set the text color */
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 2px 0 #000, 2px 2px 0 #000;
}
</style>