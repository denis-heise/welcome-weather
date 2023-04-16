import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../pages/home-page/home-page';
import WeatherPage from '../pages/weather-page/weather-page';
import PhotosPage from '../pages/photos-page/photos-page';
import CommentsPage from '../pages/comments-page/comments-page';

const routes = [
  { path: '/welcome-weather', component: HomePage },
  { path: '/weather-info', component: WeatherPage },
  { path: '/photos', component: PhotosPage },
  { path: '/comments', component: CommentsPage }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
 