import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";

import "@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css"; // 字型
import "@quasar/extras/material-icons/material-icons.css"; // icon basics
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css"; // icon outline 形體
import "@quasar/extras/material-icons-round/material-icons-round.css"; // icon round 形體

import "@quasar/extras/animate/fadeIn.css";
import "@quasar/extras/animate/fadeOut.css";

// Quasar 的整包 CSS，這要引入，不然幹嘛用 Quasar XDD
import "quasar/src/css/index.sass";

import "@/assets/main.css";

const app = createApp(App);

app.use(Quasar, {
  plugins: {},
});

app.mount("#app");
