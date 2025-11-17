import { defineStore } from 'pinia'
import chapters from '../data/chapters.json' // JSON est importé

export const useStoryStore = defineStore('story', {
  state: () => ({
    storyData: chapters,        // JSON est chargé

    currentChapterId: null,     
    visitedChapters: [],         
    
    availableChoices: [],       
    error: null,
    isLoading: false
  }),

  getters: {
    currentChapter: (state) => {
      return state.storyData[state.currentChapterId] || null;
    },

    isChapterUnlocked: (state) => (chapterId) => {
      return state.visitedChapters.includes(chapterId);
    }
  },

  actions: {
    loadChapter(chapterId) {
      if (!this.storyData[chapterId]) {
        this.error = `Chapitre ${chapterId} introuvable`;
        return;
      }

      this.currentChapterId = chapterId;

      if (!this.visitedChapters.includes(chapterId)) {
        this.visitedChapters.push(chapterId);
      }

      this.availableChoices = this.storyData[chapterId].choices || [];
    },

    makeChoice(choiceId) {
      const chapter = this.currentChapter;

      if (!chapter) return;

      const choice = chapter.choices?.find(c => c.id === choiceId);

      if (!choice) {
        this.error = `Choice ${choiceId} not found`;
        return;
      }

      this.goToChapter(choice.nextChapterId);
    },

    goToChapter(chapterId) {
      if (!this.storyData[chapterId]) {
        this.error = `Chapitre ${chapterId} introuvable`;
        return;
      }
      this.loadChapter(chapterId);
    }
  }
});