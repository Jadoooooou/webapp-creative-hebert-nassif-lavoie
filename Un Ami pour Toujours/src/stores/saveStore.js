import { defineStore } from 'pinia';

export const useSaveStore = defineStore('save', {

  state: () => ({
    // Toujours 3 slots
    saveSlots: [
      null, // Slot 0
      null, // Slot 1
      null  // Slot 2
    ]
  }),

  getters: {

    // Y a-t-il au moins une sauvegarde ?
    hasSaves: (state) => {
      return state.saveSlots.some(slot => slot !== null);
    },

    // Renvoie la sauvegarde la plus récente
    latestSave: (state) => {
      const valid = state.saveSlots.filter(s => s !== null);
      if (valid.length === 0) return null;

      return valid.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
    }
  },

  actions: {

    /* Sauvegarde un jeu dans un slot */
    saveGame(slotIndex, data) {
      if (slotIndex < 0 || slotIndex > 2) return;

      this.saveSlots[slotIndex] = {
        ...data,
        date: new Date().toISOString()
      };

      this._persist();
    },

    /* Charger une sauvegarde */
    loadGame(slotIndex) {
      const slot = this.saveSlots[slotIndex];
      if (!slot) return null;
      return slot;
    },

    /* Supprimer une sauvegarde */
    deleteSave(slotIndex) {
      if (slotIndex < 0 || slotIndex > 2) return;

      this.saveSlots[slotIndex] = null;

      this._persist();
    },

    /* Retourner info minimale sur une save */
    getSaveInfo(slotIndex) {
      const slot = this.saveSlots[slotIndex];
      if (!slot) return null;

      return {
        date: slot.date,
        chapter: slot.currentChapterId,
        playerName: slot.playerName
      };
    },

    /* Sauvegarde automatique vers localStorage */
    _persist() {
      localStorage.setItem('saveSlots', JSON.stringify(this.saveSlots));
    },

    /* Charger les saves depuis localStorage au démarrage */
    loadFromStorage() {
      const saved = localStorage.getItem('saveSlots');
      if (saved) {
        this.saveSlots = JSON.parse(saved);
      }
    }
  }
});
