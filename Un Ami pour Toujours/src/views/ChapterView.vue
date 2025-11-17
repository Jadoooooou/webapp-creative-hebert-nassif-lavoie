<template>
  <div class="page">
    <div class="icone poubelle">
      <img class="img" src="../assets/icone_poubelle.png" alt="">
      <p>Poubelle</p>
    </div>
    <div class="icone ordi">
      <img class="img" src="../assets/icone_ordi.png" alt="">
      <p>Ordinateur</p>
    </div>
    <div class="icone doc">
      <img class="img" src="../assets/icone_fichier.png" alt="">
      <p>Documents</p>
    </div>
  </div>
  <AppFooter/>
</template>
  
<script>
  import AppFooter from '../components/layout/AppFooter.vue'
  export default {
    props: {},
    emits: [],
    components: {
      AppFooter
    },
  }
</script>

<style scoped>
  .page {
    background-color: #92A48D;
    height: 100vh;
  }

  .img {
    width: 100px;
  }

  .icone {
    padding: 10px;
    width: 100px;
    text-align: center;
  }

  p {
    color: white;
    margin: 0;
  }
</style>