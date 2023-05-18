export default defineNuxtConfig({
    ssr: true,

    plugins: [{ src: "/plugins/aos.client.ts", ssr: false, mode: "client" },
    { src: "/plugins/router.scrollBehaviour.ts", ssr: false, mode: "client" }
    ],

    modules: ['nuxt-icon', '@nuxt/image-edge', '@vueuse/nuxt'],

    image: {
        provider: 'netlify',
        netlify: {
            baseURl: process.env.IMAGES_URL
        },

    }
})
