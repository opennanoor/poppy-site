<template>
    <div class="about-text animate__animated animate__fadeIn " style="animation-duration: 3s;">
        <span class="typed-text poppyText outlined-text" style="font-size:3rem">Roadmap</span>
    </div>
    <div class="container">
        <!-- Phase 1 roadmap-->
        <div class="inner-container">
            <div class="circle circle-big" data-aos="fade-right" data-aos-anchor-placement="top-bottom"
                style="margin-right: 100px;" :style="getBigCircleStyle(bigCircles[0])">
                <span style="left: 100%">dd</span>
                <div class="big-circle-text">
                    Phase 1
                </div>
                <div class="box box-right" data-aos="fade-up"
                    :style="getSmallCirclePositions(bigCircles[0], bigCircles[0].smallCircles[0])">
                    Content</div>
                <div class="circle circle-small" data-aos="fade-up"
                    :style="getSmallCircleStyle(bigCircles[0], bigCircles[0].smallCircles[0])"
                    style="border: 6px solid #0c3a0c;">
                    <span class="circle-number" style="text-align: center;">
                        <Icon name="dashicons:yes" color="green" size=70 />
                    </span>
                </div>
                <div class="box box-right" data-aos="fade-up"
                    :style="getSmallCirclePositions(bigCircles[0], bigCircles[0].smallCircles[1])">
                    Content</div>
                <div class="circle circle-small" data-aos="fade-up"
                    :style="getSmallCircleStyle(bigCircles[0], bigCircles[0].smallCircles[1])">
                    <span class="circle-number typed-text poppyText outlined-text" style="text-align: center;">2</span>
                </div>
                <div class="box box-right" data-aos="fade-up"
                    :style="getSmallCirclePositions(bigCircles[0], bigCircles[0].smallCircles[2])">
                    Content</div>
                <div class="circle circle-small" data-aos="fade-up"
                    :style="getSmallCircleStyle(bigCircles[0], bigCircles[0].smallCircles[2])">
                    <span class="circle-number typed-text poppyText outlined-text" style="text-align: center;">3</span>
                </div>
                <div class="box box-right" data-aos="fade-up"
                    :style="getSmallCirclePositions(bigCircles[0], bigCircles[0].smallCircles[3])">
                    Content</div>
                <div class="circle circle-small" data-aos="fade-up"
                    :style="getSmallCircleStyle(bigCircles[0], bigCircles[0].smallCircles[3])">
                    <span class="circle-number typed-text poppyText outlined-text" style="text-align: center;">4</span>
                </div>
                <div class="box box-right" data-aos="fade-up"
                    :style="getSmallCirclePositions(bigCircles[0], bigCircles[0].smallCircles[4])">
                    Content</div>
                <div class="circle circle-small" data-aos="fade-up"
                    :style="getSmallCircleStyle(bigCircles[0], bigCircles[0].smallCircles[4])">
                    <span class="circle-number typed-text poppyText outlined-text" style="text-align: center;">5</span>
                </div>
            </div>
        </div>
        <!-- Phase 2 roadmap-->
        <div class="inner-container">
            <div class="circle circle-big" data-aos="fade-right" data-aos-anchor-placement="top-bottom"
                style="margin-left: 430px;" :style="getBigCircleStyle(bigCircles[1])">
                <div class="big-circle-text">
                    <Icon name="grommet-icons:money" size=120 color="#A27B5C" />
                </div>
                <div class="box box-left typed-text" data-aos="fade-up"
                    :style="getSmallCirclePositions(bigCircles[1], bigCircles[1].smallCircles[0])">
                    Content</div>
                <div class="circle circle-small" data-aos="fade-up"
                    :style="getSmallCircleStyle(bigCircles[1], bigCircles[1].smallCircles[0])">
                    <span class="circle-number typed-text poppyText outlined-text" style="text-align: center;">10</span>
                </div>
                <div class="box box-left" data-aos="fade-up"
                    :style="getSmallCirclePositions(bigCircles[1], bigCircles[1].smallCircles[1])">
                    Content</div>
                <div class="circle circle-small" data-aos="fade-up"
                    :style="getSmallCircleStyle(bigCircles[1], bigCircles[1].smallCircles[1])">
                    <span class="circle-number typed-text poppyText outlined-text" style="text-align: center;">9</span>
                </div>
                <div class="box box-left" data-aos="fade-up"
                    :style="getSmallCirclePositions(bigCircles[1], bigCircles[1].smallCircles[2])">
                    Content</div>
                <div class="circle circle-small" data-aos="fade-up"
                    :style="getSmallCircleStyle(bigCircles[1], bigCircles[1].smallCircles[2])">
                    <span class="circle-number" style="text-align: center;">
                        <Icon name="fa-solid:question" size=50 />
                    </span>
                </div>
                <div class="box box-left" data-aos="fade-up"
                    :style="getSmallCirclePositions(bigCircles[1], bigCircles[1].smallCircles[3])">
                    Content</div>
                <div class="circle circle-small" data-aos="fade-up"
                    :style="getSmallCircleStyle(bigCircles[1], bigCircles[1].smallCircles[3])">
                    <span class="circle-number typed-text poppyText outlined-text" style="text-align: center;">7</span>
                </div>
                <div class="box box-left" data-aos="fade-up"
                    :style="getSmallCirclePositions(bigCircles[1], bigCircles[1].smallCircles[4])">
                    Content</div>
                <div class="circle circle-small" data-aos="fade-up"
                    :style="getSmallCircleStyle(bigCircles[1], bigCircles[1].smallCircles[4])">
                    <span class="circle-number typed-text poppyText outlined-text" style="text-align: center;">6</span>
                </div>
            </div>
        </div>
        <!-- Phase 3 roadmap-->
        <div class="inner-container">
            <div class="circle circle-big" data-aos="fade-right" data-aos-anchor-placement="top-bottom"
                style="margin-right: 100px;" :style="getBigCircleStyle(bigCircles[2])">
                <div class="big-circle-text">
                    <Icon name="game-icons:chest" size="120" color="#DCD7C9" />
                </div>
                <div class="box box-right" data-aos="fade-up"
                    :style="getSmallCirclePositions(bigCircles[2], bigCircles[2].smallCircles[0])">
                    Content</div>
                <div class="circle circle-small" data-aos="fade-up"
                    :style="getSmallCircleStyle(bigCircles[2], bigCircles[2].smallCircles[0])">
                    <span class="circle-number" style="text-align: center;">
                        <Icon name="bxs:lock" size=50 />
                    </span>
                </div>
                <div class="box box-right" data-aos="fade-up"
                    :style="getSmallCirclePositions(bigCircles[2], bigCircles[2].smallCircles[1])">
                    Content</div>
                <div class="circle circle-small" data-aos="fade-up"
                    :style="getSmallCircleStyle(bigCircles[2], bigCircles[2].smallCircles[1])">
                    <span class="circle-number" style="text-align: center;">
                        <Icon name="bxs:lock" size=50 />
                    </span>
                </div>
                <div class="box box-right" data-aos="fade-up"
                    :style="getSmallCirclePositions(bigCircles[2], bigCircles[2].smallCircles[2])">
                    Content</div>
                <div class="circle circle-small" data-aos="fade-up"
                    :style="getSmallCircleStyle(bigCircles[2], bigCircles[2].smallCircles[2])">
                    <span class="circle-number" style="text-align: center;">
                        <Icon name="bxs:lock" size=50 />
                    </span>
                </div>
                <div class="box box-right" data-aos="fade-up"
                    :style="getSmallCirclePositions(bigCircles[2], bigCircles[2].smallCircles[3])">
                    Content</div>
                <div class="circle circle-small" data-aos="fade-up"
                    :style="getSmallCircleStyle(bigCircles[2], bigCircles[2].smallCircles[3])">
                    <span class="circle-number" style="text-align: center;">
                        <Icon name="bxs:lock" size=50 />
                    </span>
                </div>
                <div class="box box-right" data-aos="fade-up"
                    :style="getSmallCirclePositions(bigCircles[2], bigCircles[2].smallCircles[4])">
                    Content</div>
                <div class="circle circle-small" data-aos="fade-up"
                    :style="getSmallCircleStyle(bigCircles[2], bigCircles[2].smallCircles[4])">
                    <span class="circle-number" style="text-align: center;">
                        <Icon name="bxs:lock" size=50 />
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, reactive } from 'vue';
import * as math from 'mathjs';
const smallCircleRadius = 30;
const circleSpacing = 100; // Distance between small circles
const bigCircles = reactive([
    {
        diameter: 300,
        color: '#1b242e',
        smallCircles: Array.from({ length: 5 }, (_, i) => ({ top: 0, left: 0, angle: i * (2 * Math.PI) / 5 })),
        startAngle: 292,
        spacing: 100
    },
    {
        diameter: 300,
        color: '#A27B5C',
        smallCircles: Array.from({ length: 5 }, (_, i) => ({ top: 0, left: 0, angle: i * (2 * Math.PI) / 5 })),
        startAngle: 109,
        spacing: 100
    },
    {
        diameter: 300,
        color: '#DCD7C9',
        smallCircles: Array.from({ length: 5 }, (_, i) => ({ top: 0, left: 0, angle: i * (2 * Math.PI) / 5 })),
        startAngle: 292,
        spacing: 100
    },
    // Add more big circles here as needed
]);
onMounted(() => {
    const generateCircles = (circle) => {
        const bigCircleRadius = circle.diameter / 2;
        const totalRadius = bigCircleRadius + circle.spacing; // total radius for positioning small circles
        const centerOfBigCircle = bigCircleRadius + smallCircleRadius; // center of the big circle
        let previousAngle = circle.startAngle * (Math.PI / 180); // The angle of the previous small circle
        for (let i = 0; i < circle.smallCircles.length; i++) {
            // Calculate the angle using the law of cosines
            const cosAngle = (2 * totalRadius ** 2 - circleSpacing ** 2) / (2 * totalRadius ** 2);
            const angle = previousAngle + math.acos(cosAngle);
            // calculate the x and y coordinates with respect to the center of the big circle
            const x = centerOfBigCircle + totalRadius * math.cos(angle) - smallCircleRadius;
            const y = centerOfBigCircle + totalRadius * math.sin(angle) - smallCircleRadius;
            circle.smallCircles[i].top = math.round(y, 2);
            circle.smallCircles[i].left = math.round(x, 2);
            circle.smallCircles[i].angle = angle; // <-- Update angle for each circle
            // Update the angle for the next small circle
            previousAngle = angle;
        }
    };
    // Generate all circles
    bigCircles.forEach(generateCircles);
});
const getBigCircleStyle = (circle) => {
    return {
        width: `${circle.diameter}px`,
        height: `${circle.diameter}px`,
        borderColor: circle.color
    };
};
const getSmallCircleStyle = (bigCircle, smallCircle) => {
    return {
        transform: 'translate(-50%, -50%)',
        top: `${smallCircle.top}px`,
        left: `${smallCircle.left}px`,
        backgroundColor: bigCircle.color,
        border: `6px solid #931e1e`,
    };
};
const getSmallCirclePositions = (bigCircle, smallCircle) => {
    return {
        transform: 'translate(-50%, -50%)',
        top: `${smallCircle.top}px`,
        left: `${smallCircle.left}px`,
    };
};
</script>
<style>
.box {
    color: #adb0bc;
    max-width: 500px;
    width: 450px;
    /* adjust as necessary */
    height: 70px;
    /* adjust as necessary */
    background-color: #1b242e;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    z-index: 0;
    display: flex;
    /* Use flexbox to align the content */
    justify-content: center;
    /* Horizontally center the content */
    align-items: center;
    /* Vertically center the content */
}

.box-right {
    margin-left: 244px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
}

.box-left {
    margin-left: -244px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
}

.big-circle-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    /* adjust as necessary */
    color: white;
}

.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.inner-container {
    position: relative;
    margin: 50px 0;
}

.circle-big {
    border-radius: 50%;
    border: 7px double;
    position: relative;
}

.circle-small,
.circle-number {
    position: absolute;
    z-index: 3;
}

.circle-small {
    width: 75px;
    height: 75px;
}

.circle-number {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    color: white;
}

@media (max-width: 768px) {
    .circle-big {
        border-width: 4px;
    }

    .circle-small {
        width: 40px;
        height: 40px;
    }

    .circle-number {
        font-size: 16px;
    }
}
</style>