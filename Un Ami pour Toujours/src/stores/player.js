import { defineStore } from 'pinia';

export const usePlayerStore = defineStore('player', {

  state: () => ({
    playerName: '',       
    amitie: 0,          
    stats: {},           
    inventory: [],      
    flags: {},          
    relationships: {}     
  }),

  getters: {
    // Vérifie si un item est dans l'inventaire
    hasItem: (state) => (itemId) => {
      return state.inventory.some(item => item.id === itemId);
    },

    // Récupère la relation avec un personnage
    getRelationship: (state) => (npcId) => {
      return state.relationships[npcId] ?? 0;
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

    // Ajouter un item à l’inventaire
    addToInventory(item) {
      this.inventory.push(item);
    },

    // Modifier une stat (ex : force +1)
    updateStat(statName, value) {
      if (!this.stats[statName]) {
        this.stats[statName] = 0;
      }
      this.stats[statName] += value;
    },

    // Activer un flag (événement déclenché)
    setFlag(flagName, value = true) {
      this.flags[flagName] = value;
    },

    // Modifier une relation
    updateRelationship(npcId, amount) {
      if (!this.relationships[npcId]) {
        this.relationships[npcId] = 0;
      }
      this.relationships[npcId] += amount;
    }
  }
});
