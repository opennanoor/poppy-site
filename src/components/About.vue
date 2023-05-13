<template>
  <div class="about-content">
    <h2 class="about-text animate__animated animate__fadeIn " style="animation-duration: 3s;">
      <span class="typed-text poppyText outlined-text" :style="{ fontSize: fontSize + 'rem' }">Coming soon...</span></h2>
    <div class="shadow-box">
      <div class="typed-text outlined-text">Poppy is a revolutionary meme token that brings joy and laughter to the crypto world.</div>
    </div>
    <div class="svg-section">
        <div class="svg-wrapper">
          <div class="circle">
            <img src="/img/discord.svg" alt="Image 1" class="svg-image animate__animated animate__bounce">
          </div>
          <span class="svg-text typed-text outlined-text">Discord</span>
        </div>
        <div class="svg-wrapper">
          <div class="circle">
            <img src="/img/telegram.svg" alt="Image 2" class="svg-image animate__animated animate__bounce">
          </div>
          <span class="svg-text typed-text outlined-text">Telegram</span>
        </div>
        <div class="svg-wrapper">
          <div class="circle">
            <img src="/img/uniswap.svg" alt="Image 3" class="svg-image animate__animated animate__bounce">
          </div>
          <span class="svg-text typed-text outlined-text">Uniswap</span>
        </div>
      </div>
  </div>
</template>
<script>
import useFontSize from "../useFontSize"; // adjust the import path to match your file structure

export default {
    name: "About",
    setup() {
        const { fontSize } = useFontSize(1, 0.75, 3, 0.01); // adjust these values as needed
        return { fontSize };
    }
}
</script>
<style>
/* Existing styles... */

.circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  background-color: darkpurple;
  border-radius: 50%; /* This makes the div round */
}

.svg-section {
  display: flex;
  align-items: center;
  padding: 50px 0;
}

.svg-wrapper {
  display: flex;
  align-items: center;
  margin: 0 10px; /* Adjust the margin as needed */
  flex-direction: column; /* Stack items vertically */
}

.svg-image {
  width: 90px; /* Set width */
  height: 90px; /* Set height */
  object-fit: cover; /* This will ensure the image cover the whole area */
}

.svg-text {
  margin-top: 20px; /* Adjust the margin as needed */
  display: none; /* Initially hide the text */
  text-align: center; /* Center the text */
}

@media screen and (max-width: 640px) {
  .svg-section {
    flex-direction: column;
    justify-content: center; /* Center items vertically */
    align-items: center; /* Center items horizontally */
  }

  .svg-wrapper {
    margin: 10px 0; /* Adjust the margin as needed */
  }

  .svg-text {
    display: inline-block; /* Show the text when the screen width is less than or equal to 640px */
  }
}
</style>
