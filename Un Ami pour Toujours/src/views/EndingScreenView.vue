<template>
  <div class="page">
    <div>
      <div class="icone poubelle">
        <IconePoubelle />
      </div>
      <div class="icone ordi">
        <IconeOrdi />
      </div>
      <div class="icone doc">
        <IconeDoc />
      </div>
    </div>

    <div class="game">
      <GrenouilleGlam/>
      <FestinDeMouche/>
    </div>
  </div>

  <AppFooter />
</template>

<script>
import AppFooter from "../components/layout/AppFooter.vue";
import IconePoubelle from "../components/specific/IconePoubelle.vue";
import IconeOrdi from "../components/specific/IconeOrdi.vue";
import IconeDoc from "../components/specific/IconeDoc.vue";

// TES components spécifiques (je les garde)
import FestinDeMouche from "../components/specific/FestinDeMouche.vue";
import GrenouilleGlam from "../components/specific/GrenouilleGlam.vue";

// Le composant Stats que tu veux afficher
import StatsContent from "../components/specific/Stats.vue";

export default {
  components: {
    AppFooter,
    IconeDoc,
    IconeOrdi,
    IconePoubelle,
    FestinDeMouche,
    GrenouilleGlam,
    StatsContent,
  },
};
</script>

<style scoped>
.page {
  height: 100vh;
  background-color: #92a48d;
}

.icone {
  padding: 10px;
  width: 100px;
  text-align: center;
  display: flex;
  position: absolute;
  z-index: 20;
}

.poubelle {
  top: 20px;
}

.ordi {
  top: 160px;
}

.doc {
  top: 300px;
}

.game {
  margin-left: 200px;
}

p {
  color: white;
  margin: 0;
}
</style>
