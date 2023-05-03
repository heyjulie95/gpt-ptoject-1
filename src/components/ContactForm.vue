<template>
    <div class="contact-form">
      <form @submit.prevent="submitForm">
        <label for="name">Имя:</label>
        <input id="name" v-model="form.name" type="text" required />
  
        <label for="email">Email:</label>
        <input id="email" v-model="form.email" type="email" required />
  
        <label for="message">Сообщение:</label>
        <textarea id="message" v-model="form.message" required></textarea>
  
        <button type="submit">Отправить</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: '',
        },
      };
    },
    methods: {
      submitForm() {
        // Здесь должна быть логика отправки формы, например, через API
        console.log('Форма отправлена:', this.form);
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-top: 10px;
  }
  
  input,
  textarea {
    margin-top: 5px;
  }
  
  button {
    margin-top: 10px;
  }
  </style>
  