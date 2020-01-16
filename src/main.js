import Vue from 'vue'
import App from './App.vue'
import './styles/base.css'
import './styles/index.css'
import store from './store'

Vue.config.productionTip = false

new Vue({
  strict: true,
  store,
  render: h => h(App)
}).$mount('#app')
