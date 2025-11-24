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
      <!--<FestinDeMouche/>-->
      <Stats/>
    </div>
  </div>
  <AppFooter />
</template>

<script>
  import AppFooter from "../components/layout/AppFooter.vue";
  import IconePoubelle from "../components/specific/IconePoubelle.vue";
  import IconeOrdi from "../components/specific/IconeOrdi.vue";
  import IconeDoc from "../components/specific/IconeDoc.vue";

  import FestinDeMouche from "../components/specific/FestinDeMouche.vue";
  import GrenouilleGlam from "../components/specific/GrenouilleGlam.vue";
  import Stats from "../components/specific/Stats.vue";

  export default {
    components: {
      AppFooter,
      IconeDoc,
      IconeOrdi,
      IconePoubelle,
      FestinDeMouche,
      GrenouilleGlam,
      Stats
    }
  }
</script>

<style scoped>
.page {
  height: 100vh;
  background-color: black;
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

p {
  color: white;
  margin: 0;
}

.game {
  margin-left: 200px;
}
</style>
