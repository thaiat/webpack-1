{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import './assets/styles/app.scss';
import Vue from 'vue';
import i18n from './locales';
import store from './store';
import App from './App';
import directives from './directives';
import components from './components';
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
    this.setUpDirectives();
    this.setUpComponents();
    this.setupVue();
  },
  /**
   * Set up the directives globally
   */
  setUpDirectives() {
    Object.keys(directives).forEach(key => {
      Vue.directive(key, directives[key]);
    });
  },

  /**
   * Set up components globallu
   */
  setUpComponents() {
    let prefix = '';
    Object.keys(components).forEach(key => {
      Vue.component(`${prefix}${key}`, components[key]);
    });
  },
  setupVue() {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      i18n,
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
