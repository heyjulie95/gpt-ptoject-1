import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { getAuth, onAuthStateChanged } from "firebase/auth";



const app = createApp(App);


app.use(router);
app.use(store);

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  store.commit("setUser", user);

  // Запуск приложения после получения информации о пользователе
  if (!app._container) {
    app.mount("#app");
  }
});
