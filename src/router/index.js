import Vue from 'vue';
import VueRouter from 'vue-router';
import MainContent from '../components/MainContent.vue';
import Weather from '../components/Weather.vue';
import Economics from '../components/Economics.vue';
import Jobs from '../components/Jobs.vue';
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
  {
    path: '/weather',
    name: 'Weather',
    component: Weather,
    beforeEnter: authGuard,
  },
  {
    path: '/finances',
    name: 'Finances',
    component: Economics,
    beforeEnter: authGuard,
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
    beforeEnter: authGuard,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
