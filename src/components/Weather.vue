<template lang="html">
  <div class=" container mt-5">
    <div class="row">
      <div class="col-4 align-self-center">
        <h4>Ciudad de México, CDMX</h4>
        <p>{{ nowDateString() }}</p>
        <div class="row">
          <div class="col-4">
            <b-img :src="getIcon(weather.weather[0].icon)"
                   alt="Media Aside"></b-img>

          </div>
          <div class="co-8 align-self-center">
            <h2>{{ weather.main.temp }} &#8451;</h2>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <ul class="list-inline">
              <li class="list-inline-item">Humidity: {{ weather.main.temp }}%</li>
              <li class="list-inline-item">Wind speed: {{ weather.wind.speed }} km/h</li>
            </ul>
          </div>
        </div>
      </div>
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
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      forecastResponse: [],
      forecast: [],
      weather: {},
    };
  },
  methods: {
    getForecast() {
      const path = 'http://0.0.0.0:8000/v1/weather-forecast';

      axios.get(path)
        .then((res) => {
          this.forecastResponse = res.data['weather-forecast'];
          this.forecastByDay();
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    getWeather() {
      const path = 'http://0.0.0.0:8000/v1/current-weather';

      axios.get(path)
        .then((res) => {
          this.weather = res.data['current-weather'];
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    nowDateString() {
      const date = new Date();
      return date.toDateString();
    },
    dateToString(dateString) {
      // eslint-disable-next-line
      const date = new Date(dateString.replace(/-/g, '\/'));
      return date.toDateString();
    },
    getIcon(icon) {
      const urlIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`;
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
      let mostFrequent = 0;
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
      return Math.ceil(Math.min(...array));
    },
    findMaxValue(array) {
      return Math.ceil(Math.max(...array));
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
    this.getWeather();
  },
};
</script>

<style lang="css" scoped>
</style>
