<template lang="html">
  <div class="container mt-5">
    <h2 class="d-flex justify-content-center">Currency Exchange</h2>
    <div class="row">
        <current-exchange></current-exchange>
      <div class="col-8">
        <exchange-rates></exchange-rates>
      </div>
    </div>
  </div>
</template>

<script>
import CurrentExchange from './CurrentExchange.vue';
import ExchangeRates from './ExchangeRates.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    currentExchange: CurrentExchange,
    exchangeRates: ExchangeRates,
  },
};
</script>

<style lang="css" scoped>
</style>
