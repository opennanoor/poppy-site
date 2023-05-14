import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.$router.options.scrollBehavior = async (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition;
        }

        const findEl = async (hash, x = 0) => {
            return (
                document.querySelector(hash) ||
                new Promise((resolve) => {
                    if (x > 0) {
                        return resolve(document.querySelector("#app"));
                    }
                    setTimeout(() => {
                        resolve(findEl(hash, 1));
                    }, 500);
                })
            );
        };

        if (to.hash) {
            // Delay scrolling to allow the DOM to update
            setTimeout(async () => {
                const el = await findEl(to.hash);

                if ("scrollBehavior" in document.documentElement.style) {
                    console.log("hash path hit scroll to");
                    window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
                } else {
                    window.scrollTo(0, el.offsetTop);
                }
            }, 0);
        }
        return { left: 0, top: 0, behaviour: "smooth" };
    };

})