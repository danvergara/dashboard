<template>
  <div>
    <b-navbar toggleable="lg" type="dark" id="navbar-personal">
      <b-navbar-brand href="/dashboard">
        <img alt="wp" src="../assets/bento.png" height="42" width="42">
        Wachtower project
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/jobs">Jobs</b-nav-item>
          <b-nav-item href="/weather">Weather</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>

              <em v-if="!$auth.isAuthenticated">User</em>
              <em v-if="$auth.isAuthenticated">{{ $auth.user.name }}</em>
            </template>
            <b-dropdown-item v-if="!$auth.isAuthenticated" @click="login">Log in</b-dropdown-item>
            <b-dropdown-item v-if="$auth.isAuthenticated" @click="logout">Log Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
};
</script>
<style media="screen">
  #navbar-personal {
    background-color: #454e9e;
  }
</style>
