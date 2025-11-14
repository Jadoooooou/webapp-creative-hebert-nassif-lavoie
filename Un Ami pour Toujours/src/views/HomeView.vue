<template>
  <div class="page">
    <h1>UN AMI POUR LA VIE</h1>
    <div class="line"></div>
    <h2>un jeu par Les Quenouilles</h2>
    <button @click="jouer" class="btnJouer">JOUER</button>
    <p>© 2025 Les Quenouilless</p>
  </div>
</template>
  
<script>
  export default {
    props: {},
    emits: [],
    methods: {
      jouer() {
        alert('jouer')
      }
    }
  }
</script>

<style scoped>
  .page {
    background-color: black;
    height: 100vh;
    text-align: center;
  }

  h1 {
    font-size: 100px;
    color: #384C3F;
    text-align: center;
    margin: 0;
    padding: 20vh;
    padding-bottom: 20px;
  }

  h2 {
    font-size: 50px;
    color: #384C3F;
    text-align: center;
    margin: 0;
    padding: 10vh;
  }

  .line {
    height: 8px;          
    background-color: #384C3F;  
    width: 70%;
    margin: 0 auto;
  }

  .btnJouer {
    width: 300px;
    height: 100px;
    background-color: transparent;
    border: #384C3F;
    border-style: solid;
    border-width: 8px;
    color: #384C3F;
    font-size: 40px;
  }

  p {
    color: #384C3F;
    font-size: 20px;
    position: fixed;   
    bottom: 0;          
    left: 0;
    width: 100%;
  }
</style>