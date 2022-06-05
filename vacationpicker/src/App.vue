<template>
  <img alt="Vue logo" src="./assets/logo.png">
<VacationPicker/>
</template>

<script>
import VacationPicker from "@/components/VacationPicker";

export default {
  name: 'App',
  components: {
    VacationPicker
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
