import Hello from '@/pages/Hello';
import i18n from '@/locales';
import store from '@/store';
import { mount } from 'avoriaz';

describe('Components', () => {
  describe('Hello.vue', () => {

    it('should render correct contents', () => {
      const wrapper = mount(Hello, { store, i18n });
      expect(wrapper.find('.hello h1')[0].text()).to.equal('Hi, Welcome to your Vue.js app');
    });

    it('should translate to fr', () => {
      const wrapper = mount(Hello, { store, i18n });
      const button = wrapper.find('button.fr')[0];
      button.trigger('click');
      const title = wrapper.find('.hello h1')[0];
      expect(title.text()).to.equal('Bonjour, Bienvenue sur votre application Vue.js');
    });
  });
});