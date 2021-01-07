import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VuePageTransition from 'vue-page-transition'
 
createApp(App).use(router).use(VuePageTransition).mount('#app')
