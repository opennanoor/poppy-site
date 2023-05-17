<template>
  <h2 class="about-text animate__animated animate__fadeIn " style="animation-duration: 3s;">
    <span class="typed-text poppyText outlined-text" style="font-size:3rem">Tokenomics</span>
  </h2>
  <div class="shadow-box">
    <div class="typed-text outlined-text">No Taxes, No Bullshit. It’s that simple.
      93.1% of the tokens were sent to the liquidity pool, LP tokens were burnt, and contract is renounced. The remaining
      6.9% of the supply is being held in a multi-sig wallet only to be used as tokens for future centralized exchange
      listings, bridges, and liquidity pools. This wallet is easily trackable with the ENS name “pepecexwallet.eth”</div>
  </div>
</template>
<style>
.shadow-box {
  display: flex;
  position: relative;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.726);
  border: 4px solid rgb(31, 31, 31);
  padding: 20px;
  max-width: 1100px;
  text-align: center;
  box-sizing: border-box;
  /* Include padding and border in element's total width and height */
  margin-bottom: 70px;
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