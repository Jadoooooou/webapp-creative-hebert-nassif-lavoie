import { defineStore } from 'pinia';

export const useAudioStore = defineStore('audio', {

  state: () => ({
    currentMusic: null,        // nom / id de la musique en cours
    soundEffects: {},          // ex: { click: 'click.wav', hit: 'hit.mp3' }
    volume: 1,                 // 0 à 1
    isMuted: false             // mute global
  }),

  getters: {},

  actions: {

    /* Lecture d'une musique de fond */
    playMusic(musicId) {
      this.currentMusic = musicId;

      if (this.isMuted) return;

      // Exemple : système audio externe
      const audio = new Audio(musicId);
      audio.volume = this.volume;
      audio.loop = true;
      audio.play();

      this._currentAudioInstance = audio; // instance interne
    },

    /* Lecture d’un effet sonore */
    playSound(effectId) {
      const file = this.soundEffects[effectId];
      if (!file) return;

      if (this.isMuted) return;

      const audio = new Audio(file);
      audio.volume = this.volume;
      audio.play();
    },

    /* Activer / désactiver mute */
    toggleMute() {
      this.isMuted = !this.isMuted;

      if (this._currentAudioInstance) {
        this._currentAudioInstance.muted = this.isMuted;
      }
    },

    /* Modifier le volume global */
    setVolume(value) {
      this.volume = Math.min(1, Math.max(0, value)); // clamp 0–1

      if (this._currentAudioInstance) {
        this._currentAudioInstance.volume = this.volume;
      }
    }
  }
});
