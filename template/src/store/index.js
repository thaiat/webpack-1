import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from '../plugins/vuex-logger';

// global store
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

// modules
import countryStore from './country';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

var state = {
  loading: false,
  error: {},
  locale: null
};

const store = new Vuex.Store({
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  state,
  getters,
  mutations,
  actions,
  modules: {
    country: countryStore
  }
});

export default store;