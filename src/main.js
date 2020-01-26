import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 字体图标样式
import "@/assets/styles/style.css"
// 全局样式
import "@/assets/styles/global.scss"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')