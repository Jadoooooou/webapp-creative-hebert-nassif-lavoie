<script>

import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

export default{
  name: 'App', // Nom du composant racine de l'application
  methods: {
    onEnter(el, done) {

      //////////////  ANIMATION TYPEWRITER  //////////////
      const paragraph = el.querySelector('.narrative-text');// on cherche le <p> dans la page

      if (paragraph) {
        const text = paragraph.textContent;
        paragraph.textContent = "";  // vide le texte pour commencer l’effet

        gsap.to(paragraph, {
          duration: text.length * 0.03,
          text: text,
          ease: "none",
          onComplete: done
        });

      } else {
        done();
      }
    },
  }
};


</script>

<template>
  <header>
    <nav>
      <!-- LES LIENS DE NAVIGATION router-link -->
      <router-link to="/">Home</router-link>
      <router-link to="/ChapterView/1">ChapterView</router-link>
      <router-link to="/EndingScreenView">EndingScreenView</router-link>
    </nav>
  </header>
  <router-view v-slot="{ Component }">
    <transition
      name="fade"
      @enter="onEnter"
    >
      <component :is="Component" :key="$route.path" />
    </transition>
  </router-view>

</template>

<style scoped></style>