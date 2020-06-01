<template>
  <div id="intro">
    <navbar></navbar>
    <div v-if="$auth.isAuthenticated">
      <b-alert show>You're logged in!</b-alert>
    </div>
    <img alt="bentobox" src="../assets/bento.png" height="300" width="300">
    <h1>Watchtower Project</h1>
    <p>A personal project created to centralized critical data from many sources</p>
     <b-button variant="success" size="lg" @click="login" v-if="!$auth.isAuthenticated">
       Log in
     </b-button>
     <div v-if="$auth.isAuthenticated">
       <b-button @click="goToDashboad" variant="info" size="lg">
         Go to dashboard
       </b-button>
     </div>
  </div>
</template>
<script>
import NavBar from './NavBar.vue';

export default {
  data() {
    return {};
  },
  components: {
    navbar: NavBar,
  },
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    goToDashboad() {
      this.$router.push({ path: '/dashboard' });
    },
  },
};
</script>
<style>
#intro {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 1.2em;
}
</style>
