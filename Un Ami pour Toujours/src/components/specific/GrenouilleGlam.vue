<template>
    <div id="app">
      <div class="game-area">
        <!-- Carré vert -->
        <div
          class="green-square"
          :style="{ top: greenTop + 'px', left: greenLeft + 'px' }"
        ></div>
  
        <!-- Carrés roses -->
        <div
          v-for="(square, index) in pinkSquares"
          :key="index"
          class="pink-square"
          :style="{ top: square.top + 'px', left: square.left + 'px' }"
          @mousedown="startDrag($event, index)"
        ></div>
  
        <!-- Étoiles -->
        <div
          v-for="(star, index) in stars"
          :key="'star' + index"
          class="star"
          :style="{ top: star.top + 'px', left: star.left + 'px' }"
        >⭐</div>
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
          this.pinkSquares[this.draggingIndex].left = event.clientX - this.offsetX;
          this.pinkSquares[this.draggingIndex].top = event.clientY - this.offsetY;
        }
      },
      stopDrag() {
        if (this.draggingIndex !== null) {
          // Vérifier si le carré est sur le carré vert
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
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
  }
  
  .game-area {
    width: 800px;
    height: 600px;
    border: 2px solid #333;
    margin: 20px auto;
    position: relative;
    background: #f0f0f0;
  }
  
  .green-square {
    width: 100px;
    height: 100px;
    background-color: green;
    position: absolute;
  }
  
  .pink-square {
    width: 50px;
    height: 50px;
    background-color: hotpink;
    position: absolute;
    cursor: grab;
  }
  
  .star {
    position: absolute;
    font-size: 30px;
    pointer-events: none;
  }
  </style>
  