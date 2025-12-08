<template>
  <div class="window">
    <p class="text">Une erreur fatale s'est produite.<br><br>
      La tâche n'a pas été exécutée.<br><br>
      Vérifiez vos paramètres pare-feu.</p>
  </div>
</template>

<script>
import { computed } from "vue";
import { usePlayerStore } from "/src/stores/player";

export default {
};
</script>

<style scoped>

.window {
  background-color: blue;
}

.text {
  color: white;
}

/* MOBILE */
@media (max-width: 767px) {
  .window {
    width: 170px;
  }
}
</style>
