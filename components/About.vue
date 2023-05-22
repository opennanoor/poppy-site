<template>
  <div class="image-container">
    <img src="https://cdn.discordapp.com/attachments/1106185526584823918/1110279104445550713/the-gist-of-it.gif"
      alt="Your Image">
  </div>
  <div class="image-section">
    <img class="revolutionary-image"
      src="https://media.discordapp.net/attachments/1106185526584823918/1110280748663066754/Rick-And-Morty-Logo.png?width=1193&height=671"
      alt="Poppy Image">
  </div>
  <h2 class="about-text animate__animated animate__fadeIn " style="animation-duration: 3s;">
  </h2>
</template>

<style>
.image-container {
  position: absolute;
  left: -450px;
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
}

.revolutionary-image {
  width: 50%;
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

