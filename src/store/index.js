import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    post: {
      title: "",
      content: "",
    },
    posts: [
      { id: 1, title: "Post 1", content: "This is post 1" },
      { id: 2, title: "Post 2", content: "This is post 2" },
      // Добавьте свои посты здесь
    ],
    searchQuery: "",
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },

    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
    addPost(state, post) {
      state.posts.push(post);
    },
    setTitle(state, title) {
      state.title = title;
    },
    setContent(state, content) {
      state.content = content;
    },

    setUser(state, user) {
      state.user = user;
    },
  },

  actions: {
    setSearchQuery({ commit }, query) {
      commit("setSearchQuery", query);
    },
    addPost({ commit }, post) {
      commit("addPost", post);
    },
    setTitle({ commit }, title) {
      commit("setTitle", title);
    },
    setContent({ commit }, content) {
      commit("setContent", content);
    },
  },
  
  getters: {
    filteredPosts: (state) => {
      return state.posts.filter((post) =>
        post && post.title && post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
    isAuthenticated: (state) => {
      return !!state.user;
    },
  },
});
