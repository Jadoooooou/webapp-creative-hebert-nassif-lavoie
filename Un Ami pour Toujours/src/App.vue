<script setup>

// btn
import BaseButton from './components/common/BaseButton.vue'
const clickBtn = () => {
  alert('tu a clicker sur le bouton')
}
</script>

<template>
  <div>
    <BaseButton @click="clickBtn" label="test"></BaseButton>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
