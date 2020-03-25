<template lang="html">
  <div class=" container mt-5">
    <div class="row">
      <current-weather></current-weather>
      <weather-forecast></weather-forecast>
    </div>
  </div>
</template>

<script>
import CurrentWeather from './CurrentWeather.vue';
import WeatherForecast from './WeatherForecast.vue';

export default {

  data() {
    return {
    };
  },
  components: {
    currentWeather: CurrentWeather,
    weatherForecast: WeatherForecast,
  },
};
</script>

<style lang="css" scoped>
</style>
