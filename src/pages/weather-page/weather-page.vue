<template>
  <WeatherComponent msg="Welcome to weather app"/>
</template>

<script>
import WeatherComponent from '../../components/weather-component/weather-component.vue'

export default {
  name: 'WeatherPage',
  components: {
    WeatherComponent
  }
}
</script> 