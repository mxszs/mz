// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'//根组件
import router from './router'

Vue.config.productionTip = false

import "../node_modules/swiper/dist/css/swiper.min.css"
/* eslint-disable no-new */
// 根实例 
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
