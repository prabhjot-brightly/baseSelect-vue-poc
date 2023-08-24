import { createApp } from 'vue';
import App from "./App.vue";
import { ComponentLibrary } from '@brightly/brightlycomponents/brightlycomponents-vue/src';

createApp(App)
    .use(ComponentLibrary)
    .mount('#app');
