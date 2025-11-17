<script>
export default{
  name: 'App' // Nom du composant racine de l'application
};
</script>

<template>
  <header>
    <nav>
      <!-- LES LIENS DE NAVIGATION router-link -->
      <router-link to="/">Home</router-link>
      <router-link to="/ChapterView/1">ChapterView</router-link>
      <router-link to="/EndingScreenView">EndingScreenView</router-link>
    </nav>
  </header>

  <router-view />
</template>

<style scoped></style>