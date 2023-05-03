import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ServicesPage from '../views/ServicesPage.vue';
import PortfolioPage from '../views/PortfolioPage.vue';
import BlogPage from '../views/BlogPage.vue';
import ContactPage from '../views/ContactPage.vue';
import Login from '../components/Login.vue'
import Logout from "../components/Logout.vue";
import Admin from "../components/Admin.vue";
import store from '@/store';
import firebase from "../firebase";






const routes = [
  { path: '/', component: Home },
  { path: '/services', component: ServicesPage },
  { path: '/portfolio', component: PortfolioPage },
  { path: '/blog', component: BlogPage },
  { path: '/contact', component: ContactPage },
  { path: "/login", component: Login },

  { 
    path: "/admin", 
    name: "Admin", 
    component: Admin, meta: {
    requiresAuth: true,
  },},

  { path: "/logout", name: "Logout", component: Logout  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = store.getters.isAuthenticated;
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});






export default router;
