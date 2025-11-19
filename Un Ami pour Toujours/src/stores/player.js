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

   

    getFormData: (state) => {
      return state.form;
    },
    
     //////////////////// À REVOIR ////////////////////

    // Récupère la relation avec un personnage
    getRelationship: (state) => (npcId) => {
      //return state.relationships[npcId] ? ? 0;
    },

    // Détermine si certaines conditions permettent un ending
    canAccessEnding: (state) => (endingId) => {
      // Logique simple à modifier selon les endings
      // Exemple de base : karma + une relation
      if (endingId === 'good') {
        return state.karma > 50;
      }
      if (endingId === 'bad') {
        return state.karma < -30;
      }
      return false;
    }
  },

  actions: {

    setForm(data) {
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