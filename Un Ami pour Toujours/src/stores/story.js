import { defineStore } from 'pinia';

export const useStoryStore = defineStore('story', {

  state: () => ({
    currentChapterId: null,     
    visitedChapters: [],         
    storyData: {},               
    availableChoices: [],       
    error: null,
    isLoading: false
  }),

  getters: {

    // Retourne l'objet chapitre courant
    currentChapter: (state) => {
      return state.storyData[state.currentChapterId] || null;
    },

    // Vérifie si un chapitre a déjà été débloqué
    isChapterUnlocked: (state) => (chapterId) => {
      return state.visitedChapters.includes(chapterId);
    }
  },

  actions: {

    // Charger un chapitre dans currentChapterId + ses choix
    loadChapter(chapterId) {
      if (!this.storyData[chapterId]) {
        this.error = `Chapitre ${chapterId} introuvable`;
        return;
      }

      this.currentChapterId = chapterId;

      // Marquer comme visité
      if (!this.visitedChapters.includes(chapterId)) {
        this.visitedChapters.push(chapterId);
      }

      // Mettre à jour les choix disponibles
      this.availableChoices = this.storyData[chapterId].choices || [];
    },

    // Action lorsqu’un choix est sélectionné
    makeChoice(choiceId) {
      const chapter = this.currentChapter;

      if (!chapter) return;

      const choice = chapter.choices?.find(c => c.id === choiceId);

      if (!choice) {
        this.error = `Choice ${choiceId} not found`;
        return;
      }

      // Aller au chapitre lié au choix
      this.goToChapter(choice.nextChapterId);
    },

    // Change simplement de chapitre
    goToChapter(chapterId) {
      if (!this.storyData[chapterId]) {
        this.error = `Chapitre ${chapterId} introuvable`;
        return;
      }
      this.loadChapter(chapterId);
    }
  }
});
