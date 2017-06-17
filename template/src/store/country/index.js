import actions from './actions';
import getters from './getters';
import mutations from './mutations';

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