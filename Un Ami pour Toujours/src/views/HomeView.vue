<template>   <!-- Stucture de la page -->
  <div class="page">
    <h1>UN AMI POUR LA VIE</h1>
    <div class="line"></div>
    <h2>Un jeu par : Les Quenouilles</h2>
    <button @click="jouer" class="btnJouer">JOUER</button>   <!-- Rendre le bouton cliquable -->
    <p>© 2025 Les Quenouilless</p>
  </div>
</template>
  
<script>
  export default {
    props: {},
    emits: [],
    methods: { // Fonction appelée quand on clique sur "JOUER" // Redirige vers le chapitre 1 grâce au router
      jouer() {
        this.$router.push(`/ChapterView/${1}`)
      }
    }
  }                                                
</script>

<!-- Style css de la page -->
<style scoped>
  .page {
    background-color: black;
    height: 100vh;
    text-align: center;
  }

  h1 {
    font-family: 'Press Start 2P';
    font-size: 15vw;
    color: #384C3F;
    text-align: center;
    margin: 0;
    padding: 15vw 5vw 10vh 5vw;
  }

  h2 {
    font-family: 'Press Start 2P';
    font-size: 5vw;
    color: #384C3F;
    text-align: center;
    margin: 0;
    padding: 5vw;
  }

  .line {
    height: 8px;          
    background-color: #384C3F;  
    width: 70%;
    margin: 0 auto;
  }

  .btnJouer {
    font-family: 'Press Start 2P';
    width: 300px;
    height: 100px;
    background-color: transparent;
    border: #384C3F;
    border-style: solid;
    border-width: 8px;
    color: #384C3F;
    font-size: 5vw;
    cursor: pointer;
  }

  .btnJouer:hover {
    background-color: #778A70;
  }

  p {
    font-family: 'Press Start 2P';
    color: #384C3F;
    background-color: black;
    font-size: 3vw;
    position: fixed;   
    bottom: 0;          
    left: 0;
    width: 100%;
  }

  @media (min-width: 768px) {
  h1 {
    font-size: 80px;         
    padding: 20vh 0 20px 0; 
  }

  h2 {
    font-size: 40px;        
    padding: 10vh 0;
  }

  .btnJouer {
    font-size: 40px;
    width: 300px;
    height: 100px;
  }

  p {
    font-size: 20px;
  }
}

/* --- LARGE DESKTOP --- */
@media (min-width: 1200px) {
  h1 {
    font-size: 95px;    
  }

  h2 {
    font-size: 48px;
  }

  .btnJouer {
    font-size: 45px;
    width: 340px;
    height: 110px;
  }
}
</style>