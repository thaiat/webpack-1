<template>
  <div class="hello">
    <img src="../assets/images/logo.svg" />
    <h1>\{{ msg }}</h1>
    <div>isLoading: \{{loading}}</div>
    <div>error: \{{error.message}}</div>
  
    <button @click="fetchCountries(10)">Load Countries</button>
    <ul>
      <li v-for="country, countryIndex in countries">\{{countryIndex + 1}} - \{{country.name}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'hello',
  computed: {
    ...mapGetters({
      countries: 'country/countries',
      error: 'error',
      loading: 'loading'
    })
  },
  methods: {
    ...mapActions({
      increment: 'increment',
      fetchCountries: 'country/fetchCountries'
    })
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    };
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
