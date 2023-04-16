<template>
  <HeaderPage/>
  <router-view></router-view>
</template>

<script>
import HeaderPage from './components/header/header.vue';

export default {
  name: 'App',
  components: {
    HeaderPage
  }
}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
