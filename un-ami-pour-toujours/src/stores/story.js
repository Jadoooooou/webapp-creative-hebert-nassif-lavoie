import { defineStore } from "pinia";
import chapters from "../data/chapters.json"; // On importe le fichier JSON contenant toute l’histoire

// Définition du store "story"
export const useStoryStore = defineStore("story", {
  state: () => ({
    storyData: chapters, // Toute l’histoire est chargée depuis le JSON

    currentChapterId: 0, // Chapitre actuellement affiché
    visitedChapters: [], // Liste des chapitres déjà visités

    availableChoices: [], // Choix disponibles du chapitre en cours
    error: null, // Message d’erreur si un chapitre n’existe pas
    isLoading: false, // Peut servir si tu veux ajouter un loading plus tard
  }),

  // Ajout d'une persistance
  persist: true,

  getters: {
    // Retourne le chapitre complet basé sur currentChapterId
    // Si l’ID n’existe pas → retourne null (évite les erreurs)
    currentChapter: (state) => {
      return state.storyData[state.currentChapterId] || null;
    },

    // Vérifie si un chapitre donné est déjà visité
    isChapterUnlocked: (state) => (chapterId) => {
      return state.visitedChapters.includes(chapterId);
    },
  },

  actions: {
    // Charger un chapitre
    loadChapter(chapterId) {
      // Si le chapitre n’existe pas = erreur
      if (!this.storyData[chapterId]) {
        this.error = `Chapitre ${chapterId} introuvable`;
        return;
      }

      // On met à jour l’ID du chapitre
      this.currentChapterId = chapterId;

      // On ajoute ce chapitre dans la liste des chapitres visités
      if (!this.visitedChapters.includes(chapterId)) {
        this.visitedChapters.push(chapterId);
      }

      // On met à jour les choix disponibles
      this.availableChoices = this.storyData[chapterId].choices || [];
    },

    makeChoice(choiceId) {
      // Quand l’utilisateur clique sur un choix
      const chapter = this.currentChapter;

      // Si pas de chapitre chargé = on arrête
      if (!chapter) return;

      // On cherche le choix choisi par l’utilisateur
      const choice = chapter.choices?.find((c) => c.id === choiceId);

      // Si le choix n’existe pas = erreur
      if (!choice) {
        this.error = `Choice ${choiceId} not found`;
        return;
      }

      // On va au prochain chapitre défini dans le choix
      this.goToChapter(choice.nextChapterId);
    },

    goToChapter(chapterId) {
      // Vérification de l’existence du chapitre
      if (!this.storyData[chapterId]) {
        this.error = `Chapitre ${chapterId} introuvable`;
        return;
      }
      this.loadChapter(chapterId); // On charge le chapitre
    },
  },
});
