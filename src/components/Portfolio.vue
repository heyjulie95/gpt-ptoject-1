<template>
    <div class="portfolio">
      <div class="project" v-for="project in projects" :key="project.id">
        <img :src="project.image" :alt="project.title" />
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          // Заполните вашими данными
          { id: 1, title: 'Проект 1', description: 'Описание проекта 1', image: 'project1.jpg' },
          { id: 2, title: 'Проект 2', description: 'Описание проекта 2', image: 'project2.jpg' },
          { id: 3, title: 'Проект 3', description: 'Описание проекта 3', image: 'project3.jpg' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .portfolio {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .project {
    width: 30%;
    margin-bottom: 20px;
  }
  </style>
  