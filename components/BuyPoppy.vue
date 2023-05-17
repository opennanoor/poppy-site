<template>
    <h2 class="about-text animate__animated animate__fadeIn poppyText outlined-text"
        style="animation-duration: 3s;font-size:3rem">How to buy
    </h2>
    <div class="shadow-box">\
        <div class="showIcon">
            <Icon class="box-image icon"
                name="streamline:money-currency-bitcoin-circle-1-crypto-circle-payment-blockchain-finance-bitcoin-currency-money"
                size=120 color="white" />
        </div>
        <div class="box-content">
            <div class="step about-text animate__animated animate__fadeIn poppyText outlined-text" data-aos="zoom-in-up">1
            </div>
            <p class="typed-text outlined-text" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                sdata-aos-duration="1000">
                Get a wallet

                download metamask or your wallet of choice from the app store or google play store for free. Desktop users,
                download
                the google chrome extension by going to metamask.io.</p>
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
                sdata-aos-duration="1000">
            <ol>
                <li>Visit Uniswap: Open app.uniswap.org in Google Chrome or in your Metamask app browser.</li>
                <li>Connect Wallet: Link your digital wallet to Uniswap.</li>
                <li>Find $POPPY Token: Paste the $POPPY token address into the Uniswap search bar, select "Pepe", and
                    confirm.</li>
                <li>Sign the Prompt: When Metamask asks for a wallet signature, sign to confirm.</li>
            </ol>
            <p class="warning">Remember to ensure the token address is correct before confirming the transaction.</p>
            </p>
        </div>
    </div>
    <div class="shadow-box" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
        <div class="showIcon">

            <Icon class="box-image" name="arcticons:metamask" size=120 color="white" />
        </div>
        <div class="box-content">
            <div class="step about-text animate__animated animate__fadeIn poppyText outlined-text" data-aos="zoom-in-up">3
            </div>
            <p class="typed-text outlined-text" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                sdata-aos-duration="1000">
            <ol>
                <li>Select Wallet: Choose Metamask or your preferred digital wallet.</li>
                <li>Mobile Users: Download the wallet app from App Store or Google Play Store.</li>
                <li>Desktop Users: Visit Metamask.io to download the Chrome extension.</li>
                <li>Install and Set Up: Open the app or extension, follow setup instructions.</li>
            </ol>
            <p class="warning">Remember to secure your wallet with a strong password and keep backup phrases safe.</p>
            </p>
        </div>
    </div>
    <div class="shadow-box" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
        <div class="showIcon">
            <Icon class="box-image" name="material-symbols:swap-horizontal-circle-outline-rounded" size=120 color="white" />
        </div>
        <div class="box-content">
            <div class="step about-text animate__animated animate__fadeIn poppyText outlined-text" data-aos="zoom-in-up">4
            </div>
            <p class="typed-text outlined-text" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                sdata-aos-duration="1000">
                Get a wallet
                download metamask or your wallet of choice from the app store or google play store for free. Desktop users,
                download
                the google chrome extension by going to metamask.io.</p>
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
}

li:before {
    margin-right: 10px;
    content: " - ";
    font-weight: bold;
    white-space: nowrap;
}

.warning {
    color: red;
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