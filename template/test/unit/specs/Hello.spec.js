import Vue from 'vue';
import Hello from '@/pages/Hello';
import i18n from '@/locales';
import store from '@/store';

describe('Components', () => {
  describe('Hello.vue', () => {

    it('should render correct contents', () => {
      const vm = new Vue({
        store,
        i18n,
        template: `
        <div>
          <test></test>
        </div>
        `,
        components: {
          test: Hello
        }
      }).$mount();

      return Vue.nextTick()
        .then(() => {
          expect(vm.$el.querySelector('.hello h1').textContent).to.equal('Hi, Welcome to your Vue.js app');
        });
    });
  });
});