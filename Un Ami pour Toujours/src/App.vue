<script>
import { onMounted, nextTick, watch } from "vue";
import { useRoute } from "vue-router";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default {
  setup() {
    const route = useRoute();

    // 🔥 Fonction qui anime le texte
    const playTextAnimation = () => {
      nextTick(() => {
        const paragraph = document.querySelector(".narrative-text");
        if (!paragraph) return;

        const fullText = paragraph.textContent;
        paragraph.textContent = "";

        gsap.to(paragraph, {
          duration: fullText.length * 0.03,
          text: fullText,
          ease: "none",
        });
      });
    };

    // 🔥 1) Anime au premier chargement
    onMounted(() => {
      playTextAnimation();
    });

    // 🔥 2) Réanime quand l’ID du chapitre change
    watch(
      () => route.fullPath, // fullPath garantit 100% de réanimation
      () => {
        playTextAnimation();
      }
    );

    return {};
  }
};
</script>


<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/ChapterView/1">ChapterView</router-link>
      <router-link to="/EndingScreenView">EndingScreenView</router-link>
    </nav>
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
