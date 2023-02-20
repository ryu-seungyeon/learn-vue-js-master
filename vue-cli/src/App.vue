<template>
  <div>
<!--    <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header>-->
    <app-header
      v-bind:propsdata="str"
      v-on:renew="renewStr"
    ></app-header>
  </div>
</template>
<script>
import AppHeader from './components/AppHeader.vue'
  // new Vue({
  //   data: {
  //     str: 'hi'
  //   }
  // })
  export default {
    components: {
      'app-header': AppHeader
    },
    data(){
      return {
        str: 'Header'
      }
    },
    methods: {
      renewStr() {
        if(this.str === 'Hi'){
          this.str = 'Header'
        }else{
          this.str = 'Hi'
        }
      }
    }
  }
</script>
<style>

</style>