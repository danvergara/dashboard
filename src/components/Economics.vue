<template lang="html">
  <div>
    <navbar></navbar>
    <h2 class="d-flex justify-content-center mt-4">Currency Exchange</h2>
    <b-container class="mt-5">
      <b-row align-v="center">
        <b-col>
          <current-exchange></current-exchange>
        </b-col>
        <b-col>
          <exchange-rates></exchange-rates>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import CurrentExchange from './CurrentExchange.vue';
import ExchangeRates from './ExchangeRates.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    navbar: NavBar,
    currentExchange: CurrentExchange,
    exchangeRates: ExchangeRates,
  },
};
</script>

<style lang="css" scoped>
</style>
