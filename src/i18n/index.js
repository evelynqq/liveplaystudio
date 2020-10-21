import Vue from "vue";
import VueI18n from "vue-i18n";

// 自訂語言檔
import en from "@/i18n/lang/en.js";
import cn from "@/i18n/lang/cn.js";

// init
Vue.use(VueI18n);

const i18n = new VueI18n({
  //locale = localStorage.getItem("locale") 如果沒值預設為 "cn"
  locale: localStorage.getItem("locale") || "cn",
  messages: { en, cn }
});

export default i18n;
