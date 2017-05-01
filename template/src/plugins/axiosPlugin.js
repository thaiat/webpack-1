import axios from 'axios';

// Usage
// import axiosPlugin from './axiosPlugin.js';
// Vue.use(axiosPlugin);
// or
// Vue.use(axiosPlugin, '$axios');

export default {
  install: function(Vue, name = '$http') {
    Object.defineProperty(Vue.prototype, name, { value: axios });
  }
};