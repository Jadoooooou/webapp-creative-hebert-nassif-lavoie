<script>
export default{
  name: 'App'
};
</script>

<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/ChapterView/1">ChapterView</router-link>
      <router-link to="/EndingScreenView">EndingScreenView</router-link>
    </nav>
  </header>

  <router-view />
</template>

<style scoped></style>