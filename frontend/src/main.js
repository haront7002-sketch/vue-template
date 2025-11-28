import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// installing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// using vuex for data handling by importing my store from my main.js
// import store from './store'

const app = createApp(App)

app.use(router)
// using that store
// app.use(store)

app.mount('#app')
