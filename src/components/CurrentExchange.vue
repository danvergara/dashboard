<template lang="html">
  <div class="col-4 align-self-center">
    <h5>1 US dollar is equal to</h5>
    <h2>{{ currency.rates.MXN.toFixed(2) }} mexican peso</h2>
    <p>{{ toDateString(currency.date) }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CurrentExchange',
  data() {
    return {
      currency: {
        rates: {
          MXN: 0.0,
        },
        base: '',
        date: '',
      },
      VUE_APP_DASHBOARD_SERVER_URL: process.env.VUE_APP_DASHBOARD_SERVER_URL,
    };
  },
  methods: {
    getCurrentExchange() {
      const path = `${this.VUE_APP_DASHBOARD_SERVER_URL}/v1/currency-exchange`;

      axios.get(path)
        .then((res) => {
          this.currency.rates.MXN = res.data['currency-exchange'].rates.MXN;
          this.currency.base = res.data['currency-exchange'].base;
          this.currency.date = res.data['currency-exchange'].date;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error.message);
        });
    },
    toDateString(date) {
      // eslint-disable-next-line
      const d = new Date(date.replace(/-/g, '\/'));
      return d.toDateString();
    },
  },
  created() {
    this.getCurrentExchange();
  },
};
</script>

<style lang="css" scoped>
</style>
