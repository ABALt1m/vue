<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <h1>Pick your next vacation</h1>
        <ul class="list-group">
          <li
            class="list-group-item bg-dark text-white onhover"
            v-for="(country, index) in countryData.countries"
            v-bind:key="country.id"
            v-bind:title="country.details"
            @click="selectCountry(index)"
          >
            {{ country.name }}
             <span class="float-end" v-if="country.rating !== 0">{{country.rating}}</span>
          </li>
         
           <li
            class="list-group-item bg-dark text-white"
            v-for="(country, index) in newCountries"
            :key="index"
          >
            {{ country }}
          </li>
        </ul>
        <hr />
        <div class="row text-center">
          <div class="col m-1 mt-4">
            <button @click="decrement()" class="btn btn-warning rounded-circle mx-1 py-2 px-4">
              Previouss
            </button>
            
            <button @click="increment()" class="btn btn-primary rounded-circle mx-1 py-2 px-4">
              Next
            </button>
          </div>
        </div>
        <h2>Other countries:</h2>
        <input
          type="text"
          v-model="newCountry"
          @keyup.enter="addCountry(newCountry)"
          class="form-control-lg"
          placeholder="New country..."
        />
        <button
          @click="addCountry(newCountry)"
          class="btn btn-primary btn-lg mx-3 text-white"
        >
         Add coutry
        </button>
        <h4 class="text-center">{{ newCountry }}</h4>
        <ul class="list-group">
         
        </ul>
        <br>
        <br>
        <h2>countries that are cheaper than : </h2>
        <select
          class="form-control-lg"
          v-model="selectedCost"
          @change="filterCountries()"
        >
          <option v-for="(cost, index) in costs" :key="index" :value="cost">
            {{ cost }}
          </option>
        </select>
        <ul class="list-group">
          <li
            v-for="(country, index) in filteredCountries"
            :key="index"
            class="list-group-item"
          >
            {{ country.name }} (EUR: {{ country.cost }})
          </li>
        </ul>
      </div>
      <div class="col-12 col-md-6">
        <CountryDetail @rating="onRating($event)" v-if="selectedCountry"  :country="selectedCountry"/>
      </div>
    </div>
  </div>

 
</template>

<script>
import CountryDetail from "@/components/countryDetail";
import countryData from "@/data/countryData";

export default {
  name: "VacationPicker",
  components: {
    CountryDetail
  },
  data() {
    return {
      countryData,
      selectedCountryIndex: 0,
      newCountry: "",
      newCountries: [],
      selectedCost: 1000,
      costs: [1000, 2000, 3000, 4000, 5000, 6000],
      filteredCountries: [],
    };
  },
  methods: {
    increment() {
      this.selectedCountryIndex++;
    },
    decrement() {
      this.selectedCountryIndex--;
    },
    startBtn() {
      this.selectedCountryIndex = 0;
    },
    selectCountry(index) {
      console.warn("click");
      this.selectedCountryIndex = index;
    },
    addCountry(country) {
      this.newCountries.push(country);
      this.newCountry = "";
    },
    filterCountries() {
      console.log("Filtered cost:::", this.selectedCost);
      this.filteredCountries = this.countryData.countries.filter(
        (country) => country.cost < this.selectedCost
      );
    },
    onRating(rating){
      this.countryData.countries[this.selectedCountryIndex].rating += rating;
    }
  },
  computed: {
    selectedCountry() {
      console.log(`country aangeroepen`);
      return {
        ...this.countryData.countries[this.selectedCountryIndex],
      };
    },
  },
};
</script>

<style scoped>
.onhover:hover{
  cursor: pointer;
}
</style>