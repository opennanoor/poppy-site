import { ref, onMounted, onUnmounted } from "vue";

export default function useFontSize(defaultSize = 1, minSize = 0.75, maxSize = 3, scaleFactor = 0.01) {
    const fontSize = ref(defaultSize); // Default font size in rem

    const checkFontSize = () => {
        const computedSize = Math.max(window.innerWidth * scaleFactor, minSize); // Set a minimum size in rem
        fontSize.value = Math.min(computedSize, maxSize); // Set a maximum size in rem
    }

    onMounted(() => {
        window.addEventListener('resize', checkFontSize);
        checkFontSize(); // initial check
    });

    onUnmounted(() => {
        window.removeEventListener('resize', checkFontSize);
    });

    return { fontSize };
}
