<template lang="html">
  <highchart :options="chartOptions"></highchart>
</template>

<script>
import { Chart } from 'highcharts-vue';
import Highcharts from 'highcharts';
import axios from 'axios';

export default {
  name: 'ExchangeRates',
  data() {
    return {
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
      DASHBOARD_SERVER_URL: process.env.DASHBOARD_SERVER_URL,
    };
  },
  components: {
    highchart: Chart,
  },
  methods: {
    getExchangeRates() {
      const path = `${this.DASHBOARD_SERVER_URL}/v1/historical-currency-rates`;

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
          console.error(error.message);
        });
    },
  },
  created() {
    this.getExchangeRates();
  },
};
</script>

<style lang="css" scoped>
</style>
