<template>
  <div id="main-content">
    <navbar></navbar>
    <div class="row mt-5">
      <div class="col-lg-3 col-md-12 col-sm-12">
        <h5 class="ml-5"><b>Currend data</b></h5>
        <current-exchange class="mt-5 ml-5"></current-exchange>
        <exchange-rates class="mt-5"></exchange-rates>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12">
        <news></news>
      </div>

      <div class="col-lg-3 col-md-12 col-sm-12">
        <repositories></repositories>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import News from './News.vue';
import Repositories from './Repositories.vue';
import CurrentExchange from './CurrentExchange.vue';
import ExchangeRates from './ExchangeRates.vue';

export default {
  data() {
    return {};
  },
  components: {
    navbar: NavBar,
    news: News,
    repositories: Repositories,
    currentExchange: CurrentExchange,
    exchangeRates: ExchangeRates,
  },
};
</script>

<style lang="css" scoped>
  #inner {
    width: 50%;
    margin: 0 auto;
  }
</style>
