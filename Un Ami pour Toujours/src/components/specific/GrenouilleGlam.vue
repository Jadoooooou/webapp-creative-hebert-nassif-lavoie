<template>
  <div class="win98-window">
    <div class="title-bar">
      <span>Grenouille Glam</span>
      <div class="title-buttons">
        <button class="win98-close-btn" @click="close">X</button>
      </div>
    </div>

    <div class="content">
      <div class="header-panel">
        <div>Rajoute moi du <i>glam</i> en glissant des chapeaux sur moi </div>
      </div>

      <div class="game-area">
        <div class="frogGlam" alt="frog" ref="frog"></div>

        <div
          v-for="(square, index) in chapeauxArr"
          :key="index"
          class="chapeaux"
          alt="chapeau"
          :style="{
            top: square.top + 'px',
            left: square.left + 'px',
            backgroundImage: `url('${square.img}')`
          }"
          @mousedown="startDrag($event, index)"
          @touchstart.prevent="startDrag($event, index)"
        ></div>

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
      chapeauxArr: [
        { top: 0, left: 0, img: "/hats/hat_beach.png" },
        { top: 0, left: 40, img: "/hats/hat_beach.png" },
        { top: 0, left: 90, img: "/hats/hat_beach.png" },
      ],
      draggingIndex: null,
      offsetX: 0,
      offsetY: 0,
      bursts: [],
      frogPos: null,
    };
  },
  mounted() {
    this.updateFrogPosition();
  },
  methods: {
    updateFrogPosition() {
      const frogBox = this.$refs.frogGlam.getBoundingClientRect();
      const gameBox = this.$el.querySelector(".game-area").getBoundingClientRect();

      this.frogPos = {
        x: frogBox.left - gameBox.left,
        y: frogBox.top - gameBox.top,
        width: frogBox.width,
        height: frogBox.height
      };
    },

    startDrag(event, index) {
      const e = event.touches ? event.touches[0] : event;

      this.draggingIndex = index;
      this.offsetX = e.clientX - this.chapeauxArr[index].left;
      this.offsetY = e.clientY - this.chapeauxArr[index].top;

      window.addEventListener("mousemove", this.onDrag);
      window.addEventListener("mouseup", this.stopDrag);

      window.addEventListener("touchmove", this.onDrag, { passive: false });
      window.addEventListener("touchend", this.stopDrag);
    },

    onDrag(event) {
      const e = event.touches ? event.touches[0] : event;

      if (this.draggingIndex !== null) {
        this.chapeauxArr[this.draggingIndex].left = e.clientX - this.offsetX;
        this.chapeauxArr[this.draggingIndex].top = e.clientY - this.offsetY;
      }

      if (event.cancelable) event.preventDefault();
    },

    stopDrag(event) {
      if (this.draggingIndex !== null) {
        const hat = this.chapeauxArr[this.draggingIndex];

        this.updateFrogPosition();
        const frog = this.frogPos;

        const hatSize = window.innerWidth < 767 ? 70 : 100;

        const overlap =
          hat.left < frog.x + frog.width &&
          hat.left + hatSize > frog.x &&
          hat.top < frog.y + frog.height &&
          hat.top + hatSize > frog.y;

        if (overlap) {
          this.showBurst(frog.x + frog.width / 2, frog.y - 20);
        }

        this.draggingIndex = null;
      }

      window.removeEventListener("mousemove", this.onDrag);
      window.removeEventListener("mouseup", this.stopDrag);
      window.removeEventListener("touchmove", this.onDrag);
      window.removeEventListener("touchend", this.stopDrag);
    },

    showBurst(x, y) {
      this.bursts.push({ top: y, left: x });
      setTimeout(() => this.bursts.shift(), 800);
    },
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

/* --- Box containers --- */
.content {
  padding: 6px;
  border: 2px solid #fff;
  border-right-color: #808080;
  border-bottom-color: #808080;
}

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
  touch-action: none; /* IMPORTANT */
}

/* --- Frog (non-touchable) --- */
.frogGlam {
  position: absolute;
  width: 150px;
  height: 150px;
  background-image: url("/src/assets/frog.png");
  background-color: transparent;
  background-size: cover;
  background-position: center;
  bottom: 10px;
  right: 100px;
  pointer-events: none; /* IMPORTANT FIX */
}

/* --- Hats (always on top) --- */
.chapeaux {
  position: absolute;
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: grab;
  z-index: 9999 !important; /* CRITICAL FIX */
  pointer-events: auto;
}

.chapeaux:active {
  cursor: grabbing;
}

/* --- Burst animation --- */
.burst-container {
  position: absolute;
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

/* --- Mobile version --- */
@media (max-width: 767px) {
  .win98-window {
    width: 100%;
  }

  .game-area {
    width: 100%;
    height: 250px;
  }

  .frogGlam {
    width: 100px;
    height: 100px;
    right: 20px;
    bottom: 5px;
  }

  .chapeaux {
    width: 70px;
    height: 70px;
  }
}

</style>