<template>
  <div class="lucky-words">
    <div class="lucky-word-contanier">
      <div class="lucky-word-text">新年快乐</div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.lucky-words {
  width: 100%;
  height: 100%;
}
.lucky-word-contanier {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* .lucky-word-text {
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  color: transparent;
  background: url("../assets/img/t1.jpg") no-repeat center center;
  background-size: cover;
  background-clip: text;
} */
.lucky-word-text {
  text-align: center;
  font-family: "an";
  font-size: 1em;
  font-weight: bold;
  background-image: linear-gradient(
    -45deg,
    var(--vp-c-brand-1) 30%,
    var(--vp-c-brand-next)
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: opacity 1s ease;
  background: linear-gradient(
      rgb(237, 207, 139) 50%,
      rgba(250, 231, 190, 0) 209.37%
    )
    text;
  -webkit-text-fill-color: transparent;
}
.back .couplets p:not(first-child) {
  background: linear-gradient(
      0deg,
      rgb(237, 207, 139) 50%,
      rgba(250, 231, 190, 0) 209.37%
    )
    text;
  -webkit-text-fill-color: transparent;
}
</style>
