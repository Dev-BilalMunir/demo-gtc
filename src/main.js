// import './assets/main.css'
import PrimeVue from 'primevue/config';
import '@/assets/styles.scss';
import Button from 'primevue/button';

import Carousel from 'primevue/carousel';


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, { ripple: true });
app.component('Button', Button);
app.component('Carousel', Carousel);


app.mount('#app')
