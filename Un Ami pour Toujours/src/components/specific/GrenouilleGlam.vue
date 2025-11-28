<template>
  <div class="win98-window">
    <div class="title-bar">
      <span>Grenouille Glam</span>
      <div class="title-buttons">
        <button class="win98-close-btn" @click="close">X</button>
      </div>
    </div>

    <!-- Contenu principal de la fenêtre -->
    <div class="content">
      <div class="header-panel">
        <div>Rajoute moi du <i>glam</i> en glissant des chapeaux sur moi </div>
      </div>

      <!-- Contenu de la fenêtre -->
      <div class="game-area">
        <div class="frog" ref="frog"></div>

        <!-- Chapeaux -->
        <div
          v-for="(square, index) in chapeauxArr"
          :key="index"
          class="chapeaux"
          :style="{ top: square.top + 'px', left: square.left + 'px', backgroundImage: `url('src/assets/${square.img}')` }"
          @mousedown="startDrag($event, index)"
        ></div>

        <!-- Petite animation qui ressemble à des feux d'artifices -->
        <div
            v-for="(burst, bIndex) in bursts"
            :key="'burst' + bIndex"
            class="burst-container"
            :style="{ top: burst.top + 'px', left: burst.left + 'px' }"
          >
          <span
            v-for="n in 12"
            :key="n"
            class="burst-particle"
            :style="{ '--i': n }"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      greenTop: 400,
      greenLeft: 350,
      chapeauxArr: [
        { top: 50, left: 50, img: "/src/assets/hat_beach.png" },
        { top: 50, left: 120, img: "/src/assets/hat_party.png" },
        { top: 50, left: 190, img: "/src/assets/hat_fashion.png" },
      ],
      draggingIndex: null,
      offsetX: 0,
      offsetY: 0,
      bursts: [],
    };
  },
  mounted() {
    // Récupérer la postion de la grenouille
    this.updateFrogPosition();
  },
  methods: {
    // Récupérer la postion de la grenouille
    updateFrogPosition() {
      const box = this.$refs.frog.getBoundingClientRect();
      const game = this.$el.querySelector(".game-area").getBoundingClientRect();

      this.frogPos = {
        x: box.left - game.left,
        y: box.top - game.top,
        width: box.width,
        height: box.height
      };
    },
    // Possibilité de bouger librement les objets
    startDrag(event, index) {
      this.draggingIndex = index;
      this.offsetX = event.clientX - this.chapeauxArr[index].left;
      this.offsetY = event.clientY - this.chapeauxArr[index].top;
      window.addEventListener("mousemove", this.onDrag);
      window.addEventListener("mouseup", this.stopDrag);
    },
    onDrag(event) {
      if (this.draggingIndex !== null) {
        this.chapeauxArr[this.draggingIndex].left =
          event.clientX - this.offsetX;
        this.chapeauxArr[this.draggingIndex].top =
          event.clientY - this.offsetY;
      }
    },
    stopDrag() {
      if (this.draggingIndex !== null) {
        const hat = this.chapeauxArr[this.draggingIndex];
        // Position de la grenouille
        this.updateFrogPosition();
        const frog = this.frogPos;

        const overlap =
          hat.left < frog.x + frog.width &&
          hat.left + 100 > frog.x &&   // largeur du chapeau = 100px
          hat.top < frog.y + frog.height &&
          hat.top + 100 > frog.y;

        // Si le chapeaux est bien situé
        if (overlap) {
          this.showBurst(frog.x + frog.width / 2, frog.y - 20);
        }

        this.draggingIndex = null;
        window.removeEventListener("mousemove", this.onDrag);
        window.removeEventListener("mouseup", this.stopDrag);
      }
    },
    showBurst(x, y) {
      this.bursts.push({ top: y, left: x });

      // Enlever après l'animation
      setTimeout(() => {
        this.bursts.shift();
      }, 800);
    }
  },
};
</script>

<style scoped>
/* --- Window shell --- */
.win98-window {
  width: 620px;
  border: 2px solid #000;
  background: #C1CEBE;
  font-family: "Microsoft Sans Serif", Tahoma, sans-serif;
  box-shadow: 2px 2px 0 #000;
}

/* --- Title bar --- */
.title-bar {
  background: #384C3F;
  color: white;
  padding: 3px 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}

.title-buttons {
  display: flex;
  gap: 2px;
}

.title-buttons .btn {
  width: 16px;
  height: 16px;
  background: #c0c0c0;
  border: 2px solid #fff;
  border-right-color: #808080;
  border-bottom-color: #808080;
}

/* --- Main content box --- */
.content {
  padding: 6px;
  border: 2px solid #fff;
  border-right-color: #808080;
  border-bottom-color: #808080;
}

/* --- Header panel --- */
.header-panel {
  background: #C1CEBE;
  padding: 4px;
  margin-bottom: 6px;
  border: 2px solid #fff;
  border-right-color: #808080;
  border-bottom-color: #808080;
}

/* --- Game area --- */
.game-area {
  position: relative;
  width: 600px;
  height: 350px;
  background: #C1CEBE;
  border: 2px solid #808080;
  border-top-color: #fff;
  border-left-color: #fff;
  overflow: hidden;
}

/* --- Grenouille --- */
.frog {
  position: absolute;
  width: 150px;
  height: 150px;
  background-image: url("src/assets/frog.png");
  background-color: transparent;
  background-size: cover;
  background-position: center;
  transform: scaleX(-1);
  bottom: 10px;
  right: 100px;
}

/* --- Chapeaux --- */
.chapeaux {
  width: 100px;
  height: 100px;
  position: absolute;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: grab;
}

.chapeaux:active {
  cursor: grabbing;
  background-color: #47735b, 0%;
  filter: grayscale(50%);
  box-shadow:
    inset 2px 2px 0 #FFFFFF,
    inset -2px -2px 0 #808080;
}

/* Animation de feux d'artifices- */
.burst-container {
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
}

.burst-particle {
  position: absolute;
  width: 10px;
  height: 10px;
  background: radial-gradient(circle, #fff7c9, #f5ff64, #d29a00);
  border-radius: 50%;
  animation: burst 2s ease-out forwards;
  transform-origin: center;
}

/* Animation explosion des particules */
@keyframes burst {
  0% {
    transform: rotate(calc(var(--i) * 30deg)) translate(0px) scale(1);
    opacity: 1;
  }
  100% {
    transform: rotate(calc(var(--i) * 30deg)) translate(70px) scale(0);
    opacity: 0;
  }
}

</style>

