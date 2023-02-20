<template>
  <header>
    <h1>{{ propsdata }}</h1>
    <button type="button" v-on:click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: ['propsdata'],
  methods: {
    sendEvent(){
      this.$emit('renew')
    }
  }
}
</script>

<style scoped>

</style>