<template>
    <h2 class="about-text animate__animated animate__fadeIn poppyText " style="animation-duration: 3s;font-size:3rem">How to
        buy
    </h2>
    <div @click="toggleShadowBox(1)" data-aos="fade-up"
        :class="isShadowBoxVisible === 0 ? 'unopened-box typed-text' : 'unopened-box typed-text'">
        <div class="step about-text animate__animated animate__fadeIn poppyText" data-aos="zoom-in-up">
            1
        </div>Create a wallet
        <Icon style="align-items: right;right:0" name="typcn:plus" size=24 color="white" />
    </div>
    <div v-if="isShadowBoxVisible === 1" class="shadow-box" data-aos="fade-up" data-aos-anchor-placement="top-bottom">

        <div class="box-content">

            <p class="typed-text" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h2 data-aos="fade-up">Mobile Users</h2>
            <ol>
                <li data-aos="fade-up">Visit the App Store or Google Play Store.</li>
                <li data-aos="fade-up">Search for "MetaMask" or your desired wallet.</li>
                <li data-aos="fade-up">Download the app for free.</li>
                <li data-aos="fade-up">Open the app and follow the on-screen instructions to create a wallet.</li>
            </ol>
            <h2 data-aos="fade-up">Desktop Users</h2>
            <ol>
                <li data-aos="fade-up">Open Google Chrome on your computer.</li>
                <li data-aos="fade-up">Go to metamask.io.</li>
                <li data-aos="fade-up">Download the Google Chrome extension and follow the setup instructions.</li>
            </ol>
            <p class="warning" data-aos="fade-up">
                <Icon name="material-symbols:warning-outline-rounded" size="40" color="red" />
                Remember to secure your wallet with a strong password and keep backup phrases safe.
            </p>
            </p>
        </div>
    </div>
    <div class="create-wallet" data-aos="fade-up" @click="toggleShadowBox(2)"
        :class="isShadowBoxVisible === 0 ? 'unopened-box typed-text' : 'unopened-box typed-text'">
        <div class="step about-text animate__animated animate__fadeIn poppyText" data-aos="zoom-in-up">
            2
        </div>
        Obtain ETH
    </div>
    <div v-if="isShadowBoxVisible === 2" class="shadow-box" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500">

        <div class="box-content">
            <p class="typed-text" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
            <h2 data-aos="fade-up">Get ETH
            </h2>
            <ol>
                <li data-aos="fade-up">Obtain ETH by purchasing it directly in MetaMask, transferring from another
                    wallet,
                    or buying from an exchange and withdrawing it to your wallet.
                </li>
                <li data-aos="fade-up">Make sure you have enough ETH for the swap. Remember to use the ERC-20 Network,
                    as
                    $POPPY is an ERC-20 token.</li>
            </ol>
            <p class="warning" data-aos="fade-up">
                <Icon name="" size=40 color="red" />
            </p>
            </p>
        </div>
    </div>
    <div class="create-wallet" data-aos="fade-up" @click="toggleShadowBox(3)"
        :class="isShadowBoxVisible === 0 ? 'unopened-box typed-text' : 'unopened-box typed-text'">
        <div class="step about-text animate__animated animate__fadeIn poppyText" data-aos="zoom-in-up">
            3
        </div>
        Visit uniswap
    </div>
    <div v-if="isShadowBoxVisible === 3" class="shadow-box" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500">

        <div class="box-content">
            <p class="typed-text" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
            <h2 data-aos="fade-up">Uniswap
            </h2>
            <ol>
                <li data-aos="fade-up">Visit Uniswap: Open app.uniswap.org in Google Chrome or in your Metamask app
                    browser.
                </li>
                <li data-aos="fade-up">Connect Wallet: Link your digital wallet to Uniswap.</li>
                <li data-aos="fade-up">Find $POPPY Token: Paste the $POPPY token address into the Uniswap search bar,
                    select
                    "Poppy", and
                    confirm.</li>
                <li data-aos="fade-up">Sign the Prompt: When Metamask asks for a wallet signature, sign to confirm.</li>
            </ol>
            <p class="warning" data-aos="fade-up">
                <Icon name="ic:outline-warning-amber" size=40 color="red" />
                Remember to ensure the token address is correct before confirming the transaction.
            </p>
            </p>
        </div>
    </div>
    <div class="create-wallet" data-aos="fade-up" @click="toggleShadowBox(4)"
        :class="isShadowBoxVisible === 0 ? 'unopened-box typed-text' : 'unopened-box typed-text'">
        <div class="step about-text animate__animated animate__fadeIn poppyText" data-aos="zoom-in-up">
            4
        </div>Swap Eth for $POPPY
    </div>
    <div v-if="isShadowBoxVisible === 4" class="shadow-box" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500">

        <div class="box-content">

            <span class="typed-text" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                <h2 data-aos="fade-up">Swap ETH for $POPPY
                </h2>
                <ol>
                    <p data-aos="fade-up">
                        Enjoy tax-free swapping of ETH for $POPPY tokens. <br>No need to worry about specific slippage,
                        although
                        it's
                        recommended to adjust during market volatility.<br><br> Get ready for an exhilarating journey
                        into
                        the
                        world
                        of
                        Poppy, where your adventure may take you to the moon and beyond!</p>
                </ol>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isShadowBoxVisible: 0
        };
    },
    methods: {
        toggleShadowBox(index) {
            if (this.isShadowBoxVisible === index) {
                this.isShadowBoxVisible = 0; // Close the shadow box if it's already open
            } else {
                this.isShadowBoxVisible = index; // Open the selected shadow box
            }
        }
    }
};
</script>
<style>
.shadow-box-transition-enter-active,
.shadow-box-transition-leave-active {
    transition: max-height 0.5s;
}

