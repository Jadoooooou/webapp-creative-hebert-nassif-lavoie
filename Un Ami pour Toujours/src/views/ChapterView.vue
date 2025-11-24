<template>
  <!-- Stucture de la page -->
  <div class="pageChapter">
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
    <div>
      <NarrativeText :chapter="storyStore.storyData.chapters[storyStore.currentChapterId]" />
      <ChoicePanel @choose="changeChapter" :chapter="storyStore.storyData.chapters[storyStore.currentChapterId]" />
    </div>
  </div>
  <AppFooter />
</template>

<!-- Importer notre footer, pinia et story importé de la store pinia -->
<script>
import { mapStores } from "pinia";
import { useStoryStore } from "../stores/story";
import { usePlayerStore } from "../stores/player";

import AppFooter from "../components/layout/AppFooter.vue";
import IconePoubelle from "../components/specific/IconePoubelle.vue";
import IconeOrdi from "../components/specific/IconeOrdi.vue";
import IconeDoc from "../components/specific/IconeDoc.vue";
import ChoicePanel from "../components/common/ChoicePanel.vue";
import NarrativeText from "../components/common/NarrativeText.vue";

export default {
  components: {
    NarrativeText,
    ChoicePanel,
    IconeDoc,
    IconeOrdi,
    IconePoubelle,
    AppFooter,
  },
  computed: {
    ...mapStores(useStoryStore, usePlayerStore),
  },

  methods: {
    changeChapter(choice) {

      // Appliquer les points d'amitiés s'il y en a
      if (choice.effects) {
        for (const [stat, value] of Object.entries(choice.effects)) {
          this.usePlayerStore.updateStat(stat, value);
        }
      }

      // Passer au prochain chapitre
      this.storyStore.currentChapterId = choice.nextChapter - 1;
    },
  },
};
</script>

<!-- Style css de la page -->
<style scoped>
.pageChapter {
  background-color: #92a48d;
  height: 100vh;
}

.img {
  width: 100px;
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
</style>
