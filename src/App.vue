<template>
  <div id="app">
    <nav class="nav">
      <div class="nav-container">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Главная</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/services">Услуги</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/portfolio">Портфолио</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/blog">Блог</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Контакты</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Вход</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

.nav {
  background-color: #222222;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-container {
  width: 70%;
  display: flex;
  justify-content: space-between;
}

.nav-list {
  display: flex;
  list-style: none;
}

.nav-item {
  margin-right: 5px;
}

.nav-link {
  color: #FFFFFF;
  font-size: 13px;
  padding: 10px 5px;
  text-decoration: none;
  transition: 0.35s;
}

.nav-link:hover {
  background: #3a54d6;
}
</style>