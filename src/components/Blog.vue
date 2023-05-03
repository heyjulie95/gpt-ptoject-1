<template>
  <div class="blog">
    <input
      type="text"
      v-model="searchQuery"
      @input="onSearchInput"
      placeholder="Поиск по названию статьи"
    />
    <div class="posts">
      <div v-for="post in filteredPosts" :key="post.id" class="post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["filteredPosts"]),
  },
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    ...mapActions(["setSearchQuery"]),
    onSearchInput() {
      this.setSearchQuery(this.searchQuery);
    },
  },
};
</script>
  
  <style scoped>
  
  </style>
  