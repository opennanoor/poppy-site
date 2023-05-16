<template>
  <div class="about-content">
    <h2 class="about-text animate__animated animate__fadeIn " style="animation-duration: 3s;">
      <span class="typed-text poppyText outlined-text" style="font-size:3rem">About $Poppy</span>
    </h2>
    <div class="shadow-box">
      <div id="typedTextAbout" class="typed-text outlined-text"></div>
      <div class="image-text-wrapper">
        <nuxt-img :key="imageKey" :src="currentImage" width="200px" height="200px"
          class="revolutionary-image animate__animated animate__fadeIn" alt="Revolutionary Image" />
      </div>
    </div>
    <div class="svg-section">
      <div class="svg-wrapper">
        <div class="circle">
          <nuxt-img src="/images/discord.svg" alt="Image 1" class="svg-image animate__animated animate__bounce" />
        </div>
        <span class="svg-text typed-text outlined-text">Discord</span>
      </div>
      <div class="svg-wrapper">
        <div class="circle">
          <nuxt-img src="/images/telegram.svg" alt="Image 2" class="svg-image animate__animated animate__bounce" />
        </div>
        <span class="svg-text typed-text outlined-text">Telegram</span>
      </div>
      <div class="svg-wrapper">
        <div class="circle">
          <nuxt-img src="/images/uniswap.svg" alt="Image 3" class="svg-image animate__animated animate__bounce" />
        </div>
        <span class="svg-text typed-text outlined-text">Uniswap</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import Typed from 'typed.js'

const images = ref([
  '/images/chars/16_Mommy_long_legs.png',
  '/images/chars/16_Mommy_long_legs.png',
  '/images/chars/16_Mommy_long_legs.png'
])

const currentImage = ref(images.value[0])
const imageKey = ref(0) // a key for forcing the re-rendering of the img tag
let imageIndex = 0
let intervalId

onMounted(async () => {
  // Wait until the next DOM update cycle before trying to access #typedTextAbout
  await nextTick()

  const typedElement = document.querySelector('#typedTextAbout')
  if (typedElement) {
    new Typed(typedElement, {
      //strings: ["$Poppy meets Ethereum! <br> Hop on and ride the joyful, community-driven Poppy wave!"],
      strings: ["$Poppy meets Ethereum! The strange and exciting decentralized crypto project."],
      typeSpeed: 0,
    })
  } else {
    console.error('Could not find #typedTextAbout element')
  }

  // Pre-load images
  images.value.forEach(image => {
    const img = new Image()
    img.src = image
  })

  intervalId = setInterval(() => {
    imageIndex = (imageIndex + 1) % images.value.length
    currentImage.value = images.value[imageIndex]
    imageKey.value++ // increment the key each time we change the image
  }, 5000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>


<style>
.image-text-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* Distribute items equally */
}

.revolutionary-image {
  width: auto;
  height: auto;
  max-width: 200px;
  object-fit: cover;
  margin-left: 20px;
  /* Margin from the text */
}

.shadow-box {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
  box-sizing: border-box;
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
  align-items: center;
  padding: 50px 0;
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

  .shadow-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    box-sizing: border-box;
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

