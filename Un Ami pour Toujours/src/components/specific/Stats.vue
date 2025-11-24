<template>
    <div class="window">
      <div class="title-bar">
        <span>Progress Window</span>
        <button @click="closeWindow">X</button>
      </div>
      <div class="content">
        <div id="icon-area" class="skull">{{ displayIcon }}</div>
        <div class="progress-container">
          <div class="progress-bar" :style="{ width: progressWidth }"></div>
        </div>
        <button @click="advance">Advance</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Windows98Progress',
    data() {
      return {
        progress: 0
      }
    },
    computed: {
      progressWidth() {
        switch (this.progress) {
          case 0: return '0%';
          case 1: return '33%';
          case 2: return '66%';
          case 3: return '100%';
          default: return '0%';
        }
      },
      displayIcon() {
        if (this.progress === 0) return '💀';
        if (this.progress === 3) return 'AMI';
        return '';
      }
    },
    methods: {
      advance() {
        if (this.progress < 3) this.progress++;
      },
      closeWindow() {
        alert('Close button clicked!'); // you can replace with proper logic
      }
    }
  }
  </script>
  
  <style scoped>
  /* Windows 98 style */
  .window {
    width: 300px;
    border: 2px solid #000;
    box-shadow: 2px 2px 0 #fff, 4px 4px 0 #808080;
    background-color: #C1CEBE;
    font-family: 'Tahoma', sans-serif;
  }
  
  .title-bar {
    background: #384C3F;
    color: white;
    padding: 2px 5px;
    font-weight: bold;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
  
  .title-bar button {
    background: #c0c0c0;
    border: 1px solid #fff;
    font-weight: bold;
    width: 20px;
    height: 18px;
    cursor: pointer;
  }
  
  .content {
    padding: 10px;
    text-align: center;
  }
  
  .progress-container {
    width: 100%;
    height: 20px;
    border: 2px inset #fff;
    margin-top: 10px;
    position: relative;
    background-color: #808080;
  }
  
  .progress-bar {
    height: 100%;
    background-color: #384C3F;
    text-align: center;
    color: white;
    line-height: 20px;
    font-weight: bold;
  }
  
  .skull {
    font-size: 20px;
    color: white;
  }
  </style>
  