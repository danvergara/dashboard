<template>
  <div>
    <b-navbar toggleable="lg" type="dark" id="navbar-personal">
      <b-navbar-brand href="#">
        <img alt="wp" src="../assets/bento.png" height="42" width="42">
        Wachtower project
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav>
          <b-nav-item href="#">Economics</b-nav-item>
          <b-nav-item href="#">News</b-nav-item>
          <b-nav-item href="#">Weather</b-nav-item>
        </b-navbar-nav> -->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <main-content></main-content>
  </div>
</template>
<script>
import MainContent from './MainContent.vue';

export default {
  data() {
    return {};
  },
  components: {
    mainContent: MainContent,
  },
};
</script>
<style media="screen">
  #navbar-personal {
    background-color: #454e9e;
  }
</style>
