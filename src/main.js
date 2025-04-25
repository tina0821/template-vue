import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from '@unhead/vue';

import '@unocss/reset/normalize.css';
import 'virtual:uno.css';
import './assets/style/main.css';

import App from './App.vue';
import router from './router';

createApp(App)
  .use(createPinia())
  .use(createHead())
  .use(router)
  .mount('#app');
