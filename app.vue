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
    <Index />
  </ClientOnly>
</template>