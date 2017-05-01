import axios from 'axios';

// Usage
// import axiosPlugin from './axiosPlugin.js';
// Vue.use(axiosPlugin);

export default (Vue) => {
  Object.defineProperties(Vue.prototype, {
    $http: {
        return axios;
    }
  })
};
