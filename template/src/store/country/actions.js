import * as types from './mutation-types';
import * as rootTypes from '../mutation-types';
import axios from 'axios';
import _ from 'lodash';

const actions = {
  fetchCountries({ state, commit, dispatch, rootState }, limit) {
    commit(rootTypes.FETCH_START, null, { root: true });
    commit(types.COUNTRIES_FETCH_START);
    return axios
      .get('https://restcountries.eu/rest/v2/all?fields=name;capital;currencies')
      .then(response => {
        commit(types.COUNTRIES_FETCH_SUCCESS, _.take(response.data, limit));
        commit(rootTypes.FETCH_SUCCESS, null, { root: true });
      })
      .catch(err => {
        commit(rootTypes.FETCH_ERROR, err, { root: true });
      });
  }
};

export default actions;