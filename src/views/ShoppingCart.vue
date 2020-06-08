<template>
  <main>
    <h1>Your Cart</h1>
    <div class="cart-item-container">
      <cart-item v-for="cartItem in cart" :key="cartItem.product._id" :cartItem="cartItem" />
      <h2>Total: {{total}}</h2>
      <!-- <button @click="createOrder" class="purchase">Checkout</button> -->
      <p class="create-btn" @click="createOrder">Checkout</p>
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
    createOrder() {
      if (this.$store.state.user) {
        for (const cartItem of this.cart) {
          for (let i = 0; i < cartItem.quantity; i++) {
            this.items.push(cartItem.product._id);
          }
        }
        this.$store.dispatch("createOrder", { items: this.items });
        this.$router.push("/checkout");
      } else {
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// .purchase {
//   background: #83fbe5;
//   border: 2px solid #000000;
//   box-sizing: border-box;
//   font-size: 1.5rem;
//   padding: 0 1rem;
// }

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
  }
  .create-btn{
    margin-top: 3rem;
    text-align: center;
    font-size: 0.8rem;
    background: #58e0b7;
    border: 2px solid #000000;
    padding: 0rem 0.5rem;
    &:hover {
      cursor: pointer;
      background: cornflowerblue;
    }
  }
}
</style>