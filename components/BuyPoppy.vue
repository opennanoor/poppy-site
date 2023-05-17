<template>
    <h2 class="about-text animate__animated animate__fadeIn poppyText outlined-text"
        style="animation-duration: 3s;font-size:3rem">How to buy
    </h2>
    <div class="buy-box">
        <img class="box-image"
            src="https://static.wixstatic.com/media/1f3f2b_af81019501c549d5b192536bb8680fc5~mv2.png/v1/fill/w_138,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20-%202023-03-30T212906_738.png"
            alt="description of image">
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
    <div class="buy-box" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
        <img class="box-image"
            src="https://static.wixstatic.com/media/1f3f2b_48f30828b7d740d98efb1a2f8febc010~mv2.png/v1/fill/w_138,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20-%202023-03-30T213620_680.png"
            alt="description of image">
        <div class="box-content">
            <div class="step about-text animate__animated animate__fadeIn poppyText outlined-text" data-aos="zoom-in-up">2
            </div>
            <p class="typed-text outlined-text" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                sdata-aos-duration="1000">
                Get a wallet

                Go to Uniswap

                connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app.
                Connect your wallet. Paste the $PEPE token address into Uniswap, select Pepe, and confirm. When Metamask
                prompts you for a wallet signature, sign.</p>
        </div>
    </div>
    <div class="buy-box" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
        <img class="box-image"
            src="https://static.wixstatic.com/media/1f3f2b_9d0d4341170c4640b3663065417b3700~mv2.png/v1/fill/w_138,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/uniswap%20(2).png"
            alt="description of image">
        <div class="box-content">
            <div class="step about-text animate__animated animate__fadeIn poppyText outlined-text" data-aos="zoom-in-up">3
            </div>
            <p class="typed-text outlined-text" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                sdata-aos-duration="1000">
                Get a wallet

                download metamask or your wallet of choice from the app store or google play store for free. Desktop users,
                download
                the google chrome extension by going to metamask.io.</p>
        </div>
    </div>
    <div class="buy-box" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
        <img class="box-image"
            src="https://static.wixstatic.com/media/1f3f2b_af81019501c549d5b192536bb8680fc5~mv2.png/v1/fill/w_138,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20-%202023-03-30T212906_738.png"
            alt="description of image">
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
.box-content {
    margin-left: 20%;
    padding-left: 10px;
}

.box-image {
    display: hidden;
    position: absolute;
    left: 10px;
    /* Adjust as needed */
    top: 50%;
    transform: translateY(-50%);
    width: 100px;
    padding-left: 3%;
    /* Adjust as needed */
    height: 100px;
    /* Adjust as needed */
}

.buy-box {
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
</style>