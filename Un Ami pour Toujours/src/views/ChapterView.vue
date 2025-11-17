<template>
  <div class="page">
    <div class="icone poubelle">
      <IconePoubelle/>
    </div>
    <div class="icone ordi">
      <IconeOrdi/>
    </div>
    <div class="icone doc">
      <IconeDoc/>
    </div>
  </div>
  <AppFooter/>
</template>
  
<script>
  import AppFooter from '../components/layout/AppFooter.vue'
  import IconePoubelle from '../components/specific/IconePoubelle.vue';
  import IconeOrdi from '../components/specific/IconeOrdi.vue';
  import IconeDoc from '../components/specific/IconeDoc.vue';

  export default {
    props: {},
    emits: [],
    components: {
      AppFooter,
      IconePoubelle,
      IconeOrdi,
      IconeDoc
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