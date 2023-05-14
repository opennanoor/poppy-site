<template>
      <h2 class="about-text animate__animated animate__fadeIn " style="animation-duration: 3s;">
      <span class="typed-text poppyText outlined-text" :style="{ fontSize: fontSize + 'rem' }">Tokenomics</span></h2>
  <div class="shadow-box">
    <div class="typed-text outlined-text">No Taxes, No Bullshit. It’s that simple.
93.1% of the tokens were sent to the liquidity pool, LP tokens were burnt, and contract is renounced. The remaining 6.9% of the supply is being held in a multi-sig wallet only to be used as tokens for future centralized exchange listings, bridges, and liquidity pools. This wallet is easily trackable with the ENS name “pepecexwallet.eth”</div>
  </div>
</template>

<script>
import useFontSize from "../useFontSize"; // adjust the import path to match your file structure

export default {
    name: "Tokenomics",
    setup() {
        const { fontSize } = useFontSize(1, 0.75, 3, 0.01); // adjust these values as needed
        return { fontSize };
    }
}
</script>

<style>
.shadow-box {
  background-color: rgba(0, 0, 0, 0.432);
  box-shadow: 0px 0px 5px rgb(255, 255, 255), 0px 0px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.199);
  border-top-left-radius: 50px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 50px;
  padding: 20px;
  width: 100%; /* Full width */
  max-width: 850px;
  max-width: auto;
  box-sizing: border-box; /* Include padding and border in element's total width and height */
}

@media (max-width: 600px) {
  .shadow-box {
    padding: 10px; /* Reduce padding for small screens */
    font-size: 0.8rem; /* Reduce font-size for small screens */
  }
}
</style>