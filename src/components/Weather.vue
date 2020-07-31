<template lang="html">
  <div>
    <navbar></navbar>
    <h2 class="d-flex justify-content-center mt-4">Weather Analysis</h2>
    <b-container class="mt-5">
      <b-row align-v="center">
        <b-col>
          <current-weather></current-weather>
        </b-col>
        <b-col cols="8">
          <weather-forecast></weather-forecast>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import CurrentWeather from './CurrentWeather.vue';
import WeatherForecast from './WeatherForecast.vue';

export default {

  data() {
    return {
    };
  },
  components: {
    navbar: NavBar,
    currentWeather: CurrentWeather,
    weatherForecast: WeatherForecast,
  },
};
</script>

<style lang="css" scoped>
</style>
