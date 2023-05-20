import { defineNuxtPlugin } from "#app";
import { nextTick } from 'vue';
import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
} from 'mathjs'

export default defineNuxtPlugin((nuxtApp) => {

    nuxtApp.$router.options.scrollBehavior = async (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition;
        }

        const findEl = async (hash: string, x = 0): Promise<Element> => {
            return (
                document.querySelector(hash) ||
                new Promise((resolve, reject) => {
                    if (x > 50) {
                        return reject('Failed to find the element');
                    }
                    setTimeout(() => {
                        resolve(findEl(hash, x + 1));
                    }, 100);
                })
            ) as Promise<Element>;
        };

        if (to.hash) {
            await nextTick();
            try {
                const el = await findEl(to.hash);
                // Here return the position instead of manipulating the scroll directly
                return { x: 0, y: el.getBoundingClientRect().top, behavior: 'smooth' };
            } catch (err) {
                console.error(err);
                // If the element wasn't found, scroll to the top of the page as a fallback.
                return { x: 0, y: 0 };
            }
        }
        return { x: 0, y: 0, behavior: 'smooth' };
    };
});

