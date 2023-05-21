<script setup>
import 'animate.css';
import Index from './pages/index.vue'
</script>
<template>
  <Head>
    <Meta charset="UTF-8" />
    <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Meta name="description" content="Poppy is a community driven token on the Ethereum Network." />
    <Meta name="keywords"
      content="Poppy, Poppy Token, Poppy Coin, Poppy Crypto, Poppy Crypto Currency, Poppy Token Eth, " />
    <Meta name="author" content="Poppy Token" />
    <Meta name="robots" content="index, follow" />
    <Meta property="og:title" content="Poppy Token" />
    <Meta property="og:description" content="Poppy Token is a community driven token on Ethereum network." />
  </Head>
  <ClientOnly>
    <Particles class="position-absolute h-100 w-100" id="tsparticles" :options="options"
      :particles-init="particlesInit" />
    <Index />
  </ClientOnly>
</template>
<style>
#tsparticles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  z-index: -1;
}
</style>

<script>
import { loadFull } from "tsparticles";
export default {
  data() {
    return {
      options: {
        background: {
          color: {
            value: '#10181f'
          }
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.1,
              size: 20
            },
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: '#ffffff'
          },

          collisions: {
            enable: false
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: false,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 60
          },
          opacity: {
            value: 0.1
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: { min: 1, max: 5 },
          }
        },
        detectRetina: true


      },
    };
  },
  methods: {
    particlesInit: async (engine) => {
      await loadFull(engine);
    },
  },
};

</script>