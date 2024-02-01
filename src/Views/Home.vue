<template>
  <div class="home">
    <LuckyWords />
  </div>
</template>

<script setup>
import LuckyWords from "../components/LuckyWords.vue"
import Star from "../components/Star.vue"

import { forceLandscape } from "../assets/js/forceLandscape.js"
import { flexible } from "../assets/js/flexiable.js"

forceLandscape()
flexible({
  pageWidth: 1334,
  pageHeight: 750,
  pageFontSize: 100,
  mode: "landscape" // 横屏模式
})
</script>

<style scoped>
/*.home {
  width: 100%;
  height: 100%;
  position: relative;
}*/
.home {
  width: 13.34rem;
  height: 7.5rem;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
/*.home::before {
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  background-image: linear-gradient(
    -45deg,
    var(--vp-c-brand-1) 30%,
    var(--vp-c-brand-next)
  );
  filter: blur(80px);
  opacity: 0.8;
  transition: opacity 1s ease;
}*/
</style>
