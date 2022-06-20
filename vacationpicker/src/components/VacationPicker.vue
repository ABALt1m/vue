<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <h1>Pick your next vacation</h1>
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
            <button @click="decrement()" class="btn btn-danger rounded-circle mx-1 py-2 px-4">
              Previous
            </button>
            
            <button @click="increment()" class="btn btn-success rounded-circle mx-1 py-2 px-4">
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
        <hr />
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
        <CountryDetail v-if="selectedCountry" :country="selectedCountry"/>
      </div>
    </div>
  </div>

  <!-- <p>teller = {{counter}}</p>
  <button v-on:click="counter++" class="btn btn-success">+</button>
  <button v-on:click="counter--" class="btn btn-danger">-</button>-->
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
      // filter landen, gebaseerd op selectedCost. Deze wordt
      // met v-model in de selectielijst aangepast.
      console.log("Filtered cost:::", this.selectedCost);
      this.filteredCountries = this.countryData.countries.filter(
        (country) => country.cost < this.selectedCost
      );
    },
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
</style>