import axios from 'axios';
import _ from 'lodash';
const countryApi = {
  find() {
    return axios
      .get('https://restcountries.eu/rest/v2/all?fields=name;capital;currencies')
      .then(response => _.take(response.data, 10));
  }
};
export default countryApi;