import {
  defineStore
} from 'pinia';

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
    ami: 0
  }),

  getters: {


  },

  actions: {

    saveFormData(data) {
      this.form = {
        ...data
      };
    },

    // Modifier l'amitié
    updateStat(statName, value) {
      if (statName === 'ami') {
        this.ami += value;
      }
    }
  }
});