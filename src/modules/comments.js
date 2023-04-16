import axios from "axios";

export default{
    namespaced: true,
    state () {
        return {
          comments: []
        }
    },
    getters: {
        newComments (state){
            return state.comments;
        }
    },
    mutations: {
        GET_COMMENTS (state, payload) {
            state.comments = payload;
        }
    },
    actions: {
        async GET_COMMENTS (context, quantity){
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=${quantity}`)
            context.commit('GET_COMMENTS', data)
         }
    }
}
