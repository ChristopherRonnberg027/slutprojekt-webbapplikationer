<template>
  <main>
    <h1 class="ma-5">Shopping cart</h1>
    <v-container>
      <v-card class="my-5" v-for="cartItem in cart" :key="cartItem.product._id">
        <cart-item :cartItem="cartItem" />
      </v-card>
      <v-btn @click="createOrder()">Checkout</v-btn>
    </v-container>
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

</style>