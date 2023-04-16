<template>
    <div class="wrapper">
        <h1>Добро пожаловать в приложение погоды!</h1>
        <router-link to="/weather-info" class="link-weather">
            Узнать погоду
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'HomePage',
    }
</script>

<style lang="scss">
    h1{
        font-size: 50px;
        color: #fff;
    }
    .wrapper{
        display: flex;
        flex-direction: column;
        gap: 50px;
        margin-top: 200px;
    }
    .link-weather{
        width: fit-content;
        margin: 0 auto;
        padding: 20px;
        background-color: rgb(55, 55, 255);
        color: #fff;
        font-size: 30px;
        text-decoration: none;
        border-radius: 20px;

        &:hover{
            background-color: rgb(40, 40, 172);
        }
    }
</style>