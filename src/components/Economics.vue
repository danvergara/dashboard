<template lang="html">
  <div class="container mt-5">
    <div class="row">
      <div class="col-4 align-self-center">
        <h5>1 US dollar is equal to</h5>
        <h2>{{ currency.rates.MXN.toFixed(2) }} mexican peso</h2>
        <p>{{ toDateString(currency.date) }}</p>
      </div>
      <div class="col-8">
        <highcharts :options="chartOptions"></highcharts>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from 'highcharts-vue';
import Highcharts from 'highcharts';
import axios from 'axios';

export default {
  data() {
    return {
      currency: {
        rates: {
          MXN: 0.0,
        },
      },
      response: {},
      chartOptions: {
        chart: {
          type: 'spline',
          zoomType: 'x',
        },
        title: {
          text: 'USD to MXN exchange rate over time',
        },
        subtitle: {
          text: 'Source: exchangeratesapi.io',
        },
        xAxis: {
          type: 'datetime',
          categories: [],
        },
        yAxis: {
          title: {
            text: 'Exchange rate',
          },
        },
        series: [{
          lineColor: Highcharts.getOptions().colors[5],
          color: Highcharts.getOptions().colors[1],
          type: 'spline',
          name: 'USD to MXN',
          data: [],
        }],
      },
    };
  },
  components: {
    highcharts: Chart,
  },
  methods: {
    getExchangeRates() {
      const path = 'http://0.0.0.0:8000/v1/historical-currency-rates';

      axios.get(path)
        .then((res) => {
          this.response = res.data['historical-currency-rates'].rates;
          Object.entries(this.response).forEach(([date, rate]) => {
            this.chartOptions.xAxis.categories.push(date);
            this.chartOptions.series[0].data.push(parseFloat(rate.MXN.toFixed(2)));
          });
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    getCurrentExchange() {
      const path = 'http://0.0.0.0:8000/v1/currency-exchange';
      axios.get(path)
        .then((res) => {
          this.currency = res.data['currency-exchange'];
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    toDateString(date) {
      const d = new Date(date);
      return d.toDateString();
    },
  },
  created() {
    this.getExchangeRates();
    this.getCurrentExchange();
  },
};
</script>

<style lang="css" scoped>
</style>
