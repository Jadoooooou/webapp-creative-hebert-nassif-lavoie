<template>
  <div class="page"></div>
</template>

<script>
import { mapStores } from "pinia";
import { useStoryStore } from "../stores/story";

import IconePoubelle from "../components/specific/IconePoubelle.vue";
import IconeOrdi from "../components/specific/IconeOrdi.vue";
import IconeDoc from "../components/specific/IconeDoc.vue";
import ChoicePanel from "../components/common/ChoicePanel.vue";
import NarrativeText from "../components/common/NarrativeText.vue";
import AppFooter from "../components/layout/AppFooter.vue";

export default {
  props: {},
  emits: [],

  components: {
    AppFooter,
    IconePoubelle,
    IconeOrdi,
    IconeDoc,
    ChoicePanel,
    NarrativeText,
  },

  computed: {
    ...mapStores(useStoryStore),
  },

  data() {
    return {
      currentChapter: "6",

      storyData: [
        {
          chapters: {
            6: {
              title: "Fin num6",
              text: "",
              choices: [
                {
                  id: 1,
                  text: "Prendre le chemin de gauche 🌲",
                  nextChapter: "2",
                  type: "path",
                },
                {
                  id: 2,
                  text: "Prendre le chemin de droite 🏔️",
                  nextChapter: "3",
                  type: "path",
                },
              ],
            },

            7: {
              title: "Fin num7",
              text: "Tu es tombé dans le piège…",
              choices: [
                {
                  id: 1,
                  text: "Traverser le pont 🌉",
                  nextChapter: "4",
                  type: "path",
                },
                {
                  id: 2,
                  text: "Longer la rivière 🏞️",
                  nextChapter: "5",
                  type: "path",
                },
              ],
            },

            8: {
              title: "Fin num8",
              text: "Je saurai te retrouver.",
              choices: [
                {
                  id: 1,
                  text: "Traverser le pont 🌉",
                  nextChapter: "4",
                  type: "path",
                },
                {
                  id: 2,
                  text: "Longer la rivière 🏞️",
                  nextChapter: "5",
                  type: "path",
                },
              ],
            },
          },
        },
      ],
    };
  },

  methods: {
    changeChapter(next) {
      this.currentChapter = next;
    },
  },
};
</script>

<style scoped>
.page {
  height: 100vh;
  background-color: black;
}
</style>
