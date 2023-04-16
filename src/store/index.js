import { createStore } from 'vuex';
import commentModule from '../modules/comments';
import photosModule from '../modules/photos';

export default createStore({
    modules: {
        comments: commentModule,
        photos: photosModule
    }
  })
