import Vue from 'vue';
import VueRouter from "vue-router";
import routes from "./routes";

// init
Vue.use(VueRouter);

// 配置router
const router = new VueRouter({
  routes,
});

export default router;