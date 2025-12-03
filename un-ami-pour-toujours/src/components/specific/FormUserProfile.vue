<template>
  <div class="win98-window" :style="{ transform: `translate(${posX}px, ${posY}px)` }" ref="window">
    <div class="title-bar" @mousedown="startDrag">
      <span>Formulaire Windows 98</span>
    </div>

    <!-- Formulaire -->
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

        <button class="win98-button" type="submit" :disabled="!isFormComplete">
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
      },
      isDragging: false,
      posX: 0,
      posY: 0,
      startX: 0,
      startY: 0
    };
  },

  computed: {
    ...mapStores(usePlayerStore),

    isFormComplete() {
      return (
        this.form.name.trim() !== "" &&
        this.form.age !== null &&
        this.form.age !== "" &&
        this.form.city.trim() !== "" &&
        this.form.friend.trim() !== "" &&
        this.form.color.trim() !== "" &&
        this.form.meal.trim() !== ""
      );
    }
  },

  methods: {
    preventNegativeAge() {
      if (this.form.age < 0) {
        this.form.age = 0;
      }
    },
    submitForm() {
      this.playerStore.saveFormData(this.form);
      this.$emit("formSubmitted");
      //alert("Formulaire envoyé !\n" + JSON.stringify(this.form, null, 2));
    },
    // Pour rendre la fenêtre draggable
    startDrag(e) {
      this.isDragging = true;

      this.startX = e.clientX - this.posX;
      this.startY = e.clientY - this.posY;

      window.addEventListener("mousemove", this.onDrag);
      window.addEventListener("mouseup", this.stopDrag);
    },

    onDrag(e) {
      if (!this.isDragging) return;

      this.posX = e.clientX - this.startX;
      this.posY = e.clientY - this.startY;
    },

    stopDrag() {
      this.isDragging = false;

      window.removeEventListener("mousemove", this.onDrag);
      window.removeEventListener("mouseup", this.stopDrag);
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
  background-color: #c0c0c0;
  border: 2px solid #fff;
  border-right-color: #808080;
  border-bottom-color: #808080;
  padding: 4px 12px;
  font-size: 14px;
  color: black;
  cursor: pointer;
  outline: none;
  width: 150px;
  height: 40px;
}

.win98-button:hover {
  border: 2px solid #808080;
  border-right-color: #fff;
  border-bottom-color: #fff;
  background-color: #c0c0c0;
}

.win98-button:active {
  box-shadow: inset 1px 1px 0 #000;
}

.win98-button:disabled {
  background-color: #b4b4b4;
  border-color: #7a7a7a;
  color: #666;
  cursor: not-allowed;
  box-shadow: none;
}

/* MOBILE */
@media (max-width: 767px) {
  .win98-window {
    width: 250px; 
    height: 350px;
  }

  .title-bar {
    padding: 3px;
    font-size: 12px;
  }

  .window-body {
    padding: 6px;
  }

  .form-row {
    margin-bottom: 6px;
  }

  label {
    font-size: 12px;
  }

  input {
    font-size: 12px;
    padding: 2px;
  }

  .win98-button {
    width: 120px;
    height: 32px;
    font-size: 12px;
    padding: 2px 8px;
  }
}

</style>