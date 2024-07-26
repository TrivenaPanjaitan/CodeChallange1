import { createApp } from 'vue';
import App from './App.vue';
import { ModalPlugin } from 'vue3-modal';

const app = createApp(App);
app.use(ModalPlugin);
app.mount('#app');
