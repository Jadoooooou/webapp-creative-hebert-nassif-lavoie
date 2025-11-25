<template>
  <div class="win98-window">
    <div class="title-bar">
      <span>Grenouille Glam</span>
      <div class="title-buttons">
        <div class="btn"></div>
        <div class="btn"></div>
        <div class="btn"></div>
      </div>
    </div>

    <div class="content">
      <div class="header-panel">
        <div>Place the pink squares onto the green square.</div>
      </div>

      <div class="game-area">
        <!-- Green square -->
        <div
          class="green-square"
          :style="{ top: greenTop + 'px', left: greenLeft + 'px' }"
        ></div>

        <!-- Pink squares -->
        <div
          v-for="(square, index) in pinkSquares"
          :key="index"
          class="pink-square"
          :style="{ top: square.top + 'px', left: square.left + 'px' }"
          @mousedown="startDrag($event, index)"
        ></div>

        <!-- Stars -->
        <div
          v-for="(star, index) in stars"
          :key="'star' + index"
          class="star"
          :style="{ top: star.top + 'px', left: star.left + 'px' }"
        >
          ⭐
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
      pinkSquares: [
        { top: 50, left: 50 },
        { top: 50, left: 120 },
        { top: 50, left: 190 },
      ],
      draggingIndex: null,
      offsetX: 0,
      offsetY: 0,
      stars: [],
    };
  },
  methods: {
    startDrag(event, index) {
      this.draggingIndex = index;
      this.offsetX = event.clientX - this.pinkSquares[index].left;
      this.offsetY = event.clientY - this.pinkSquares[index].top;
      window.addEventListener("mousemove", this.onDrag);
      window.addEventListener("mouseup", this.stopDrag);
    },
    onDrag(event) {
      if (this.draggingIndex !== null) {
        this.pinkSquares[this.draggingIndex].left =
          event.clientX - this.offsetX;
        this.pinkSquares[this.draggingIndex].top =
          event.clientY - this.offsetY;
      }
    },
    stopDrag() {
      if (this.draggingIndex !== null) {
        const square = this.pinkSquares[this.draggingIndex];
        const withinX =
          square.left + 50 > this.greenLeft &&
          square.left < this.greenLeft + 100;
        const withinY =
          square.top + 50 > this.greenTop &&
          square.top < this.greenTop + 100;

        if (withinX && withinY) {
          this.showStars(this.greenLeft + 25, this.greenTop - 30);
        }

        this.draggingIndex = null;
        window.removeEventListener("mousemove", this.onDrag);
        window.removeEventListener("mouseup", this.stopDrag);
      }
    },
    showStars(x, y) {
      this.stars.push({ top: y, left: x });
      setTimeout(() => {
        this.stars.shift();
      }, 1000);
    },
  },
};
</script>

<style scoped>
/* --- Window shell --- */
.win98-window {
  width: 820px;
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
  width: 800px;
  height: 600px;
  background: #C1CEBE;
  border: 2px solid #808080;
  border-top-color: #fff;
  border-left-color: #fff;
  overflow: hidden;
}

/* --- Green square --- */
.green-square {
  width: 100px;
  height: 100px;
  background: #00AA00;
  position: absolute;
  border: 2px solid #000;
  box-shadow:
    inset -2px -2px 0 #FFFFFF,
    inset 2px 2px 0 #808080;
}

/* --- Pink draggable squares --- */
.pink-square {
  width: 50px;
  height: 50px;
  position: absolute;
  background: #FF66CC;

  border: 2px solid #000;
  box-shadow:
    inset -2px -2px 0 #FFFFFF,
    inset 2px 2px 0 #808080;

  cursor: grab;
}

.pink-square:active {
  cursor: grabbing;
  box-shadow:
    inset 2px 2px 0 #FFFFFF,
    inset -2px -2px 0 #808080;
}

/* --- Stars --- */
.star {
  position: absolute;
  font-size: 30px;
  pointer-events: none;
  text-shadow: 1px 1px #000;
}
</style>

