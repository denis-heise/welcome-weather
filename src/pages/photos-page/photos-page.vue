<template>
    <div>
        <h1>Примеры фото</h1>

        <div class="block-photos">
            <div class="block-photos__one-photo" v-for="photo in donePhotos" :key="photo.id">
                <h3>{{photo.title}}</h3>
                <img :src="photo.url" :alt="photo.title">
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'PhotosPage',
    mounted(){
        this.$store.dispatch('photos/GET_PHOTOS', 20)
    },
    computed: {
        donePhotos () {
            return this.$store.state.photos.photos
        }
    }
}
</script> 

<style lang="scss">
    .block-photos{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 15px;
        justify-content: space-between;
        padding: 50px 50px 100px;
    }
    .block-photos__one-photo{
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: calc(100% / 3 - 15px);

        h3{
            color: #fff;
            font-size: 16px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
</style>