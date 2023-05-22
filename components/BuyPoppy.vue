<template>
    <h2 class="about-text animate__animated animate__fadeIn poppyText " style="animation-duration: 3s;font-size:3rem">How to
        buy
    </h2>
    <div style="position: relative;">
        <div style="float: left; width:700px;">
            <div @click="toggleShadowBox(1)" data-aos="fade-down"
                :class="isShadowBoxVisible === 0 ? 'unopened-box typed-text-roboto' : 'unopened-box typed-text-roboto'"
                style="font-weight: 700;">
                <div class="step animate__animated animate__fadeIn poppyText" data-aos="zoom-in-up">
                    1
                </div>Create a wallet
            </div>
            <div v-if="isShadowBoxVisible === 1" class="shadow-box" data-aos="fade-down"
                data-aos-anchor-placement="top-bottom" ref="shadowBox1">
                <div class="box-content typed-text-roboto">
                    <p data-aos="fade-down" data-aos-anchor-placement="top-bottom">
                    <h2 data-aos="fade-down">Mobile Users</h2>
                    <ol>
                        <li data-aos="fade-down">Visit the App Store or Google Play Store.</li>
                        <li data-aos="fade-down">Search for "MetaMask" or your desired wallet.</li>
                        <li data-aos="fade-down">Download the app for free.</li>
                        <li data-aos="fade-down">Open the app and follow the on-screen instructions to create a wallet.</li>
                    </ol>
                    <h2 data-aos="fade-down">Desktop Users</h2>
                    <ol>
                        <li data-aos="fade-down">Open Google Chrome on your computer.</li>
                        <li data-aos="fade-down">Go to metamask.io.</li>
                        <li data-aos="fade-down">Download the Google Chrome extension and follow the setup instructions.
                        </li>
                    </ol>
                    </p>
                    <p class="warning" data-aos="fade-down">
                        Remember to secure your wallet with a strong password and keep backup phrases safe.
                    </p>
                </div>
            </div>
            <div class="create-wallet" data-aos="fade-down" @click="toggleShadowBox(2)"
                :class="isShadowBoxVisible === 0 ? 'unopened-box typed-text-roboto' : 'unopened-box typed-text-roboto'"
                style="font-weight: 700;">
                <div class="step about-text animate__animated animate__fadeIn poppyText" data-aos="zoom-in-up">
                    2
                </div>
                Obtain ETH
            </div>
            <div v-if="isShadowBoxVisible === 2" ref="shadowBox2" class="shadow-box" data-aos="fade-down"
                data-aos-anchor-placement="top-bottom">

                <div class="box-content typed-text-roboto">
                    <p data-aos="fade-down" data-aos-anchor-placement="top-bottom">
                    <h2 data-aos="fade-down">Get ETH
                    </h2>
                    <ol>
                        <li data-aos="fade-down">Obtain ETH by purchasing it directly in MetaMask, transferring from another
                            wallet,
                            or buying from an exchange and withdrawing it to your wallet.
                        </li>
                        <li data-aos="fade-down">Make sure you have enough ETH for the swap.</li>
                    </ol>
                    <p class="warning" data-aos="fade-down">
                        Remember to use the ERC-20 Network, as $POPPY is an ERC-20 token.
                    </p>
                    </p>
                </div>
            </div>
            <div class="create-wallet" data-aos="fade-down" @click="toggleShadowBox(3)"
                :class="isShadowBoxVisible === 0 ? 'unopened-box typed-text-roboto' : 'unopened-box typed-text-roboto'"
                style="font-weight: 700;">
                <div class="step about-text animate__animated animate__fadeIn poppyText" data-aos="zoom-in-up">
                    3
                </div>
                Visit uniswap
            </div>
            <div v-if="isShadowBoxVisible === 3" ref="shadowBox3" class="shadow-box" data-aos="fade-down"
                data-aos-anchor-placement="top-bottom">

                <div class="box-content typed-text-roboto">
                    <p data-aos="fade-down" data-aos-anchor-placement="top-bottom">
                    <ol>
                        <li data-aos="fade-down">Open app.uniswap.org in Google Chrome or in your Metamask app
                            browser.
                        </li>
                        <li data-aos="fade-down">Link your digital wallet to Uniswap.</li>
                        <li data-aos="fade-down">Paste the $POPPY token address into the Uniswap search bar,
                            select
                            "Poppy", and
                            confirm.</li>
                        <li data-aos="fade-down">Sign the Prompt: When Metamask asks for a wallet signature, sign to
                            confirm.
                        </li>
                    </ol>
                    </p>
                </div>
            </div>
            <div class="create-wallet" data-aos="fade-down" @click="toggleShadowBox(4)"
                :class="isShadowBoxVisible === 0 ? 'unopened-box typed-text-roboto' : 'unopened-box typed-text-roboto'"
                style="font-weight: 700;">
                <div class="step about-text animate__animated animate__fadeIn poppyText" data-aos="zoom-in-up">
                    4
                </div>Swap Eth for $POPPY
            </div>
            <div v-if="isShadowBoxVisible === 4" ref="shadowBox4" class="shadow-box" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">

                <div class="box-content typed-text-roboto">

                    <span data-aos="fade-down" data-aos-anchor-placement="top-bottom">
                        <h2 data-aos="fade-down">Swap ETH for $POPPY
                        </h2>
                        <ol>
                            <p data-aos="fade-down">
                                Enjoy tax-free swapping of ETH for $POPPY tokens. <br>No need to worry about specific
                                slippage,
                                although
                                it's
                                recommended to adjust during market volatility.<br><br> Get ready for an exhilarating
                                journey
                                into
                                the
                                world
                                of
                                Poppy, where your adventure may take you to the moon and beyond!</p>
                        </ol>
                    </span>
                </div>
            </div>
        </div>
        <div v-if="isDesktop" style="position: absolute; top: 0; right: 0;">
            <img src="/images/help.png" class="hide-on-phone" alt="Image" data-aos="fade-up-left" style="z-index: 2;">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isShadowBoxVisible: 0,
            isDesktop: false
        };
    },
    mounted() {
        this.checkScreenWidth();
        window.addEventListener('resize', this.checkScreenWidth);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkScreenWidth);
    },
    methods: {
        toggleShadowBox(index) {
            if (this.isShadowBoxVisible === index) {
                this.isShadowBoxVisible = 0; // Close the shadow box if it's already open
            } else {
                this.isShadowBoxVisible = index; // Open the selected shadow box
                this.$nextTick(() => {
                    const element = this.$refs['shadowBox' + index];
                    if (element && !this.isDesktop) {
                        const rect = element.getBoundingClientRect();
                        const offset = -100; // Adjust the offset as per your requirement

                        const absoluteTop = window.pageYOffset + rect.top + offset;
                        window.scrollTo({
                            top: absoluteTop,
                            behavior: 'smooth' // optional, for smooth scrolling
                        });
                    }
                });
            }
        },
        checkScreenWidth() {
            this.isDesktop = window.innerWidth >= 971; // Adjust the threshold as per your requirement
        }
    }
};
</script>

<style>
.typed-text-roboto {
    font-family: 'Roboto', sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    color: rgb(196, 195, 195);
}

.active-menu {
    color: #23e204;
}

.unopened-box {
    border-left: #23e204 6px solid;
    justify-content: left;
    font-size: 1.4rem;
    background-color: #0f161d;
    color: #a5a5a5;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    padding-left: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 50px;
    max-width: 700px;
    transition: all 0.5s ease-in-out;
}

.unopened-box:hover {
    color: #23e204;
}

ol {
    counter-reset: item;
    list-style-type: none;
    padding: 0;
}

li {
    counter-increment: item;
    margin-bottom: 3px;
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
    color: #B22222;
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
    color: #c2c3c8 !important;
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
    .unopened-box {
        justify-content: start;
        max-width: 550px;

    }

    .showIcon {
        display: none;
    }

    .box-content {
        margin-left: 0;
        padding-left: 0;
    }

    .step {
        /* Adjust the value to center the circle horizontally */
        transform: none;
        /* Reset the transform */
    }
}
</style>