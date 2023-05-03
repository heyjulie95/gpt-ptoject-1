<template>
    <div class="services">
      <div class="service" v-for="service in services" :key="service.id">
        <h2>{{ service.title }}</h2>
        <p>{{ service.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        services: [
          // Заполните вашими данными
          { id: 1, title: 'Услуга 1', description: 'Описание услуги 1' },
          { id: 2, title: 'Услуга 2', description: 'Описание услуги 2' },
          { id: 3, title: 'Услуга 3', description: 'Описание услуги 3' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .services {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .service {
    width: 30%;
    margin-bottom: 20px;
  }
  </style>
  