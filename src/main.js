import { createApp } from 'vue';
import App from './App.vue';
import router from "./routes/router";

import './assets/tailwind.css';
import './assets/main.css';

const app = createApp(App);
createApp(App).mount('#app');
app.use(router);
app.mount("#app");