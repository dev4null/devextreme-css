import './themes/dx.generic.gpb.css';
import Vue from "vue";
 
import App from "./App";
import router from "./router";
import appInfo from "./app-info";

import { locale, loadMessages } from 'devextreme/localization';
import ruMessages from 'devextreme/localization/messages/ru.json';
import './themes/dx.generic.gpb.css'

//import "../node_modules/devextreme/dist/css/dx.common.css"
//import "../node_modules/devextreme/dist/css/dx.light.css"

Vue.config.productionTip = false;
Vue.prototype.$appInfo = appInfo;

loadMessages(ruMessages) 
locale('ru')

new Vue({
  router, 
  render: h => h(App) 
}).$mount("#app");
