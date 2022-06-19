<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="d-flex flex-column justify-content-cente">
          <h1>pick your next vacation</h1>
          <ul class="list-group">
            <li
              class="list-group-item bg-dark text-white"
              v-for="(country, index) in countryData.countries"
              v-bind:key="country.id"
              v-bind:title="country.details"
              @click="selectCountry(index)"
            >
              {{ country.name }}
            </li>
        <li class="list-group-item bg-dark text-white" v-for="(country, index) in newCountries" :key="index">
          {{country}}
        </li>
          </ul>

          <div class="row text-center">
            <div class="col mt-4">
              <button @click="decrement()" class="btn btn-danger px-4">
                previous
              </button>
              <button @click="increament()" class="btn btn-danger px-4">
                next
              </button>
            </div>
          </div>
            <div class="container">
              <h2>Destination cheaper than : </h2>
              <select class="form-control-lg" v-model="selectedCost" @change="filterCountries()"><option v-for="(cost , index) in costs " :key="index" value="cost" >{{ cost }}</option></select>
              <ul class="list-group">
                <li v-for="(country, index) in filteredCountries" :key="index" class="list-group-item">
                  {{country.name}} (EUR: {{country.cost}})
                </li>
              </ul>
            </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <h2>selected countries</h2>
        <ul class="list-group">
          <li class="list-group-item">
            {{ selectedCountry.id }}
          </li>
          <li class="list-group-item">
            <span class="float-right badge badge-secondary badge-pill" v-if="country.rating !== 0">
              {{country.rating}}
            </span>
          </li>
          <li class="list-group-item">
            <img :src="getImgUrl(selectedCountry.img)" class="img-fluid" />
          </li>
          <li class="list-group-item">
            {{ selectedCountry.name }}
          </li>
          <li class="list-group-item">
            {{ selectedCountry.capital }}
          </li>
          <li class="list-group-item">
            <details>
              <summary>more info</summary>
              {{ selectedCountry.details }}
            </details>
          </li>
          <li class="list-group-item">
            {{ selectedCountry.cost }}
          </li>
          <li v-if="isExpensive" class="list-group-item pt-3">
            <p class="bg-danger text-white">DUUR!!</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <h2>Nieuwe land toevoegen</h2>
      <input type="text" v-model="newCountry"/> <button class="btn btn-dark" @click="addCountry()">Toevoegen</button>
      <h3>{{newCountry}}</h3>
      <ul class="list-group">
        
      </ul>
    </div>
  </div>
    <div class="col-6">
      <CountryDetail v-if="selectedCountry" @rating="onRating($event)" :country="selectedCountry"/>
    </div>
  
</template>

<script>
import countryData from "@/data/countryData";
import mixins from "@/mixins/mixins";
import countryDetail from "@/components/countryDetail";
export default {
  name: "VacationPicker",
  components:{countryDetail},
  mixins:[mixins],
  data() {
    return {
      countryData,
      selectedCountryIndex: 0,
      newCountry:"",
      newCountries:[],
      selectedCost: 1000,
      costs: [1000, 2000 , 3000, 4000, 5000, 6000],
      filteredCountries:[]
    };
  },
  methods: {
    increament() {
      this.selectedCountryIndex++;
    },
    decrement() {
      this.selectedCountryIndex--;
    },
    selectCountry(index) {
      console.warn("click");
      this.selectedCountryIndex = index;
    },
    getImgUrl(img) {
      return require("../assets/countries/" + img);
    },
    addCountry(){
      this.newCountries.push(this.newCountry);
      this.newCountry="";
    },
    filterCountries(){
      this.filteredCountries = this.countryData.countries.filter(country => country.cost < this.selectedCost)
    },
    onRating(rating){
      this.countryData.countries[this.selectedCountryIndex].rating += rating;
    }
    
  },
  computed: {
    selectedCountry() {
      console.log("selectedCountry aangeroepen");
      return {
        ...this.countryData.countries[this.selectedCountryIndex],
      };
    },
    isExpensive() {
      return this.countryData.countries[this.selectedCountryIndex].cost > 1000;
    },
    
  },
};
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
