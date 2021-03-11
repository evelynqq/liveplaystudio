import Vue from 'vue';
import App from './App.vue';
// router
import router from "./router";
// i18n
import i18n from "./i18n";
// FontAwesome 載入icon
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas, fab);
Vue.component("font-awesome-icon", FontAwesomeIcon);
// vue-scrollto
import VueScrollTo from "vue-scrollto";
Vue.use(VueScrollTo);

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
