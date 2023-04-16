<template>
  <div class="weather-block">
    <h1> {{ weatherData.title }} </h1>
    <p> {{ city === '' ? weatherData.description : `Погода в городе ${city[0].toUpperCase() + city.slice(1)}` }} </p>

    <form @submit.prevent="getWeather">
      <input type="text" :placeholder="weatherData.placeholderWeather" v-model="city" @input="hiddenError">
      <button type="submit" :disabled="city === ''">{{ weatherData.buttonWeather }}</button>
    </form>

    <p v-show="errorCity" class="weather-block__error">Название должно содержать более одного символа</p>

    <div v-if="infoWeater !== null">
      <p>{{showCurrentTemperature}}</p>
      <p>{{showFillTemperature}}</p>
      <p>{{showMinTemperature}}</p>
      <p>{{showMaxTemperature}}</p>
    </div>
    
    <p v-show="errorFetch" class="weather-block__error">Введите корректное название города</p>
  </div>

  <!-- <div>
    {{ this.$store.state.comments.comments }}
  </div> -->
</template>

<script>
import axios from 'axios';

export default {
  name: 'WeatherComponent',
  data(){
    return{
      weatherData: {
        title: 'Приложение погоды',
        description: 'Узнать погоду в Вашем городе',
        placeholderWeather: 'Введите город',
        buttonWeather: 'Получить погоду'
      }, 
      city: '',
      errorCity: false,
      errorFetch: false,
      infoWeater: null
    }
  },
  methods: {
    hiddenError(){
      this.errorCity = false;
      this.errorFetch = false;
    },
    getWeather(){
      if(this.city.trim().length < 2){
        this.errorCity = true;
      } else {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=f713c270517760d0290ddd0e445bee82
`)
        .then(dataWeather => {
          this.errorFetch = false;
          this.infoWeater = dataWeather.data.main
        })
        .catch(error => {
          this.infoWeater = null;
          this.errorFetch = true;
          console.log(error)
        })
      }
    },
  },
  computed: {
    showCurrentTemperature(){
      return `Температура: ${Math.round(Number(this.infoWeater.temp))}°C`
    },
    showFillTemperature(){
      return `Ощущается как: ${Math.round(Number(this.infoWeater.feels_like))}°C`
    },
    showMinTemperature(){
      return `Минимальная температура: ${Math.round(Number(this.infoWeater.temp_min))}°C`
    },
    showMaxTemperature(){
      return `Максимальня температура: ${Math.round(Number(this.infoWeater.temp_max))}°C`
    }
  },
}
</script>

<style lang="scss">
  .weather-block{
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 40%;
    margin: 200px auto;
    padding: 20px 40px;
    color: #fff;
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,91,253,1) 100%);
    border-radius: 20px;

    form{
      display: flex;
      flex-direction: row;
      gap: 15px;
      width: 100%;
      margin: 0 auto;
    }

    input{
      width: 60%;
      height: 25px;
      margin: 0 auto;
      border: 1px solid rgb(177, 179, 178);
      border-radius: 5px;
      background-color: aliceblue;
      padding-left: 5px;
    }

    button{
      width: 40%;
      padding: 5px 10px;
      margin: 0 auto;
      border-radius: 10px;
      border: none;
      color: #fff;
      background-color: #295bb8;
      cursor: pointer;

      &:hover{
        background-color: rgb(31, 108, 250);
      }

      &:disabled{
        background-color: rgb(192, 210, 243);
        cursor: auto;
      }
    }
  }
  .weather-block__error{
    width: fit-content;
    margin: 0 auto;
    padding: 5px 10px;
    color: red;
    border: 1px solid red;
    border-radius: 10px;
    background-color: #fff;
  }
</style>
