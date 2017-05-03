<template>
  <div class="hello">
    <img src="../assets/images/logo.svg" />
    <h1>\{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
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
