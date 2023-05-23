<template>
  <div class="image-container">
    <div v-if="isBigScreen">
      <img src="/images/monster.webp" alt="Monster">
    </div>
  </div>
  <div class="image-section">
    <img class="revolutionary-image"
      src="https://media.discordapp.net/attachments/1106185526584823918/1110280748663066754/Rick-And-Morty-Logo.png?width=1193&height=671"
      @mouseover="moveImage" @mouseleave="resetImage" alt="Poppy Image">
    <div class="taxes">0% TAXES</div>

  </div>
  <p class="typed-text-roboto abouttxt" data-aos="fade-up">Step through the portal to an exhilarating crypto
    adventure with Mortycoin,
    where the dimension of meme-inspired wealth awaits, free from the burden of taxes.</p>
</template>
<script>
export default {
  data() {
    return {
      isBigScreen: false,
    };
  },
  mounted() {
    const mediaQuery = window.matchMedia("(min-width: 1024px)"); // Set your desired breakpoint here

    // Initial check on component mount
    this.isBigScreen = mediaQuery.matches;

    // Update the value when the screen size changes
    mediaQuery.addListener(this.updateScreenSize);
  },
  beforeUnmount() {
    const mediaQuery = window.matchMedia("(min-width: 1024px)"); // Set your desired breakpoint here

    // Remove the listener to prevent memory leaks
    mediaQuery.removeListener(this.updateScreenSize);
  },
  methods: {
    updateScreenSize(event) {
      this.isBigScreen = event.matches;
    },
    moveImage(event) {
      event.target.style.transform = 'translate(-5px, -5px)'; /* Adjust the translation values as per your requirement */
    },
    resetImage(event) {
      event.target.style.transform = 'none';
    },
  },
};
</script>

<style>
.abouttxt {
  font-size: 26px !important;
  color: white !important;
  margin-top: 22px;
  letter-spacing: 4px;
  justify-content: start;
  align-items: start;
  padding-left: 200px;
  text-transform: uppercase;
}

.taxes {
  font-family: Poppins, sans-serif !important;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 4px;
  font-size: 20px;
  color: #f5f5f5 !important;
  font-weight: 700 !important;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: -80px;
  margin-right: 90px;
  /* Add a margin to create space between the elements */
  width: 200px;
  /* Adjust the width as needed */
  height: 60px;
  /* Adjust the height as needed */
  border-radius: 10px;
  width: 200px;
  height: 60px;
  background: linear-gradient(to right, transparent 0%, #00b4cc8f 20%, #00b4cca9 80%, transparent 100%);
}

.image-container {
  position: absolute;
  left: -70px;
  top: 410px;
}

.disclaimer {
  text-align: center;
  line-height: 1.6;
}

.disclaimer h1 {
  font-size: 1.5em;
  color: #ff5252;
  margin-bottom: 20px;
}

.disclaimer p {
  margin-bottom: 20px;
}

.disclaimer p:last-child {
  margin-bottom: 0;
}

.displayIcon {
  display: inline-block;
  /* Ensure the icon is displayed as an inline element */
}

.image-section {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -80px;
  flex-direction: column;

}

.revolutionary-image {
  width: 60%;
  height: auto;
  object-fit: cover;
}

.typed-text.outlined-text {
  order: 0;
  text-align: left;
  width: 100%;
  min-width: 60%;
}

.circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  background-color: darkpurple;
  border-radius: 50%;
}

.svg-section {
  display: flex;
  justify-content: flex-end;
  align-items: right;
  /* Ensure the section covers the full height of the viewport */
}


.svg-wrapper {
  display: flex;
  align-items: center;
  margin: 0 10px;
  flex-direction: column;
}

.svg-image {
  width: 90px;
  height: 90px;
  object-fit: cover;
}

.svg-text {
  margin-top: 20px;
  display: none;
  text-align: center;
}

@media screen and (max-width: 640px) {
  .abouttxt {
    font-size: 26px !important;
    color: white !important;
    margin-top: 22px;
    align-items: center;
    letter-spacing: 4px;
    justify-content: center;
    text-transform: uppercase;
    padding-left: 0px;
  }

  .image-container {
    position: absolute;
    left: -40px;
    top: 410px;
  }

  .svg-wrapper {
    display: none;
    /* Hide the icon on small screens */
  }

  .image-text-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .revolutionary-image {
    width: 100%;
    height: auto;
    max-width: 200px;
    object-fit: cover;
    margin: 0 auto;
  }

  .svg-section {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .svg-wrapper {
    margin: 10px 0;
  }

  .svg-text {
    display: inline-block;
  }
}

/* Rest of your styles... */
</style>

