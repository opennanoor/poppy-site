export default defineNuxtConfig({
    plugins: [{ src: "/plugins/aos.client.ts", ssr: false, mode: "client" },
    { src: "/plugins/router.scrollBehaviour.ts", ssr: false, mode: "client" }
    ],
    modules: ['nuxt-icon'],
})
