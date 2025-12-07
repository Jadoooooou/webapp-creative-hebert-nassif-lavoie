<template>
  <div class="win98-window">
    <div class="title-bar">
      <span>Festin de mouches</span>
      <div class="title-buttons">
        <button class="win98-close-btn" @click="close">X</button>
      </div>
    </div>

    <!-- Contenu principal de la fenêtre -->
    <div class="content">
      <div class="header-panel">
        <div>
          Pointage: <b>{{ score }}</b
          ><br />
          Précision: <b>{{ accuracy }}%</b>
        </div>

        <div>
          Temps: <b>{{ timeLeft }}</b>
        </div>

        <div>
          Meilleur pointage: <b>{{ highscore }}</b
          ><br />
          Meilleure précision: <b>{{ bestAccuracy }}%</b>
        </div>

        <button class="win98-button" @click="restart">Recommencer</button>
      </div>

      <!-- Contenu de la fenêtre -->
      <div class="game-area" @click="registerMiss">
        <!-- Mouches générées dynamiquement -->
        <div
          v-for="fly in flies"
          :key="fly.id"
          class="pink-square"
          :style="{ top: fly.y + 'px', left: fly.x + 'px' }"
          @click.stop="catchFly(fly.id)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PinkFlyGame",

  props: {
    close: { type: Function, required: true },
  },

  data() {
    return {
      // Liste des mouches à l'écran
      flies: [],
      // Pointage total
      score: 0,
      clicks: 0,
      hits: 0,
      misses: 0,
      accuracy: 0,
      bestAccuracy: 0,
      // Meilleurs scores enregistrés dans le localStorage
      highscore: 0,
      timeLeft: 30,
      running: true,

      gameWidth: 600,
      gameHeight: 350,
    };
  },

  methods: {
    makeFly() {
      const speed = 6;
      return {
        id: Math.random().toString(36).slice(2),
        x: Math.random() * (this.gameWidth - 50),
        y: Math.random() * (this.gameHeight - 50),
        dx: (Math.random() - 0.5) * speed,
        dy: (Math.random() - 0.5) * speed,
        lastChange: 0,
      };
    },

    spawnFlies() {
      this.flies = [this.makeFly(), this.makeFly(), this.makeFly()];
    },

    // Lorsque le joueur clique sur une mouche
    catchFly(id) {
      if (!this.running) return;

      this.score++;
      this.hits++;
      this.clicks++;
      this.updateAccuracy();

      this.flies = this.flies.filter((f) => f.id !== id);
      this.flies.push(this.makeFly());
    },

    // Lorsque le joueur clique dans le vide
    registerMiss() {
      if (!this.running) return;
      this.clicks++;
      this.misses++;
      this.updateAccuracy();
    },

    updateAccuracy() {
      this.accuracy = Math.round((this.hits / this.clicks) * 100) || 0;
    },

    moveFlies(time) {
      if (!this.running) return;

      this.flies.forEach((fly) => {
        if (time - fly.lastChange > 100 + Math.random() * 200) {
          fly.dx = (Math.random() - 0.5) * 6;
          fly.dy = (Math.random() - 0.5) * 6;
          fly.lastChange = time;
        }
        fly.x += fly.dx;
        fly.y += fly.dy;

        // Rebonds sur les murs
        if (fly.x < 0 || fly.x > this.gameWidth - 50) fly.dx *= -1;
        if (fly.y < 0 || fly.y > this.gameHeight - 50) fly.dy *= -1;
      });

      this.animationId = requestAnimationFrame((t) => this.moveFlies(t));
    },

    startTimer() {
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.endGame();
        }
      }, 1000);
    },

    endGame() {
      this.running = false;
      clearInterval(this.timer);

      // Update meilleur pointage
      if (this.score > this.highscore) {
        this.highscore = this.score;
        localStorage.setItem("flyHighscore", this.score);
      }

      // Update meilleure précision
      if (this.accuracy > this.bestAccuracy) {
        this.bestAccuracy = this.accuracy;
        localStorage.setItem("flyBestAccuracy", this.bestAccuracy);
      }
    },

    // Relance une partie
    restart() {
      this.running = true;

      cancelAnimationFrame(this.animationId);
      this.animationId = null;

      this.score = 0;
      this.hits = 0;
      this.clicks = 0;
      this.misses = 0;
      this.accuracy = 0;
      this.timeLeft = 30;

      this.spawnFlies();
      requestAnimationFrame((t) => this.moveFlies(t));

      // Redémarre le timer
      clearInterval(this.timer);
      this.startTimer();
    },
  },

  mounted() {
    if (window.innerWidth < 768) {
      this.gameWidth = 170;
      this.gameHeight = 300;
    }
    // Charge les scores enregistrés localement
    this.highscore = Number(localStorage.getItem("flyHighscore")) || 0;
    this.bestAccuracy = Number(localStorage.getItem("flyBestAccuracy")) || 0;
    this.restart();
  },

  beforeUnmount() {
    this.running = false;
    cancelAnimationFrame(this.animationId);
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
.win98-window {
  width: 620px;
  border: 2px solid #000;
  background: #c1cebe;
  font-family: "Microsoft Sans Serif", Tahoma, sans-serif;
  box-shadow: 2px 2px 0 #000;
}

.title-bar {
  background: #384c3f;
  color: white;
  padding: 3px 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}

.win98-close-btn {
  width: 20px;
  height: 20px;
  background: #c0c0c0;
  border: 2px solid #fff;
  border-right-color: #404040;
  border-bottom-color: #404040;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: 0;
  line-height: 14px;
}

.win98-close-btn:active {
  border: 2px solid #404040;
  border-right-color: #fff;
  border-bottom-color: #fff;
}

.content {
  padding: 6px;
  border: 2px solid #fff;
  border-right-color: #808080;
  border-bottom-color: #808080;
}

.header-panel {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  background: #c1cebe;
  padding: 4px;
  border: 2px solid #fff;
  border-right-color: #808080;
  border-bottom-color: #808080;
}

.win98-button {
  padding: 2px 8px;
  background: #c0c0c0;
  border: 2px solid #fff;
  border-right-color: #808080;
  border-bottom-color: #808080;
}

.win98-button:active {
  border: 2px solid #808080;
  border-right-color: #fff;
  border-bottom-color: #fff;
}

.game-area {
  position: relative;
  width: 600px;
  height: 350px;
  background: #c1cebe;
  border: 2px solid #808080;
  border-top-color: #fff;
  border-left-color: #fff;
  overflow: hidden;
}

.pink-square {
  position: absolute;
  width: 50px;
  height: 50px;
  background-image: url("/src/assets/fly.png");
  background-color: transparent;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: none;
}

.pink-square::before {
  content: "";
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  background: transparent;
  pointer-events: auto;
}

/* MOBILE */
@media (max-width: 767px) {

  .win98-window {
    width: 170px !important;
    min-width: 170px;
  }

  .title-bar span {
    font-size: 10px;
  }

  .content {
    padding: 2px;
  }

  /* Stack the header info vertically so it fits */
  .header-panel {
    flex-direction: column;
    gap: 2px;
    font-size: 10px;
    text-align: left;
    padding: 2px;
  }

  .header-panel > div {
    width: 100%;
  }

  .win98-button {
    width: 100%;
    padding: 2px;
    font-size: 10px;
  }

  /* Game area resized to fit the 170px width */
  .game-area {
    width: 100% !important;
    height: 300px !important;
  }

  /* Flies become much smaller */
  .pink-square {
    width: 30px;
    height: 30px;
    background-size: contain;
  }

  /* Adjust fly hitbox zone */
  .pink-square::before {
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
  }
}

</style>
