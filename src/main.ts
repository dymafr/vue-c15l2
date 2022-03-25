import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.provide('API_URL', 'https://restapi.fr/api');

app.mount('#app');
