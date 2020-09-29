// https://www.vuemastery.com/courses/intro-to-vue-3/components-and-props-vue3
const app = Vue.createApp({
  data() {
    return {
      cart: [],
      // Data to be sent to component as prop.
      premium: true,
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    reduceCart(id) {
      // this.cart.push(id);
      const removeIt = this.cart.indexOf(id);
      if (removeIt > -1) {
        this.cart.splice(removeIt, 1);
        console.log(`Removing ${removeIt}`);
      } else {
        console.log('Nothing to see here!');
      }
    },
  },
});
