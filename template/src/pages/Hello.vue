<template>
  <div class="hello">
    <img src="../assets/images/logo.svg" >
    <h1>\{{ $t('HELLO') }}, \{{ $t('WELCOME') }}</h1>
    <div>isLoading: \{{loading}}</div>
    <div>error: \{{error.message}}</div>
    <button @click="setLocale('fr')">Set Local to fr</button>
    <button @click="setLocale('en')">Set Local to en</button>
    <button @click="setLocale('en_GB')">Set Local to en_GB</button>
    <button @click="fetchCountries(10)">Load Countries</button>
    <ul>
      <li v-for="(country, countryIndex) in countries" :key="country.name">\{{countryIndex + 1}} - \{{country.name}}</li>
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
      setLocale: 'setLocale',
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
