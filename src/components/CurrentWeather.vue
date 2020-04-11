<template lang="html">
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
          <li class="list-inline-item">Humidity: {{ weather.main.humidity }}%</li>
          <li class="list-inline-item">Wind speed: {{ weather.wind.speed }} km/h</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CurrentWeather',
  data() {
    return {
      weather: {
        weather: [
          {
            main: '',
            description: '',
            icon: '',
          },
        ],
        main: {
          temp: 0.0,
          feels_like: 0.0,
          temp_min: 0,
          temp_max: 0,
          pressure: 0,
          humidity: 0,
        },
        wind: {
          speed: 0.0,
        },
        clouds: {
          all: 0,
        },
        name: '',
        cod: 0,
      },
      VUE_APP_DASHBOARD_SERVER_URL: process.env.VUE_APP_DASHBOARD_SERVER_URL,
    };
  },
  methods: {
    getWeather() {
      const path = `${this.VUE_APP_DASHBOARD_SERVER_URL}/v1/current-weather`;

      axios.get(path)
        .then((res) => {
          this.weather = res.data['current-weather'];
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error.message);
        });
    },
    nowDateString() {
      const date = new Date();
      return date.toDateString();
    },
    getIcon(icon) {
      const urlIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      return urlIcon;
    },
  },
  created() {
    this.getWeather();
  },
};
</script>

<style lang="css" scoped>
</style>
