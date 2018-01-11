import Vue from 'vue'
import App from './App.vue'
// import Details from './Details.vue'

// globally register component
// Vue.component('app-server-details', Details);

new Vue({
  el: '#app',
  render: h => h(App)
})
