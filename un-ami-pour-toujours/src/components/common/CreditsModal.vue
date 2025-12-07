<template>
    <div>
      <!-- Button to open -->
      <button @click="show = true" class="win98-button">
        Voir crédits
      </button>
  
      <!-- Modal -->
      <div v-if="show" class="win98-overlay" @click.self="close">
        <div class="win98-window">
  
          <!-- Title Bar -->
          <div class="win98-titlebar">
            <span>Credits</span>
            <button class="win98-close-btn" @click="close">X</button>
          </div>
  
          <!-- Window content -->
          <div class="win98-content">
            <p>Les assets Windows sont la création de <a href="https://alexmeub.com/old-windows-icons/">Alex Meub</a>.</p>
            <p>Et les assets de Germaine ainsi que ses accessoires sont de <a href="https://www.vecteezy.com/members/collaborapix">Collaborapix Studio</a>.</p>
  
            <button class="win98-button" @click="close">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CreditsModal",
    data() {
        return {
          show: false
        };
      },
      methods: {
        close() {
          this.show = false;
        }
      }
    };
  </script>
  
  <style scoped>
 
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
    background: #c0c0c0;
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
    font-family: 'Press Start 2P';
    font-size: 14px;
    height: 40px;
    margin-right: 40px;
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