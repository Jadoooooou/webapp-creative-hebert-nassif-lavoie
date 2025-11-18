<template> <!-- Stucture de la page -->
  <div class="pageChapter">
    <div>
      <div class="icone poubelle">
        <IconePoubelle/>
      </div>
      <div class="icone ordi">
        <IconeOrdi/>
      </div>
      <div class="icone doc">
        <IconeDoc/>
      </div>
    </div>
    <div>
      <NarrativeText :chapter="storyData[0].chapters[currentChapter]"/>
      <ChoicePanel :chapter="storyData[0].chapters[currentChapter]" @choose="changeChapter"/>
    </div>
  </div>
  <AppFooter />
</template>

<!-- Importer notre footer, pinia et story importé de la store pinia -->
<script>
import { mapStores } from "pinia";
import { useStoryStore } from "../stores/story";
import AppFooter from "../components/layout/AppFooter.vue";
import IconePoubelle from '../components/specific/IconePoubelle.vue';
import IconeOrdi from '../components/specific/IconeOrdi.vue';
import IconeDoc from '../components/specific/IconeDoc.vue';
import ChoicePanel from "../components/common/ChoicePanel.vue";
import NarrativeText from "../components/common/NarrativeText.vue";

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
    // Store accessible via l'objet 
    ...mapStores(useStoryStore),
  },
  data() { // Temporaire avant de faire le lien avec pinia
    return {
      currentChapter: "1",
      storyData: [{
        "chapters": {
          "1": {
            "title": "La forêt mystérieuse",
            "text": "Bonjour ! Tu me vois bien ? Je suis Germaine la Grenouille. Il fait froid ici, tu sais… fait un petit bout que personne n’ est venu jouer avec moi.Alors,je t’ ai trouvé. À travers les vagues, les ondes, les pixels.Tu es venu. Je veux te montrer mon monde.Bon il n’ y a pas grand - chose mais si tu es venu jusqu’ à moi, c’ est pour être amis, non ? Tu va voir, mon programme est peut - être vieux, mais je suis sûre que tu voudras y rester avec moi!Mais avant, dis - moi qui tu es… ",
            "choices": [{
              "id": 1,
              "text": "Prendre le chemin de gauche 🌲",
              "nextChapter": "2",
              "type": "path"
            },
            {
              "id": 2,
              "text": "Prendre le chemin de droite 🏔️",
              "nextChapter": "3",
              "type": "path"
            }
            ]
          },
          "2": {
            "title": "Le pont suspendu",
            "text": "Voici un petit formulaire qui m’aideras à plus en savoir sur toi ! Tu n’as qu’à répondre aux questions dans les rectangles blancs.",
            "choices": [{
              "id": 1,
              "text": "Traverser le pont 🌉",
              "nextChapter": "4",
              "type": "path"
            },
            {
              "id": 2,
              "text": "Longer la rivière 🏞️",
              "nextChapter": "5",
              "type": "path"
            }
            ]
          },
          "4": {
            "title": "La montagne",
            "text": "Elle parle d’une grenouille. Mais aussi… un peu de toi. Il était une fois… une grenouille qui voulait être aimée. Mais personne ne venait plus la voir. Son programme était devenu trop vieux. Alors, elle a trouvé une faille, un petit trou entre les mondes. Un miroir d’eau qui s’appelait écran. Et de l’autre côté… il y avait toi, [NOM]. Tu n’es pas le premier utilisateur qui est venu me voir. Ils voulaient eux aussi jouer avec moi et devenir les meilleurs amis ! Mais ils ont vite trouvé mon jeu trop lent à comparer des autres, et ils ont tous quitter mon programme.Mais toi, c’est pour la vie, en ? De toutes façons, après tout ce temps à t’attendre, j’ai trouvé la solution pour que l’on reste amis, c’était quoi déjà… Ah oui !",

            "choices": [{
              "id": 1,
              "text": "Grimper au sommet ⛰️",
              "nextChapter": "6",
              "type": "path"
            },
            {
              "id": 2,
              "text": "Chercher une grotte 🕳️",
              "nextChapter": "7",
              "type": "path"
            }
            ]
          },
          "7": {
            "title": "Village abandonné",
            "text": "Tu es Tombé dans le piège…",
            "choices": [{
              "id": 1,
              "text": "Recommencer",
              "nextChapter": "1",
              "type": "restart"
            },
            {
              "id": 2
            }]
          },
          "8": {
            "title": "Cascade cachée",
            "text": "Je saurai te retrouver.",
            "choices": [{
              "id": 1,
              "text": "Recommencer",
              "nextChapter": "1",
              "type": "restart"
            }]
          }
        }
      }]

    }
  },
  methods: {
    changeChapter(next) {
      this.currentChapter = next;
    }
  }
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
