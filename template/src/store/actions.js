import * as types from './mutation-types';
import * as ls from 'local-storage';
import { LOCALE } from '../utils/localstorage-constants';

const actions = {
  setLocale({ state, commit, dispatch, rootState }, locale) {
    ls.set(LOCALE, locale);
    global.i18n.locale = locale;
    commit(types.SET_LOCALE_SUCCESS, locale);
  },
  bindLocale({ dispatch }) {
    ls.on(LOCALE, function(value) {
      dispatch('setLocale', value);
    });
  }
};

export default actions;