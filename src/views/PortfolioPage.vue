<template>
    <div>
      <h1>Портфолио</h1>
      <!-- Компонент портфолио или список работ -->
      <Portfolio />
    </div>
  </template>
  
  <script>
  import Portfolio from '../components/Portfolio.vue';
  
  export default {
    components: {
      Portfolio,
    },
  };
  </script>
  
  <style scoped>
  /* Добавьте сюда стили для страницы Портфолио */
  </style>
  