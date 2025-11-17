<template> <!-- Stucture de la page -->
  <div class="page">
    <div class="icone poubelle">
      <img class="img" src="../assets/icone_poubelle.png" alt="" />
      <p>Poubelle</p>
    </div>
    <div class="icone ordi">
      <img class="img" src="../assets/icone_ordi.png" alt="" />
      <p>Ordinateur</p>
    </div>
    <div class="icone doc">
      <img class="img" src="../assets/icone_fichier.png" alt="" />
      <p>Documents</p>
    </div>
  </div>
  <AppFooter />
</template>

<!-- Importer notre footer, pinia et story importé de la store pinia -->
<script>
import { mapStores } from "pinia";
import { useStoryStore } from "../stores/story";
import AppFooter from "../components/layout/AppFooter.vue";
export default {
  props: {},
  emits: [],
  components: {
    AppFooter, // Intégrer le footer
  },
  computed: {
    // Store accessible via l'objet 
    ...mapStores(useStoryStore),
  },
  data() { // Temporaire avant de faire le lien avec pinia
    return {
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
  }

};
</script>

<!-- Style css de la page -->
<style scoped>
.page {
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
}

p {
  color: white;
  margin: 0;
}
</style>
