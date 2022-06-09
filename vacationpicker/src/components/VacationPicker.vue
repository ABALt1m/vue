<template>
  <div class="container">
    <h1>pick your next vacation</h1>
    <ul class="list-group">
      <li class="list-group-item">
        <img :src="getImgUrl(selectedCountry.img)" class="img-fluid">
      </li>
      <li class="list-group-item" v-for="(country, index) in countryData.countries" v-bind:key="country.id" :title="country.details" @click="selectCountry(index)">
        {{country.name}}
      </li>
      <li class="list-group-item">
        {{selectedCountry.id}}
      </li>
      <li class="list-group-item">
        {{selectedCountry.name}}
      </li>
      <li class="list-group-item">
        {{selectedCountry.capital}}
      </li>
      <li class="list-group-item">
        {{selectedCountry.details}}
      </li>
      <li class="list-group-item">
        {{selectedCountry.cost}}
      </li>
      <li v-if="isExpensive" class="list-group-item">
      <p class="bg-danger">DUUR!!</p>
      </li>
     
    </ul>
    <p>Teller = {{counter}}</p>
    <button v-on:click="counter++" class="btn btn-success">
      +
    </button>
    <button v-on:click="counter--" class="btn btn-danger">
      -
    </button>

    
  </div>
</template>

<script>
import countryData from '@/data/countryData';
export default {
  name: "VacationPicker",
  data(){
    return{
      countryData,
      counter:0,
      selectedCountryIndex: 0
    }
  },
  methods:{
    selectCountry(index){
      console.warn('click');
      this.selectedCountryIndex = index;
    }
  },
  computed:{
    selectedCountry(){
      console.log("country aangeroepen");
      return{
        ...this.countryData.countries[this.selectedCountryIndex]
      }
    },
    isExpensive(){
      return this.countryData.countries[this.selectedCountryIndex].cost > 1000
    },
    getImgUrl(img){
      return require('../assets/countries/'+ img);
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
