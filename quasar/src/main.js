import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

createApp(App).mount("#app");
myApp.use(Quasar, {
  plugins: {},
  /* ～～Quasar Config Object～～
  config: {
    brand: {
      // primary: '#e46262',
      // ... other brand colors
    },
    notify: {...}, // default set of options for Notify Quasar plugin
    loading: {...}, // default set of options for Loading Quasar plugin
    loadingBar: { ... }, // settings for LoadingBar Quasar plugin
  }
  */
});
