<template>
  <div id="intro">
    <img alt="bentobox" src="../assets/bento.png" height="300" width="300">
    <h1>Watchtower Project</h1>
    <p>A personal project created to centralized critical data from many sources</p>
     <b-button variant="success" size="lg" @click="login">Log in</b-button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    login() {
      this.$auth.loginWithRedirect();
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
