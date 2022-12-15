import { createApp } from "vue";
import { Quasar } from "quasar";
import quasarLang from "quasar/lang/zh-TW";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";

// Import Quasar css
import "quasar/src/css/index.sass";

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from "./App.vue";

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
});

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount("#app");
