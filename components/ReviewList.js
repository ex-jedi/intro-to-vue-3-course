app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  template:
    /* html */
    `
  <div className="review-container">
  <h3>Reviews:</h3>
  <ul>
    <li v-for="(review, index) in reviews" :key="index" >
      {{ review.name}} gave this {{ review.rating}} stars
      <br/>
      "{{review.review}}"
      <br/>
      <span v-if="review.recommend">{{ review.name }} recommends this product </span>
    </li>
  </ul>
  </div>
    `,
});
