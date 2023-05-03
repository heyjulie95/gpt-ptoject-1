<!-- src/components/Blog.vue -->
<template>
  <div>
    <h1>Блог</h1>
    <!-- Компонент блога или список статей -->
    <Blog />
  </div>
</template>

<script>
import Blog from '../components/Blog.vue';

export default {
  components: {
    Blog,
  },
};
</script>

<style scoped>
/* Добавьте сюда стили для страницы Блог */
</style>
