<template>
  <div class="" id="main-content">
    <navbar></navbar>
    <div class="row justify-content-md-center" v-if="$auth.isAuthenticated">
      <div class="col-lg-5 col-md-12 col-sm-12">
        <news></news>
      </div>

      <div class="col-lg-7 col-md-12 col-sm-12">
        <economics></economics>
        <weather></weather>
      </div>
    </div>
    <default-view v-else></default-view>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import DefaultView from './DefaultView.vue';
import Economics from './Economics.vue';
import News from './News.vue';
import Weather from './Weather.vue';

export default {
  data() {
    return {};
  },
  components: {
    navbar: NavBar,
    defaultView: DefaultView,
    economics: Economics,
    news: News,
    weather: Weather,
  },
};
</script>

<style lang="css" scoped>
</style>
