<template>
<div class="row">
  <div class="col">
    <h1>Pick your next vacation</h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="country in countryData.countries " v-bind:key="country.id" :title="country.details" @click="selectCountry(index)">
      {{country.name}}
      </li>
      
    </ul>
    <div class=" col">
      <h1>Geselecteerd :</h1>
    <ul class="list-group">
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
    </ul>
    </div>
    </div>
    </div>
    <p>teller ={{count}}</p>
    <button @click="increment()" class="btn btn-success">+</button>
    <button @click="decrement()" class="btn btn-success">-</button>
  
</template>

<script>
import countryData from '@/countyData'
export default {
  data () {
    

    return {
      countryData,
      counter : 0,
      count:  0,
      selectedCountryIndex: 0
    }
  },
  methods:{
    selectCountry(index){
      console.warn('click');
      this.selectedCountryIndex = index;
    },
    increment(){
      this.count++;
    },
    decrement(){
      this.count--;
    }

  },
  computed:{
    selectedCountry(){
      console.log("country aangeroepen");
      return{
        ...this.countryData.countries[this.selectedCountryIndex]
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>