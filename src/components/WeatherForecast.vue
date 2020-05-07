<template lang="html">
  <div class="col-8">
    <h4 class="d-flex justify-content-center">Weather forecast</h4>
     <b-card-group>
       <b-card v-for="(day, key) in forecast" :key="key"
               tag="article"
               class="mb-2">
          <b-card-img :src="getIcon(getMode(day.icon))"
                      height="100px;"
                      width="100px;">
          </b-card-img>
         <b-card-text class="d-flex justify-content-center">
           {{ findMaxValue(day.temp_max) }} &#730;. {{ findMinValue(day.temp_min) }} &#730;.
         </b-card-text>
         <template v-slot:footer>
           <small class="text-muted d-flex justify-content-center">
             {{ removeYear(dateToString(key)) }}
           </small>
         </template>
       </b-card>
    </b-card-group>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'WeatherForecast',
  data() {
    return {
      forecastResponse: [],
      forecast: [],
      VUE_APP_DASHBOARD_SERVER_URL: process.env.VUE_APP_DASHBOARD_SERVER_URL,
    };
  },
  methods: {
    getForecast() {
      const path = `${this.VUE_APP_DASHBOARD_SERVER_URL}/v1/weather-forecast`;

      axios.get(path)
        .then((res) => {
          this.forecastResponse = res.data['weather-forecast'];
          this.forecastByDay();
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error.message);
        });
    },
    dateToString(dateString) {
      // eslint-disable-next-line
      const date = new Date(dateString.replace(/-/g, '\/'));
      return date.toDateString();
    },
    getIcon(icon) {
      const urlIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      return urlIcon;
    },
    groupByDay(array, key) {
      return array.reduce((result, currentValue) => {
        const dayResult = result;
        if (!dayResult[currentValue[key].slice(0, 10)]) {
          dayResult[currentValue[key].slice(0, 10)] = {
            temp_max: [],
            temp_min: [],
            icon: [],
            description: [],
          };
        }

        dayResult[currentValue[key].slice(0, 10)].temp_max.push(currentValue.main.temp_max);
        dayResult[currentValue[key].slice(0, 10)].temp_min.push(currentValue.main.temp_min);
        dayResult[currentValue[key].slice(0, 10)].icon.push(currentValue.weather[0].icon);
        const desc = currentValue.weather[0].description;
        dayResult[currentValue[key].slice(0, 10)].description.push(desc);
        return dayResult;
      }, {}); // empty object is the initial value for result object
    },
    getMode(array) {
      const counts = {};
      let compare = 0;
      let mostFrequent = '';
      for (let i = 0, len = array.length; i < len; i += 1) {
        const word = array[i];

        if (counts[word] === undefined) {
          counts[word] = 1;
        } else {
          counts[word] += 1;
        }
        if (counts[word] > compare) {
          compare = counts[word];
          mostFrequent = array[i];
        }
      }
      return mostFrequent;
    },
    findMinValue(array) {
      return Math.round(Math.min(...array));
    },
    findMaxValue(array) {
      return Math.round(Math.max(...array));
    },
    forecastByDay() {
      this.forecast = this.groupByDay(this.forecastResponse.list, 'dt_txt');
    },
    removeYear(dateStr) {
      const dateList = dateStr.split(' ');
      dateList.pop();
      return dateList.join(' ');
    },
  },
  created() {
    this.getForecast();
  },
};
</script>

<style lang="css" scoped>
</style>
