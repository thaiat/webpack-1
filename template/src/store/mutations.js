import * as types from './mutation-types';

const mutations = {
  [types.FETCH_START](state) {
    state.loading = true;
    state.error = {};
  },
  [types.FETCH_ERROR](state, error) {
    state.loading = false;
    state.error = error;
  },
  [types.FETCH_SUCCESS](state) {
    state.loading = false;
  },
  [types.SET_LOCALE_SUCCESS](state, locale) {
    state.locale = locale;
  }
};

export default mutations;