import { createApp } from 'vue'
import App from './App.vue'
import BlogHeader from './components/BlogHeader'

const app = createApp(App);

//eslint-disable-next-line
app.component("BlogHeader", BlogHeader);

app.mount('#app')


