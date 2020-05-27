import Vue from 'vue';
import VueRouter from 'vue-router';
import MainContent from '../components/MainContent.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'MainContent',
    component: MainContent,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
