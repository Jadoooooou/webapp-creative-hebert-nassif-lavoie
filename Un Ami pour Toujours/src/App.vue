<script>

export default{
  name: 'App', // Nom du composant racine de l'application
};

import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

export default {
  methods: {
    // Code du prof
    onEnter(el, done) {
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: 'power2.out',
      });

      //////////////  ANIMATION TYPEWRITER  //////////////
      const paragraph = el.querySelector('p');// on cherche le <p> dans la page

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

    onLeave(el, done) {
      gsap.to(el, {
        opacity: 0,
        y: -30,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: done
      });
    }
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
  <router-view />
</template>

<style scoped></style>