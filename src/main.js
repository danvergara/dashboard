import 'bootstrap/dist/css/bootstrap.css';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import PerfectScrollbar from 'vue2-perfect-scrollbar';
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { Auth0Plugin } from './auth';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(PerfectScrollbar);

Vue.config.productionTip = false;


const domain = process.env.VUE_APP_DOMAIN;
const clientId = process.env.VUE_APP_CLIENT_ID;
const audience = process.env.VUE_APP_AUTH0_API_IDENTIFIER;

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname,
    );
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
