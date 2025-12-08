<template>
  <img
    class="frog"
    :src="currentFrame"
    :class="'frog-chapter-' + chapterId"
    alt="Grenouille"
  />
</template>

<script>
import frogOpen from "../../assets/frog.png";
import frogBlink from "../../assets/frog_blink.png";

export default {
  name: "Frog",

  props: {
    chapterId: { type: Number, required: true },
    talking: { type: Boolean, default: false },
  },

  data() {
    return {
      currentFrame: frogOpen,
      blinkInterval: null,
    };
  },

  mounted() {
    this.startBlinking();
  },

  methods: {
    /* Cliquement (automatique)*/
    startBlinking() {
      this.blinkInterval = setInterval(() => {
        this.currentFrame = frogBlink;
        setTimeout(() => {
          this.currentFrame = frogOpen;
        }, 120);
      }, 2500 + Math.random() * 2500);
    },
  },

  beforeUnmount() {
    clearInterval(this.blinkInterval);
  },
};
</script>

<style src="../../assets/styles/frog.css"></style>
