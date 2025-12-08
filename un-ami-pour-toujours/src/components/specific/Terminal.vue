<template>
  <div class="cascade">
    <div
      v-for="(w, i) in windows"
      :key="i"
      class="window"
      :style="{
        transform: `translate(${i * 12}px, ${i * 12}px)`,
        opacity: i === windows.length - 1 ? 1 : 0.85,
        animationDelay: `${i * 80}ms`
      }"
    >
      <p class="text"> grant all access to the running program</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        windows: Array(8).fill(null) // ← nombre de fenêtres à empiler
      };
    }
  };
</script>  

<style scoped>
  .cascade {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 999;
  }
  
  .window {
    position: absolute;
    top: 320px;
    left: 200px;
    width: 550px;
    height: 250px;
    padding: 20px;
    background-color: black;
    border: 2px solid white;
    animation: pop 120ms ease-out forwards;
    opacity: 0;
  }
  
  .text {
    font-family: "Press Start 2P";
    color: white;
    font-size: 14px;
    line-height: 1.4;
  }
  
  /* Animation d’apparition */
  @keyframes pop {
    0% {
      transform: scale(0.9);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  /* MOBILE */
  @media (max-width: 767px) {
    .window {
      width: 170px;
      left: 50px; 
      top: 40px;
    }
  }
  </style>
  