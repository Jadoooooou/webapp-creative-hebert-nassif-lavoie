import { createRouter, createWebHashHistory  } from "vue-router";
// On importe les vues principales de l'application
import HomeView from "../views/HomeView.vue";
import ChapterView from "../views/ChapterView.vue";

const routes = [
  {
    // Route de la page d’accueil
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    // Route pour un chapitre : "/ChapterView/3", "/ChapterView/12", etc.
    // Le ":id" signifie que c’est une *route dynamique*
    path: "/ChapterView/:id",
    name: "ChapterView",
    component: ChapterView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router; // On exporte le router pour l’utiliser dans main.js
