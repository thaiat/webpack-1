import Vue from 'vue';
import VueI18n from 'vue-i18n';
import * as ls from 'local-storage';
import { LOCALE } from '../utils/localstorage-constants';
// default language is the first item of the array
const locales = ['en', 'en_GB', 'fr'];

Vue.use(VueI18n);

let messages = {};
locales.forEach(v => {
  messages[v] = require(`./${v}.json`);
});

const i18n = new VueI18n({
  locale: ls.get(LOCALE) || locales[0],
  messages
});
Vue.i18n = i18n;
export default i18n;