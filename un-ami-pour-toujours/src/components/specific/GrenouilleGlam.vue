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
        <!-- Grenouille -->
        <img
          class="frogGlam"
          src="/src/assets/frog.png"
          alt="Grenouille à décorer"
          ref="frog"
        />

        <!-- Chapeaux -->
        <img
          v-for="(square, index) in chapeauxArr"
          :key="index"
          class="chapeaux"
          :src="square.img"
          :alt="'Chapeau ' + (index + 1)"
          :style="{
            top: square.top + 'px',
            left: square.left + 'px'
          }"
          @mousedown="startDrag($event, index)"
          @touchstart.prevent="startDrag($event, index)"
        />

        <!-- Particules burst -->
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
  name: "GrenouilleGlam",
  data() {
    return {
      chapeauxArr: [
        { top: 0, left: 0, img: "/hat_beach.png" },
        { top: 0, left: 40, img: "/hat_party.png" },
        { top: 0, left: 90, img: "/hat_fashion.png" },
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
    window.addEventListener("resize", this.updateFrogPosition);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateFrogPosition);
  },
  methods: {
    close() {
      this.$emit("close");
    },

    updateFrogPosition() {
      const frogEl = this.$refs.frog;
      const gameEl = this.$el.querySelector(".game-area");

      if (!frogEl || !gameEl) return;

      const frogBox = frogEl.getBoundingClientRect();
      const gameBox = gameEl.getBoundingClientRect();

      this.frogPos = {
        x: frogBox.left - gameBox.left,
        y: frogBox.top - gameBox.top,
        width: frogBox.width,
        height: frogBox.height,
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

    stopDrag() {
      if (this.draggingIndex !== null) {
        const hat = this.chapeauxArr[this.draggingIndex];

        this.updateFrogPosition();
        const frog = this.frogPos;

        if (frog) {
          const hatSize = window.innerWidth < 767 ? 70 : 100;

          const overlap =
            hat.left < frog.x + frog.width &&
            hat.left + hatSize > frog.x &&
            hat.top < frog.y + frog.height &&
            hat.top + hatSize > frog.y;

          if (overlap) {
            this.showBurst(frog.x + frog.width / 2, frog.y - 20);
          }
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