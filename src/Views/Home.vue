<template>
  <div class="home">111</div>
</template>

<script setup></script>

<style scoped>
.home {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
    -45deg,
    var(--vp-c-brand-1) 30%,
    var(--vp-c-brand-next)
  );
  filter: blur(80px);
  opacity: 0.8;
  transition: opacity 1s ease;
}
</style>
