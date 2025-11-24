import { defineStore } from 'pinia';

export const usePlayerStore = defineStore('player', {
  state: () => ({
    form: {
      name: '',
      age: '',
      city: '',
      friend: '',
      color: '',
      meal: '',
    },
    ami: 0, // score d'amitié
  }),

  actions: {
    saveFormData(data) {
      this.form = { ...data };
    },

    // Appliquer les effets du choix
    updateStat(statName, value) {
      if (statName === "ami") {
        this.ami += value;
      }
    },
  },
});
 