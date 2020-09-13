// https://www.vuemastery.com/courses/intro-to-vue-3/attribute-binding-vue3

const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      description: 'Comfy Vue Mastery socks.',
      image: './assets/images/socks_green.jpg',
      href: 'https://www.vuemastery.com/courses/intro-to-vue-3/attribute-binding-vue3',
      inventory: 11,
      onSale: true,
    };
  },
});
