import * as types from './mutation-types';

const mutations = {
  [types.COUNTRIES_FETCH_START](state) {
    state.countries = [];
  },
  [types.COUNTRIES_FETCH_SUCCESS](state, countries) {
    state.countries = countries;
  },
  [types.COUNTRIES_FETCH_ERROR](state, error) {
    state.countries = [];
  }
};

export default mutations;