<template>
  <div class="win98-window">
    <div class="title-bar">
      <span>Formulaire Windows 98</span>
    </div>

    <div class="window-body">
      <form @submit.prevent="submitForm">

        <div class="form-row">
          <label>Ton nom :</label>
          <input v-model="form.name" type="text" />
        </div>

        <div class="form-row">
          <label>Ton âge :</label>
          <input v-model="form.age" type="number" min="0" @input="preventNegativeAge" />
        </div>

        <div class="form-row">
          <label>Ta ville :</label>
          <input v-model="form.city" type="text" />
        </div>

        <div class="form-row">
          <label>Le nom de ton meilleur amie :</label>
          <input v-model="form.friend" type="text" />
        </div>

        <div class="form-row">
          <label>Ta couleur préférée :</label>
          <input v-model="form.color" type="text" />
        </div>

        <div class="form-row">
          <label>Ton repas préféré :</label>
          <input v-model="form.meal" type="text" />
        </div>

        <button class="win98-button" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  </div>

</template>



<script>

import { usePlayerStore } from "/src/stores/player";
import { mapStores } from 'pinia';



export default {
  name: "Win98Form",

  data() {
    return {
      name: '',
      form: {
        name: "",
        age: null,
        city: "",
        friend: "",
        color: "",
        meal: ""
      }
    };
  },

  computed: {
    ...mapStores(usePlayerStore),
  },
  methods: {
    preventNegativeAge() {
      if (this.form.age < 0) {
        this.form.age = 0;
      }
    },
    submitForm() {
      this.playerStore.saveFormData(this.form);
      alert("Formulaire envoyé !\n" + JSON.stringify(this.form, null, 2));
    }

  }
};
</script>

<style scoped>
.win98-window {
  width: 350px;
  border: 2px solid #000;
  background: #C1CEBE;
  padding: 0;
  box-shadow: inset -1px -1px 0 #fff, inset 1px 1px 0 #000;
  font-family: "MS Sans Serif", sans-serif;
}

.title-bar {
  background-color: #384C3F;
  color: white;
  padding: 4px;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.window-body {
  padding: 10px;
}

.form-row {
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 3px;
  font-size: 13px;
}

input {
  border: 2px solid #808080;
  background: #fff;
  padding: 3px;
  font-size: 13px;
  box-shadow: inset -1px -1px 0 #fff, inset 1px 1px 0 #000;
}

.win98-button {
  margin-top: 10px;
  padding: 4px 10px;
  background: #C0C0C0;
  border: 2px solid #808080;
  cursor: pointer;
  font-size: 13px;
  box-shadow: inset -1px -1px 0 #fff, inset 1px 1px 0 #000;
}

.win98-button:active {
  box-shadow: inset 1px 1px 0 #000;
}
</style>