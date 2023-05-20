<template>
    <div class="container">
        <div class="inner-container" v-for="(bigCircle, index) in bigCircles" :key="index">
            <div class="circle circle-big" :style="getBigCircleStyle(bigCircle)">
                <div v-for="(smallCircle, index) in bigCircle.smallCircles" :key="index" class="circle circle-small"
                    :style="getSmallCircleStyle(bigCircle, smallCircle)">
                    <span class="circle-number">{{ index + 1 }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { onMounted, reactive } from 'vue';
import * as math from 'mathjs';

const smallCircleRadius = 30;
const circleSpacing = 105; // Distance between small circles

const bigCircles = reactive([
    {
        diameter: 320,
        color: 'green',
        smallCircles: Array.from({ length: 5 }, (_, i) => ({ top: 0, left: 0, angle: i * (2 * Math.PI) / 5 })),
        startAngle: 270,
        spacing: 50
    },
    {
        diameter: 320,
        color: 'grey',
        smallCircles: Array.from({ length: 5 }, (_, i) => ({ top: 0, left: 0, angle: i * (2 * Math.PI) / 5 })),
        startAngle: 105,
        spacing: 50
    },
    {
        diameter: 320,
        color: 'blue',
        smallCircles: Array.from({ length: 5 }, (_, i) => ({ top: 0, left: 0, angle: i * (2 * Math.PI) / 5 })),
        startAngle: 245,
        spacing: 50
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
        backgroundColor: bigCircle.color
    };
};
</script>
  
<style>
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
}

.circle-small {
    width: 65px;
    height: 65px;
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
  