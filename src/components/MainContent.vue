<template>
  <div class="" id="main-content">
    <navbar></navbar>
    <div class="row justify-content-md-center">
      <div class="col-lg-7 col-md-12 col-sm-12">
        <news></news>
      </div>

      <div class="col-lg-5 col-md-12 col-sm-12">
        <repositories></repositories>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import News from './News.vue';
import Repositories from './Repositories.vue';

export default {
  data() {
    return {};
  },
  components: {
    navbar: NavBar,
    news: News,
    repositories: Repositories,
  },
};
</script>

<style lang="css" scoped>
</style>
