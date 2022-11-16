import './themes/dx.material.gpb.css';
import Vue from "vue";

import App from "./App";
import router from "./router";
import appInfo from "./app-info";

import { locale, loadMessages } from 'devextreme/localization';
import ruMessages from 'devextreme/localization/messages/ru.json';

Vue.config.productionTip = false;
Vue.prototype.$appInfo = appInfo;

loadMessages(ruMessages) 
locale('ru')

new Vue({
  router, 
  render: h => h(App) 
}).$mount("#app");
