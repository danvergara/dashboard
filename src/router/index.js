import Vue from 'vue';
import VueRouter from 'vue-router';
import MainContent from '../components/MainContent.vue';
import Login from '../components/Login.vue';
import { authGuard } from '../auth/authGuard';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'MainContent',
    component: MainContent,
    beforeEnter: authGuard,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
