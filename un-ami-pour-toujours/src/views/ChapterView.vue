<template>
  <div class="pageChapter">

    <!-- Blue Screen -->
    <transition name="fade">
      <BlueScreen v-if="showBlueScreen" class="blue-overlay"/>
    </transition>

    <!-- Terminal Screen -->
    <transition name="fade1">
      <Terminal v-if="showTerminal" class="terminal-overlay"/>
    </transition>

    <!-- Grenouille -->
    <Frog :key="storyStore.currentChapterId" :chapterId="storyStore.currentChapterId + 1"/>

    <!-- Icônes fixes -->
    <div>
      <div class="icone poubelle">
        <IconePoubelle />
      </div>
      <div class="icone ordi">
        <IconeOrdi />
      </div>
      <div class="icone doc">
        <IconeDoc />
      </div>
    </div>

    <!-- Texte narratif et choix -->
    <div>
      <NarrativeText class="chapter" :chapter="currentChapter" />

      <ChoicePanel
        @choose="changeChapter"
        :chapter="storyStore.storyData.chapters[storyStore.currentChapterId]"
      />
    </div>
  </div>

  <AppFooter />
</template>

<script>
import { computed } from "vue";
import { useStoryStore } from "../stores/story";
import { usePlayerStore } from "../stores/player";

import AppFooter from "../components/layout/AppFooter.vue";
import IconePoubelle from "../components/specific/IconePoubelle.vue";
import IconeOrdi from "../components/specific/IconeOrdi.vue";
import IconeDoc from "../components/specific/IconeDoc.vue";
import ChoicePanel from "../components/common/ChoicePanel.vue";
import NarrativeText from "../components/common/NarrativeText.vue";

import Frog from "../components/specific/Frog.vue";
import BlueScreen from "../components/specific/BlueScreen.vue";
import Terminal from "../components/specific/Terminal.vue";

import { ref } from "vue";

export default {
  name: "ChapterView",

  components: {
    NarrativeText,
    ChoicePanel,
    IconeDoc,
    IconeOrdi,
    IconePoubelle,
    AppFooter,
    Frog,
    BlueScreen,
    Terminal
  },

  setup() {
    const storyStore = useStoryStore();
    const playerStore = usePlayerStore();
    const showBlueScreen = ref(false);
    const showTerminal = ref(false);


    // Chapitre actuel pour simplifier l'accès
    const currentChapter = computed(() => {
      return storyStore.storyData.chapters[storyStore.currentChapterId];
    });

    // Fonction pour changer de chapitre et appliquer les effets
    const changeChapter = (choice) => {

      // Enregistrer le choix dans l’historique
      playerStore.addChoiceToHistory({
        chapterId: currentChapter.value.id,
        choiceText: choice.text
      });

      // Appliquer les effets d'amitié
      if (choice.effects) {
        for (const [stat, value] of Object.entries(choice.effects)) {
          playerStore.updateStat(stat, value); // Cumule le score
        }
      }

      // Si on quitte un mini-jeu → afficher BlueScreen avant le prochain chapitre
      if (currentChapter.value.id === 6 || currentChapter.value.id === 7) {
        showBlueScreen.value = true; 

        setTimeout(() => {
          showBlueScreen.value = false; // cacher après délai
          storyStore.currentChapterId = choice.nextChapter - 1; // passer au chapitre réel
        }, 2000); 

        return; 
      }

      // Quand on finit l'histoire → afficher Terminale avant le prochain chapitre
      if (currentChapter.value.id === 12) {
        showTerminal.value = true; 

        setTimeout(() => {
          showTerminal.value = false; // cacher après délai
          storyStore.currentChapterId = choice.nextChapter - 1; // passer au chapitre réel
        }, 2000); 

        return; 
      }

      // Passer au chapitre suivant
      storyStore.currentChapterId = choice.nextChapter - 1;
    };

    return {
      storyStore,
      playerStore,
      currentChapter,
      changeChapter,
      showBlueScreen,
      showTerminal
    };
  },
  mounted() {
    // 👇 Reset chapter every time the page is opened
    this.storyStore.currentChapterId = 0;
  }
};
</script>

<style scoped>
.pageChapter {
  background-color: #C4CDC1;
  height: 100vh;
}

.icone {
  padding: 10px;
  width: 100px;
  text-align: center;
  display: flex;
  position: absolute;
  z-index: 20;
}

.poubelle {
  top: 20px;
}
.ordi {
  top: 160px;
}
.doc {
  top: 300px;
}

p {
  color: white;
  margin: 0;
}

.chapter {
  line-height: 2; /* Espace vertical entre les lignes */
}

/* TABLET */
@media (min-width: 768px) {
}

/* MOBILE */
@media (max-width: 767px) {
  .poubelle {
    top: 20px;
  }
  .ordi {
    top: 100px;
  }
  .doc {
    top: 200px;
  }
}
</style>
