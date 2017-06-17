{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue';
import App from './App';
import store from './store';
import './assets/styles/app.scss';
{{#router}}
import router from './router';
{{/router}}

Vue.config.productionTip = false;
var app = {
  initialize() {
    this.bindEvents();
  },
  bindEvents() {
    if (process.env.CORDOVA === 'true') {
      document.addEventListener('deviceready', () => this.onReady());
    } else {
      document.addEventListener('DOMContentLoaded', () => this.onReady());
    }
  },
  onReady() {
    this.setupVue();
  },
  setupVue() {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      {{#router}}
      router,
      {{/router}}
      {{#if_eq build "runtime"}}
      render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      {{/if_eq}}
      {{#if_eq build "standalone"}}
      template: '<App/>',
      store,
      components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      {{/if_eq}}
    });
  }
};

app.initialize();
