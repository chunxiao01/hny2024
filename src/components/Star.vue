<script setup></script>

<template>
  <div class="star-container">
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
  </div>
</template>
<style scoped>
.star-container {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transform: translate(0, 0) rotate(45deg) skewX(0) skewY(0) scaleX(1) scaleY(1);
}
.star {
  position: absolute;
  flex: 1;
  height: 0.125rem;
  background: linear-gradient(-45deg, #e06458, #00f0);
  border-radius: 62rem;
  filter: drop-shadow(0 0 0.375rem #e06458);
  animation: tail 10s ease-in-out infinite, shooting 10s ease-in-out infinite;
}
.star::before,
.star::after {
  content: "";
  position: absolute;
  right: 0;
  height: 0.125rem;
  background: linear-gradient(-45deg, #00f0, #e06458, #00f0);
  transform: translateX(50%) rotate(45deg);
  border-radius: 100%;
  animation: shining 10s ease-in-out infinite;
}
.star::after {
  transform: translateX(50%) rotate(-45deg);
}
.star:first-child,
.star:first-child:after,
.star:first-child:before {
  animation-delay: 1s;
}
.star:first-child {
  top: calc(50% - 6rem);
  left: calc(20% - 10rem);
}
.star:nth-child(2),
.star:nth-child(2):after,
.starr:nth-child(2):before {
  animation-delay: 3s;
}
.star:nth-child(2) {
  top: calc(50% - 2rem);
  left: calc(20% - 4rem);
}
.star:nth-child(2),
.star:nth-child(2):after,
.star:nth-child(2):before {
  animation-delay: 3s;
}

.star:nth-child(3) {
  top: calc(50% - 8rem);
  left: calc(20% - 12rem);
}
.star:nth-child(3),
.star:nth-child(3):after,
.star:nth-child(3):before {
  animation-delay: 5s;
}
.star:nth-child(3),
.star:nth-child(3):after,
.star:nth-child(3):before {
  animation-delay: 5s;
}

.star:nth-child(4),
.star:nth-child(4):after,
.star:nth-child(4):before {
  animation-delay: 7s;
}

.star:nth-child(4) {
  top: calc(50% - 1rem);
  left: calc(20% - 15rem);
}
.star:nth-child(4),
.star:nth-child(4):after,
.star:nth-child(4):before {
  animation-delay: 7s;
}

@keyframes tail {
  0% {
    width: 0;
  }
  20% {
    width: 6.25rem;
  }
  60% {
    width: 0;
  }
  100% {
    width: 0;
  }
}

@keyframes shining {
  0% {
    width: 0;
  }
  30% {
    width: 1.875rem;
  }
  60% {
    width: 0;
  }
  100% {
    width: 0;
  }
}
</style>
