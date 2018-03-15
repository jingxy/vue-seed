// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import  store from "./store/index"
import moment from "moment";
import VueMoment from "vue-moment";
import axios from 'axios'
import ElementUex from 'element-uex'
import filter from './components/js/filters'
import 'element-uex/lib/theme-default/index.css'
  Vue.config.productionTip = false
  Vue.use(ElementUI);
  // Vue.use(filter);
  Vue.use(ElementUex);
  Vue.use(VueMoment, moment);
  Vue.prototype.$http = axios;
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    filter,
    store:store,
      components: { App },
      template: '<App/>'
  })



