<template>
    <div class="divBtn">
      <button class='base-button'></button>
      <p class="txtBtn">{{ label }}</p>
    </div>
  </template>
  
  <script>
      export default {
        name: "BaseButton",
        props: {
          label: { type: String, default: "button" }
        }
      }
  </script>
  
  <style scoped>
  .base-button {
    background-image: url(../../assets/img_btn.png);
    background-repeat: no-repeat;
    background-size: 100px;
    width: 100px;
    height: 100px;
    background-color: transparent;
    border: 0;
  }
  
  .base-button:hover {
    background-color: #2563eb;
  }

  .txtBtn {
    font-size: 20px;
    margin-top: 0px;
    text-align: center;
  }
  
  .divBtn {
    width: 100px;
  }
  </style>