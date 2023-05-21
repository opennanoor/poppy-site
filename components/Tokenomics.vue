<template>
  <h2 class="about-text animate__animated animate__fadeIn " style="animation-duration: 3s;">
    <span class="typed-text poppyText outlined-text" style="font-size:3rem">Tokenomics</span>
  </h2>
  <div class="shadow-box">
    <div class="typed-text outlined-text">
    </div>
  </div>
</template>
<style>
@media (min-width: 600px) {

  .shadow-box {
    /* Removed fixed positioning */
    padding: 10px;
    font-size: 0.8rem;
    display: flex;
    justify-content: flex-start !important;
    /* removed 'align-items: center;' so the content fills the container vertically */
    position: relative;
    max-width: 1100px;
    text-align: left;
    box-sizing: border-box;
    color: #c2c3c8;
    padding-top: 14rem;
    /* Ensure it fills the entire width */
    width: 100%;
  }
}


@media (max-width: 600px) {
  .shadow-box {
    /* Removed fixed positioning */
    padding: 10px;
    font-size: 0.8rem;
    display: flex;
    justify-content: flex-start !important;
    /* removed 'align-items: center;' so the content fills the container vertically */
    position: relative;
    max-width: 1100px;
    text-align: left;
    box-sizing: border-box;
    margin-bottom: 70px;
    padding-top: 5rem;
    color: #c2c3c8;
    /* Ensure it fills the entire width */
    width: 100%;
  }
}
</style>