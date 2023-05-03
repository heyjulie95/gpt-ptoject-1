<template>
    <div class="admin">
      <h1>Админка</h1>
      <form @submit.prevent="addNewPost">
        <div>
          <label for="title">Заголовок:</label>
          <input type="text" id="title" v-model="title" @input="setTitle(title)" required />
        </div>
        <div>
          <label for="content">Содержание:</label>
          <textarea id="content" v-model="content" @input="setContent(content)" required></textarea>
        </div>
        <button type="submit">Добавить</button>
      </form>
      <logout></logout>
    </div>
  </template>
  
  <script>
  import { mapActions } from "vuex";
  import Logout from "./Logout.vue";
  
  export default {
    components: {
      Logout,
    },
    data() {
      return {
        title: "",
        content: "",
      };
    },
    methods: {
      ...mapActions(["addPost", "setTitle", "setContent"]),
      
      addNewPost() {
        
    const newPost = {
      id: Date.now(),
      title: this.title,
      content: this.content,
    };

    this.$store.commit('addPost', newPost);
    this.title = "";
    this.content = "";
  },
    },
  };
  </script>
  
  <style>
  /* Здесь добавьте свои стили */
  </style>