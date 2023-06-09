export default defineNuxtConfig({
    ssr: true,

    routeRules: {
        '/': { prerender: true },
        // Add corsheaders on API routes
        '/*': { cors: true },
    },
    plugins: [
        { src: "/plugins/aos.client.ts", mode: "client" },
        { src: "/plugins/router.scrollBehaviour.ts", mode: "client" },
        { src: "/plugins/particles.vue3.ts", ssr: false, },
        { src: "/plugins/slidejs.vue3.ts", ssr: false, },
    ],

    modules: ['nuxt-icon', '@nuxt/image-edge', '@vueuse/nuxt'],

    image: {
        provider: 'netlify',
        netlify: {
            baseURl: process.env.IMAGES_URL
        },
    }
})
