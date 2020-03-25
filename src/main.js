// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import * as filters from '../static/js/filters.js'
import '../static/css/public.less'
import '../static/css/main.less'
import '../static/css/about.less'


let echarts = require('echarts/lib/echarts')
// 引入饼状图组件
require('echarts/lib/chart/tree')
// 引入提示框和title组件，图例
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
Vue.prototype.$echarts = echarts //引入组件

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
