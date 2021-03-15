const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      image: './assets/images/socks_blue.jpg',
      inStock: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      sizes: ['extra-small', 'small', 'medium', 'large', 'extra large'],
      variants: [
        { id: 87, color: 'green' },
        { id: 36, color: 'blue' },
      ],
    };
  },
});
