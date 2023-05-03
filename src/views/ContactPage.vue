<template>
    <div>
      <h1>Свяжитесь с нами</h1>
      <!-- Компонент контактной формы -->
      <ContactForm />
    </div>
  </template>
  
  <script>
  import ContactForm from '../components/ContactForm.vue';
  
  export default {
    components: {
      ContactForm,
    },
  };
  </script>
  
  <style scoped>
  /* Добавьте сюда стили для страницы Контакты */
  </style>
  