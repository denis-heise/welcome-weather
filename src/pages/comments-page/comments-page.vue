
<template>
    <div>
        <h1>Комментарии</h1>

        <div class="block-comments">
            <div class="block-comments__one-comment" v-for="comment in doneComments" :key="comment.id">
                <h3>{{comment.name}}</h3>
                <p>{{comment.body}}</p>
            </div>
        </div>
    </div>
  </template>
  
<script>  
  export default {
    name: 'CommentsPage',
    mounted(){
        this.$store.dispatch('comments/GET_COMMENTS', 25)
    },
    computed: {
        doneComments () {
            return this.$store.state.comments.comments;
        }
    }
  }
</script> 

<style lang="scss">
    .block-comments {
        display: flex;
        flex-direction: row;
        gap: 15px;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 50px 30px 100px;
    }
    .block-comments__one-comment {
        width: calc(100% / 3 - 45px);
        background-color: #fff;
        border-radius: 20px;
        padding: 15px;

        h3{
            font-size: 16px;
            border-bottom: 1px solid grey;
            margin-bottom: 10px;
        }
        p{
            font-size: 14px;
        }

    }
    .block-comments__title {
        font-size: 16px;
        border-bottom: 1px solid grey;
}
</style>