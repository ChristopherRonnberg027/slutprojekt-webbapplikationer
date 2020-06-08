<template>
  <article class="container">
    <section class="product-info">
      <h4 class="title">{{cartItem.product.title}}</h4>
      <p class="price">{{cartItem.product.price}} :-</p>
    </section>
    <div class="stroke"></div>
    <section class="quantity-btn">
      <p class="btn" @click="addToCart()">&and;</p>
      <p class="quantity">{{cartItem.quantity}}</p>
      <p class="btn" @click="removeFromCart()">&or;</p>
    </section>
  </article>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    cartItem: Object
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", this.cartItem.product);
    },
    removeFromCart() {
      this.$store.dispatch("removeFromCart", this.cartItem.product);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  .stroke {
    margin: auto;
    //padding: 1rem;
    border-bottom: 1px dotted black;
  }
  .quantity-btn {
    .btn {
      cursor: pointer;
      font-weight: 900;

      p {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
