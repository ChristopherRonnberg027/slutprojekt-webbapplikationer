<template>
  <main>
    <h1>Your Cart</h1>
    <div class="cart-item-container">
      <cart-item v-for="cartItem in cart" :key="cartItem.product._id" :cartItem="cartItem" />
      <h2>Total: {{total}}</h2>
      <p v-if="total" class="create btn" @click.once="createOrder()">Checkout</p>
      <div v-if="!total" class="empty">
        <p>
          <strong>Oh no! Your cart is empty! Why not buy some stuff?</strong>
        </p>
        <p class="back btn" @click="toProducts">Back to products!</p>
      </div>
    </div>
  </main>
</template>

<script>
import CartItem from "@/components/CartItem";
export default {
  name: "ShoppingCart",
  components: {
    CartItem
  },
  data() {
    return {
      items: []
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    total() {
      return this.$store.getters.cartTotalPrice;
    }
  },
  methods: {
    async createOrder() {
      if (this.$store.state.user) {
        for (const cartItem of this.cart) {
          for (let i = 0; i < cartItem.quantity; i++) {
            this.items.push(cartItem.product._id);
          }
        }
        let total=this.total
        await this.$store.dispatch("createOrder", { items: this.items });
        this.$router.push({
          name: "Checkout",
          params: { totalSum: total }
        });
      } else {
        this.$router.push("/login");
      }
    },
    toProducts() {
      this.$router.push("/products");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/button-style.scss";
main {
  min-height: 500px;
  padding: 0 1rem;
  margin: 3rem;
  h1 {
    text-align: center;
    padding-bottom: 2rem;
  }
  .cart-item-container {
    max-width: 500px;
    background-color: rgba(0, 0, 0, 0.15);
    padding: 1rem;
    margin: 0 auto;

    .empty {
      text-align: center;
      margin-top: 1rem;
    }
  }
  .create,
  .back {
    background: #58e0b7;
  }
}
</style>