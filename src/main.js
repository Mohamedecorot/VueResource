import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource)
Vue.http.options.root = 'https://jsonplaceholder.typicode.com'
// Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk'

Vue.http.interceptors.push((request, next) => {
  next((response) => {
    if (request.after) {
      request.after.call(this, response)
    }
  })
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
