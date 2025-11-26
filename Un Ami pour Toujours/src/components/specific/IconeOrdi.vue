<template>
  <div @click="show = true" class="divBtn">
    <button class='base-button'></button>
    <p class="txtBtn">Ordinateur</p>
  </div>


  <!-- Fenêtre Modale -->
  <div v-if="show" class="win98-overlay" @click.self="close">
    <div class="win98-window" :style="{ transform: `translate(${posX}px, ${posY}px)` }" ref="window">

      <!-- Barre ave titre -->
      <div class="win98-titlebar" @mousedown="startDrag">
        <span>Ordinateur</span>
        <button class="win98-close-btn" @click="close">X</button>
      </div>

      <!-- Contenu de la fenêtre -->
      <div class="win98-content">
        <p>tbd</p>

        <button class="win98-button" @click="close">
          OK
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  data() {
    return {
      show: false,
      isDragging: false,
      posX: 0,
      posY: 0,
      startX: 0,
      startY: 0
    };
  },
  methods: {
    close() {
      this.show = false;
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
}
</script>

<style scoped>
.base-button {
  background-image: url(../../assets/icone_ordi.png);
  background-repeat: no-repeat;
  background-size: 100px;
  width: 100px;
  height: 100px;
  background-color: transparent;
  border: 0;
}

.base-button:hover {
  background-color: #47735b;
  filter: grayscale(50%);
}

.base-button:hover+.txtBtn {
  color: black;
}

.txtBtn {
  font-family: 'Press Start 2P';
  font-size: 12px;
  text-align: center;
  color: white;
  margin: 0;
}

.txtBtn {
  text-align: center;
  color: white;
  margin: 0;
}

.divBtn {
  width: 100px;
}

.win98-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.win98-window {
  width: 320px;
  background: #C1CEBE;
  border: 2px solid #000;
  box-shadow: 4px 4px 0 #000;
  font-family: "MS Sans Serif", Tahoma, sans-serif;
}

.win98-titlebar {
  background: #384C3F;
  color: white;
  padding: 4px 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}

.win98-close-btn {
  width: 20px;
  height: 20px;
  background: #C1CEBE;
  border: 2px solid #fff;
  border-right-color: #404040;
  border-bottom-color: #404040;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  padding: 0;
}

.win98-content {
  padding: 14px;
  font-size: 14px;
}

.win98-button {
  background-color: #c0c0c0;
  border: 2px solid #fff;
  border-right-color: #808080;
  border-bottom-color: #808080;
  padding: 4px 12px;
  cursor: pointer;
  font-family: "MS Sans Serif";
  font-size: 14px;
  height: 40px;
}

.win98-button:hover {
  border: 2px solid #808080;
  border-right-color: #fff;
  border-bottom-color: #fff;
  background-color: #c0c0c0;
}

.win98-button:active {
  border: 2px solid #404040;
  border-right-color: #fff;
  border-bottom-color: #fff;
}
</style>