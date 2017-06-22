import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const countryStore = {
  namespaced: true,
  state: {
    countries: []
  },
  getters,
  mutations,
  actions
};

export default countryStore;