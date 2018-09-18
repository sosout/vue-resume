import Vue from "vue";
import "./assets/reset.css";
import App from "./App.vue";
import Mobile from "./Mobile";

import "./registerServiceWorker";

Vue.config.productionTip = false;

const width = document.documentElement.clientWidth;

new Vue({
  render: h => h(width > 500 ? App : Mobile)
}).$mount("#app");
