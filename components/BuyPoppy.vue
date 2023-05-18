<template>
    <h2 class="about-text animate__animated animate__fadeIn poppyText outlined-text"
        style="animation-duration: 3s;font-size:3rem">How to buy
    </h2>
    <div class="shadow-box" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
        <div class="showIcon">

            <Icon class="box-image" name="arcticons:metamask" size=120 color="white" />
        </div>

        <div class="box-content">
            <div class="step about-text animate__animated animate__fadeIn poppyText outlined-text" data-aos="zoom-in-up">1
            </div>
            <p class="typed-text outlined-text" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000">
            <h2 class="outlined-text" data-aos="fade-up">Mobile Users
            </h2>
            <ol>
                <li data-aos="fade-up">Visit the App Store or Google Play Store.</li>
                <li data-aos="fade-up">Search for "MetaMask" or your desired wallet.</li>
                <li data-aos="fade-up">Download the app for free.</li>
                <li data-aos="fade-up">Open the app and follow the on-screen instructions to create a wallet.</li>
            </ol>
            <h2 class="outlined-text" data-aos="fade-up">Desktop Users
            </h2>
            <ol>
                <li data-aos="fade-up">Open Google Chrome on your computer.</li>
                <li data-aos="fade-up">Go to metamask.io.</li>
                <li data-aos="fade-up">Download the Google Chrome extension and follow the setup instructions.</li>
            </ol>
            <p class="warning" data-aos="fade-up">
                <Icon name="material-symbols:warning-outline-rounded" size=40 color="red" />
                Remember to secure your wallet with a strong password and keep backup phrases safe.
            </p>
            </p>
        </div>
    </div>
    <div class="shadow-box" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
        <div class="showIcon">
            <Icon class="box-image" name="majesticons:etherium-circle-line" size=120 color="white" />
        </div>
        <div class="box-content">
            <div class="step about-text animate__animated animate__fadeIn poppyText outlined-text" data-aos="zoom-in-up">2
            </div>
            <p class="typed-text outlined-text" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000">
            <ol>
                <h2 class="outlined-text" data-aos="fade-up">Get ETH
                </h2>
                <p data-aos="fade-up">
                <ol>
                    <li>Obtain ETH by purchasing it directly in MetaMask, transferring from another
                        wallet, or buying
                        from an exchange and withdrawing it to your wallet.</li>
                    <li>Make sure you have enough ETH for the swap.
                        Remember to use the
                        ERC-20 Network, as $POPPY is an ERC-20 token.
                    </li>
                </ol>
                </p>
            </ol>
            </p>
        </div>
    </div>
    <div class="shadow-box" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
        <div class="showIcon">
            <Icon class="box-image" name="majesticons:etherium-circle-line" size=120 color="white" />
        </div>
        <div class="box-content">
            <div class="step about-text animate__animated animate__fadeIn poppyText outlined-text" data-aos="zoom-in-up">3
            </div>
            <p class="typed-text outlined-text" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000">
            <h2 class="outlined-text" data-aos="fade-up">Uniswap
            </h2>
            <ol>
                <li data-aos="fade-up">Visit Uniswap: Open app.uniswap.org in Google Chrome or in your Metamask app browser.
                </li>
                <li data-aos="fade-up">Connect Wallet: Link your digital wallet to Uniswap.</li>
                <li data-aos="fade-up">Find $POPPY Token: Paste the $POPPY token address into the Uniswap search bar, select
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
    <div class="shadow-box" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
        <div class="showIcon">

            <Icon class="box-image" name="ic:twotone-rocket-launch" size=120 color="white" />
        </div>
        <div class="box-content">
            <div class="step about-text animate__animated animate__fadeIn poppyText outlined-text" data-aos="zoom-in-up">4
            </div>
            <p class="typed-text outlined-text" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000">
            <h2 class="outlined-text" data-aos="fade-up">Swap ETH for $POPPY
            </h2>
            <ol>
                Enjoy tax-free swapping of ETH for $POPPY tokens. <br>No need to worry about specific slippage, although
                it's
                recommended to adjust during market volatility.<br><br> Get ready for an exhilarating journey into the world
                of
                Poppy, where your adventure may take you to the moon and beyond!
            </ol>
            </p>
        </div>
    </div>
</template>
<style>
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
    margin-left: 20%;
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
    top: calc(-35px);
    /* 50% of the box's height minus half of the circle's height */
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    /* adjust as needed */
    height: 70px;
    /* adjust as needed */
    line-height: 70px;
    /* match with height */
    border-radius: 50%;
    background: rgb(31, 31, 31);
    text-align: center;
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