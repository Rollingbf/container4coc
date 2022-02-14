import Vue from "vue";
import App from "./App.vue";
import "./assets/css/index.css";
import router from "./router";
import ElementUI from "element-ui";

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
