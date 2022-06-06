<template>
  <div class="container">
    <h1>pick your next vacation</h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="country in countryData.countries" v-bind:key="country.id">
        {{country.name}}
      </li>
    </ul>
    <p>Teller = {{counter}}</p>
    <button v-on:click="counter++" class="btn btn-success">
      +
    </button>
    <button v-on:click="counter--" class="btn btn-danger">
      -
    </button>

    <button @click="increment()" class="btn btn-success">+</button>
    <button @click="decrement()" class="btn btn-danger">-</button>
  </div>
</template>

<script>
export default {
  name: 'VacationPicker',
  data(){
    return{
      countryData,
      counter:0

    }
  }
    }
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
