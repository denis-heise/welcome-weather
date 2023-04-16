import axios from "axios";

export default{
    namespaced: true,
    state () {
        return {
            photos: []
        }
    },
    getters: {
        newPhotos (state){
            return state.photos;
        }
    },
    mutations: {
        GET_PHOTOS (state, payload) {
            state.photos = payload;
        }
    },
    actions: {
        async GET_PHOTOS (context, quantity){
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${quantity}`)
            context.commit('GET_PHOTOS', data)
         }
    }
}
