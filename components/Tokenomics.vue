<template>
  <h2 class="about-text animate__animated animate__fadeIn " style="animation-duration: 3s;">
    <span class="typed-text poppyText outlined-text" style="font-size:3rem">Connect</span>
  </h2>
  <div class="shadow-box">
    <div class="typed-text outlined-text">
    </div>
  </div>
</template>
<style>
.shadow-box {
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid rgb(255, 253, 253);
  padding-bottom: 40px;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 1100px;
  text-align: left;
  box-sizing: border-box;
  margin-bottom: 70px;
  box-shadow: inset 0px 0px 20px #fff;
  color: #ffffff;
  text-shadow: 2px 2px 5px #000000;
}


@media (max-width: 600px) {
  .shadow-box {
    padding: 10px;
    /* Reduce padding for small screens */
    font-size: 0.8rem;
    /* Reduce font-size for small screens */
  }
}
</style>