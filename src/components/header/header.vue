<template>
    <header class="header">
        <router-link to="/welcome-weather">
            <img src="../../assets/logo.png" alt="logo">
        </router-link>
        <ul class="header_menu">
            <router-link to="/comments">
                <li>Комментарии</li>            
            </router-link>
            <router-link to="/photos">
                <li>Фото</li>            
            </router-link>
            <router-link to="/weather-info">
                <li>Погода</li>            
            </router-link>
        </ul>
    </header>
</template>

<script>
    export default {
        name: 'HeaderPage',
    }
</script>

<style lang="scss">
    .header {
        display: flex;
        flex-direction: row;
        gap: 40px;
        padding: 30px;

        img{
            width: 50px;
            height: 50px;
        }
    }
    .header_menu {
        display: flex;
        flex-direction: row;
        gap: 15px;
        font-size: 25px;
        height: fit-content;
        margin: auto 0;

        li{
            list-style-type: none;
        }
        a{
            color: #fff;
            text-decoration: none;

            &:hover{
                opacity: 0.9;
            }
        }
    }
</style>