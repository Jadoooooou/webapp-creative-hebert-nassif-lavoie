<template>
  <div class="window">
    <div class="title-bar">
      <span>Données du joueur</span>
      <button @click="closeWindow">X</button>
    </div>
    <div class="content">
      <!-- Icône selon score -->
      <div id="icon-area" class="skull" alt="tete de mort">{{ displayIcon }}</div>

      <!-- Barre de progression -->
      <div class="progress-container">
        <div class="progress-bar" :style="{ width: progressWidth }"></div>
      </div>

      <!-- Score textuel -->
      <p class="score-text">Score d'amitié : {{ playerStore.ami }}</p>

      <!-- Historique des choix -->
      <div class="history">
        <h3>Tes choix :</h3>
        <ul>
          <li v-for="(line, index) in filteredHistory" :key="index">
            {{ line }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { usePlayerStore } from "/src/stores/player";

export default {
  name: "StatsContent",
  setup() {
    const playerStore = usePlayerStore();

    // Progression proportionnelle au score d'amitié
    const progressWidth = computed(() => {
      const ami = playerStore.ami;
      if (ami <= 0) return "0%";
      if (ami === 1) return "33%";
      if (ami === 2) return "66%";
      if (ami >= 3) return "100%";
      return "0%";
    });

    // Icône réactive selon score
    const displayIcon = computed(() => {
      if (playerStore.ami <= 0) return "💀";
      if (playerStore.ami >= 3) return "AMI";
      return "";
    });

    // Historique filtré pour montrer seulement les chapitres voulu
    const filteredHistory = computed(() => {
      return playerStore.history
        .filter(entry => entry.chapterId === 4 || entry.chapterId === 5)
        .map(entry => {
          if (entry.chapterId === 4) {
            return "Tu as complété mon formulaire de données.";
          }

          if (entry.chapterId === 5) {
            return `Tu as choisi : ${entry.choiceText}`;
          }
        });
    });

    const closeWindow = () => {
      alert("Fenêtre fermée !");
    };

    return { playerStore, progressWidth, displayIcon, filteredHistory, closeWindow };
  },
};
</script>

<style scoped>
.window {
  width: 300px;
  border: 2px solid #000;
  box-shadow: 2px 2px 0 #fff, 4px 4px 0 #808080;
  background-color: #C1CEBE;
  font-family: "Tahoma", sans-serif;
}

.title-bar {
  background: #384c3f;
  color: white;
  padding: 2px 5px;
  font-weight: bold;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
}

.title-bar button {
  background: #c0c0c0;
  border: 1px solid #fff;
  font-weight: bold;
  width: 20px;
  height: 18px;
  cursor: pointer;
}

.content {
  padding: 10px;
  text-align: center;
}

.progress-container {
  width: 100%;
  height: 20px;
  border: 2px inset #fff;
  margin-top: 10px;
  position: relative;
  background-color: #808080;
}

.progress-bar {
  height: 100%;
  background-color: #384C3F;
  text-align: center;
  color: white;
  line-height: 20px;
  font-weight: bold;
}

.skull {
  font-size: 20px;
  color: white;
}

.score-text {
  margin-top: 10px;
  color: white;
  font-weight: bold;
  color: #384C3F;
}

.history {
  text-align: left;
}

/* MOBILE */
@media (max-width: 767px) {
  .window {
  width: 170px;
}
}
</style>
