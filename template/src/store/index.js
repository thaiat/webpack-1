import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from '../plugins/vuex-logger';
import countryStore from './country';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

var state = {
  loading: false,
  error: {}
};

const store = new Vuex.Store({
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  state,
  getters,
  mutations,
  modules: {
    country: countryStore
  }
});

export default store;