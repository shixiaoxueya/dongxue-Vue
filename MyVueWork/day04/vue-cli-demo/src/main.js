import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false  //清除提醒

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)  //选择的是运行时的版本   所以这边我们使用的是render函数
})