.shadow-box-transition-enter,
.shadow-box-transition-leave-to {
    max-height: 0;
    overflow: hidden;
}

.unopened-box {
    font-size: 1.4rem;
    background-color: #15202b;
    color: white;
    border-radius: 10px;
    padding: 10px;
    margin-top: 20px;
    padding-left: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    height: 50px;
    width: 700px;
    transition: all 0.5s ease-in-out;
}

.unopened-box:hover {
    color: yellow;
}

.shadow-box {
    background-color: #10181f;

}

ol {
    counter-reset: item;
    list-style-type: none;
    padding: 0;
}

li {
    counter-increment: item;
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
}

li:before {
    content: counter(item) ".";
    margin-right: 10px;
    text-align: left;
    display: inline-block;
    min-width: 30px;
}

li::after {
    content: '';
    flex-grow: 1;
}

.warning {
    color: rgb(228, 48, 16);
    font-weight: bold;
}




.box-content {
    margin-left: 70px;
    padding-left: 10px;
}

.box-image {
    position: absolute;
    left: 10px;
    /* Adjust as needed */
    top: 50%;
    transform: translateY(-50%);
    padding-left: 3%;
    /* Adjust as needed */
    /* Adjust as needed */
}

.step {
    position: absolute;
    top: 0;
    margin-right: 15px;
    /* 50% of the box's height minus half of the circle's height */
    left: 0;
    transform: translate(-50% - 35px);
    width: 70px;
    /* adjust as needed */
    height: 70px;
    /* adjust as needed */
    line-height: 70px;
    /* match with height */
    border-radius: 50%;
    background: #10181f;
    text-align: center;
    position: relative;
    overflow: visible;
    /* Allow pseudo-elements to extend outside the circle */
    z-index: 1;
    /* Try adjusting this value */
}

.step::before {
    content: '';
    position: absolute;
    width: 74px;
    /* width + twice the border-width */
    height: 74px;
    /* height + twice the border-width */
    border-radius: 50%;
    top: -2px;
    /* Move it up by the border-width */
    left: -2px;
    /* Move it left by the border-width */
    box-sizing: border-box;
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
    /* This clips the bottom half of the border */
}

.line-left {
    content: '';
    position: absolute;
    top: 35px;
    /* Same as border-width */
    left: -198px;
    /* Move it left by border-width + line length */
    width: 200px;
    /* line length */
    height: 4px;
    /* same as border-width */
    background: #efd602;
}

.line-right {
    content: '';
    position: absolute;
    top: 35px;
    left: 68px;
    /* Same as border-width */
    right: -24px;
    /* Move it right by border-width + line length */
    width: 200px;
    /* line length */
    height: 4px;
    /* same as border-width */
    background: #efd602;
}





@media only screen and (max-width: 600px) {

    .showIcon {
        display: none;
    }

    .box-content {
        margin-left: 0;
        padding-left: 0;
        text-align: center;
    }

    .step {
        left: calc(50% - 35px);
        /* Adjust the value to center the circle horizontally */
        transform: none;
        /* Reset the transform */
    }
}
</style>