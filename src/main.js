import { createApp } from 'vue';
import App from './App.vue';
import router from "./routes/router";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaMapMarkerAlt, FaRegularClock, BiTelephone, MdDeliverydiningOutlined } from "oh-vue-icons/icons";

import './assets/tailwind.css';
import './assets/main.css';

const app = createApp(App);
addIcons(FaMapMarkerAlt, FaRegularClock, BiTelephone, MdDeliverydiningOutlined);
app.component("v-icon", OhVueIcon);
createApp(App).mount('#app');
app.use(router);
app.mount("#app");