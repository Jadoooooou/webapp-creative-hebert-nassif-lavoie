<template>
  <div class="pageChapter">
    <!-- <p>{{ bgColor }}</p> -->

    <!-- Grenouille -->
    <Frog :key="storyStore.currentChapterId" :position="currentChapter.frogPosition"/>

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
  },

  setup() {
    const storyStore = useStoryStore();
    const playerStore = usePlayerStore();

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

      // Passer au chapitre suivant
      storyStore.currentChapterId = choice.nextChapter - 1;
    };

    return {
      storyStore,
      playerStore,
      currentChapter,
      changeChapter,
    };
  }
};
</script>

<style scoped>
.pageChapter {
  background-color: #92a48d;
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
