require('jsdom-global')();
var Vue = require('vue');
Vue.config.productionTip = false;
var chai = require('chai');
global.expect = chai.expect;
global.assert = chai.assert;
