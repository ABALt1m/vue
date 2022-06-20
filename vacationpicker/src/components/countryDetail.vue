<template>
  <div>
    <h1>Geselecteerd:</h1>
    <ul class="list-group">
      <li class="list-group-item">{{ country.id }}</li>
      <li class="list-group-item">
        <img :src="getImgUrl(country.img)" class="img-fluid" />
      </li>
      <li class="list-group-item">{{ country.name }}</li>
      <li class="list-group-item">{{ country.capital }}</li>
      <li class="list-group-item">
        <details>
          <summary>more details?</summary>
          {{ country.details }}
        </details>
      </li>
      <li class="list-group-item">{{ country.cost }}</li>
      <li v-if="isExpensive" class="pt-4 list-group-item">
        <p class="bg-danger px-1">Duur</p>
      </li>
      <li v-if="sale" class="pt-4 list-group-item">
        <p class="bg-success px-1">Sale!</p>
      </li>
    </ul>
  </div>
</template>

<script>
import mixins from "../mixins/mixins";

export default {
  name: "CountryDetail",
  props: ["country"],
  mixins: [mixins],
  computed: {
    isExpensive() {
      return this.country > 1000;
    },
    sale() {
      return this.country < 800;
    },
  },
};
</script>

<style scoped>
</style>