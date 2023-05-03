<template>
    <div class="logout">
      <button @click="logout">Выйти</button>
    </div>
  </template>
  
  <script>
    import { getAuth, signOut } from 'firebase/auth';
    import { app, auth } from "../firebase.js";
  
  export default {
    methods: {
        async logout() {
        const auth = getAuth();
  
        try {
            await signOut(auth);
            this.$router.push("/login");
        } catch (error) {
            console.error("Ошибка выхода:", error);
        }
},
    },
  };
  </script>
  
  <style>
  /* Здесь добавьте свои стили */
  </style>
  