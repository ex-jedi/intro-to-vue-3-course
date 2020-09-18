app.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true,
    },
  },
  template:
    /* html */
    `
    <ul>
      <li v-for="stuff in details">{{ stuff }}</li>
    </ul>
    `,
});
