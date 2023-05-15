import { defineNuxtPlugin } from "#app";
import { nextTick } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {

    nuxtApp.$router.options.scrollBehavior = async (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition;
        }

        const findEl = async (hash, x = 0) => {
            return (
                document.querySelector(hash) ||
                new Promise((resolve,) => {
                    if (x > 0) {
                        return resolve(document.querySelector("#app"));
                    }
                    setTimeout(() => {
                        resolve(findEl(hash, 1));
                    }, 300);
                })
            );
        };

        if (to.hash) {
            await nextTick();
            try {
                const el = await findEl(to.hash);
                return el.scrollIntoView({ top: el.offsetTop, behavior: "smooth" });
            } catch (err) {
                console.error(err);
                // If the element wasn't found, scroll to the top of the page as a fallback.
                return { x: 0, y: 0 }
            }
        }
        return { left: 0, top: 0, behaviour: "smooth" };
    };
}
);

