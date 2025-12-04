<template>
  <div class="page">
    <h1 class="anim-title">UN AMI POUR LA VIE</h1>

    <div class="line"></div>

    <h2 class="anim-subtitle">Un jeu par : Les Quenouilles</h2>

    <button @click="jouer" class="btnJouer" alt="jouer">JOUER</button>

    <p class="anim-footer">© 2025 Les Quenouilless</p>
  </div>
</template>

<script>
import { onMounted, nextTick } from "vue";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default {
  methods: {
    jouer() {
      this.$router.push(`/ChapterView/1`);
    },
  },

  setup() {
    const animateTexts = async () => {
      await nextTick();

      const title = document.querySelector(".anim-title");
      const subtitle = document.querySelector(".anim-subtitle");
      const footer = document.querySelector(".anim-footer");

      if (!title || !subtitle || !footer) return;

      // Sauvegarde des textes originaux
      const text1 = title.textContent;
      const text2 = subtitle.textContent;
      const text3 = footer.textContent;

      // Efface avant animation
      title.textContent = "";
      subtitle.textContent = "";
      footer.textContent = "";

      // Timeline pour enchaîner les animations
      const tl = gsap.timeline();

      tl.to(title, {
        duration: text1.length * 0.03,
        text: text1,
        ease: "none",
      })
        .to(subtitle, {
          duration: text2.length * 0.03,
          text: text2,
          ease: "none",
        })
        .to(footer, {
          duration: text3.length * 0.03,
          text: text3,
          ease: "none",
        });
    };

    onMounted(animateTexts);
  },
};
</script>

<style scoped>
.page {
  background-color: black;
  height: 100vh;
  text-align: center;
}

h1 {
  font-family: 'Press Start 2P';
  font-size: 15vw;
  color: #384C3F;
  margin: 0;
  padding: 15vw 5vw 10vh 5vw;
}

h2 {
  font-family: 'Press Start 2P';
  font-size: 5vw;
  color: #384C3F;
  margin: 0;
  padding: 5vw;
  line-height: 2;
}

.line {
  height: 8px;
  background-color: #384C3F;
  width: 70%;
  margin: 0 auto;
}

.btnJouer {
  font-family: 'Press Start 2P';
  width: 300px;
  height: 100px;
  background-color: transparent;
  border: 8px solid #384C3F;
  color: #384C3F;
  font-size: 5vw;
  cursor: pointer;
}

.btnJouer:hover {
  background-color: #778A70;
}

p {
  font-family: 'Press Start 2P';
  color: #384C3F;
  background-color: black;
  font-size: 3vw;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%; 
}

/* TABLET */
@media (min-width: 768px) {
  h1 {
    font-size: 80px;
    padding: 20vh 0 20px 0;
  }

  h2 {
    font-size: 40px;
    padding: 10vh 0;
  }

  .btnJouer {
    font-size: 40px;
    width: 300px;
    height: 100px;
  }

  p {
    font-size: 20px;
  }
}


</style>
