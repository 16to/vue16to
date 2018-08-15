// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import publicless from '../static/css/public.less'
import mainless from '../static/css/main.less'
import aboutless from '../static/css/about.less'
import * as filters from '../static/js/filters.js'
import echarts from "echarts"

Vue.prototype.$echarts = echarts

//引入公共过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
