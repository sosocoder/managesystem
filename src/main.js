import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/reset.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//创建一个axios实例并挂载到vue原型上
import http from '../src/api/config'
Vue.prototype.$http = http
import echarts from "echarts"
Vue.prototype.$echarts= echarts
import './mock'

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
