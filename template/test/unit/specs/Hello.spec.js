import Vue from 'vue';
import Hello from '@/components/Hello';

describe('Components', () => {
  describe('Hello.vue', () => {

    it('should render correct contents', () => {
      const vm = new Vue({
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
          expect(vm.$el.querySelector('.hello h1').textContent).to.equal('Welcome to Your Vue.js App');
        });
    });
  });
});