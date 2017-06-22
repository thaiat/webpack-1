import * as types from './mutation-types';
import * as rootTypes from '../mutation-types';
import countryApi from '@/api/country';

const actions = {
  fetchCountries({ state, commit, dispatch, rootState }, limit) {
    commit(rootTypes.FETCH_START, null, { root: true });
    commit(types.COUNTRIES_FETCH_START);
    return countryApi
      .find()
      .then(countries => {
        commit(types.COUNTRIES_FETCH_SUCCESS, countries);
        commit(rootTypes.FETCH_SUCCESS, null, { root: true });
      })
      .catch(err => {
        commit(rootTypes.FETCH_ERROR, err, { root: true });
      });
  }
};

export default actions;