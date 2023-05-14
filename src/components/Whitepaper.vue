<template>
    <h2 class="about-text animate__animated animate__fadeIn poppyText outlined-text" style="animation-duration: 3s;"
        :style="{ fontSize: fontSize + 'rem' }">Whitepaper</h2>
    <div class="shadow-box">
        <p class="typed-text outlined-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.</p>
    </div>
</template>
<script>
import useFontSize from "../useFontSize"; // adjust the import path to match your file structure

export default {
    name: "Whitepaper",
    setup() {
        const { fontSize } = useFontSize(1, 0.75, 3, 0.01); // adjust these values as needed
        return { fontSize };
    }
}
</script>