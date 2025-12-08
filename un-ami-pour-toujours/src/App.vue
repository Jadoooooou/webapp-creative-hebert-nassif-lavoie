<script>
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default {
  setup() {


    return {};
  }
};
</script>


<template>
  <header>
  </header>

  <!-- transition + key permet la réinitialisation du composant -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" :key="$route.fullPath" />
    </transition>
  </router-view>
</template>


<style scoped>
.fade-enter-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
</style>
