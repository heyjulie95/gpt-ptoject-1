<template>
  <div class="login">
    <h1>Вход</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Войти</button>
    </form>

  </div>
</template>

<script>
import firebase from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",

    };
  },
  methods: {
   async login() {
  try {
    console.log("Попытка входа...");
    await signInWithEmailAndPassword( this.email, this.password);
    console.log("Успешный вход");
    this.$router.push("/admin");
  } catch (error) {
    console.error("Ошибка входа:", error);
  }
},
  },
};
</script>

<style>
/* Здесь добавьте свои стили */
</style>
