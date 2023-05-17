<template>
  <div class="image-section">
    <img class="revolutionary-image"
      src="https://cdn.discordapp.com/attachments/1107007792033828924/1108493765292871710/07f41dffdad45c7d548681cbf9376416.png"
      alt="Poppy Image">
  </div>
  <h2 class="about-text animate__animated animate__fadeIn " style="animation-duration: 3s;">
    <span class="typed-text poppyText outlined-text" style="font-size:3rem">About $Poppy</span>
  </h2>
  <div class="shadow-box">
    <span class="typed-text outlined-text">Please note that $Poppy Token has no affiliation with the game Poppy Playtime
      or its creators. This token is
      simply paying homage to the popular game we all love and recognize. $Poppy Token is a game-inspired coin with no
      intrinsic value or expectation of financial return. There is no formal team or roadmap. The token holds no
      practical use and is solely for entertainment purposes.</span>
  </div>
  <div class="svg-section">
    <div class="svg-wrapper">
      <Icon name="line-md:discord" size=72 color="white" />
      <span class="svg-text typed-text outlined-text">Discord</span>
    </div>
    <div class="svg-wrapper">
      <Icon name="line-md:twitter" size=72 color="white" />
      <span class="svg-text typed-text outlined-text">Telegram</span>
    </div>
    <div class="svg-wrapper">
      <Icon name="line-md:telegram" size=72 color="white" />
      <span class="svg-text typed-text outlined-text">Uniswap</span>
    </div>
  </div>
</template>

<style>
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
  justify-content: center;
  align-items: center;
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

