import Vue from 'vue'
import App from './App.vue' // 컴포넌트 파일

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// 위와 같은 내용
//
// 컴포넌트 파일
// let App = {
//   template: '<div>app</div>'
// }
//
// new Vue({
//   el: '#app',
//   render: h => h(App),
//   components: {
// 'app': App
// })