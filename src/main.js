import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from 'axios';

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

  import './router/premit'

Vue.prototype.$Axios = Axios;


//引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;

Vue.use(ElementUI)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
