export default {
    // Other configuration options...
    plugins: [{ src: "/plugins/aos.client.ts", ssr: false, mode: "client" },
    { src: "/plugins/router.scrollBehaviour.js", ssr: false, mode: "client" }
    ],
    generate: {
        fallback: true,
    },
}