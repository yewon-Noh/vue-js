import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/Header'

const app = createApp(App);

//eslint-disable-next-line
app.component("Header", Header);

app.mount('#app')


