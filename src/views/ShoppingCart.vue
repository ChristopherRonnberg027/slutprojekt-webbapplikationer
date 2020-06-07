<template>
  <main>
    <h1 class="ma-5">Shopping cart</h1>
    <v-container>
      <v-card class="my-5" v-for="cartItem in cart" :key="cartItem.product._id">
        <v-row justify="space-around">
          <v-col cols="4">
            <v-card-text>
              <v-card-title>{{cartItem.product.title}}</v-card-title>
              <v-card-subtitle>{{cartItem.product.price}}</v-card-subtitle>
            </v-card-text>
          </v-col>
          <v-col cols="4">
            <v-card-actions class="flex-column">
              <v-btn @click="addToCart(cartItem.product)" depressed small>
                <v-icon>keyboard_arrow_up</v-icon>
              </v-btn>
              <span>{{cartItem.quantity}}</span>
              <v-btn @click="removeFromCart(cartItem.product)" depressed small>
                <v-icon>keyboard_arrow_down</v-icon>
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
      <v-btn @click="createOrder()">Checkout</v-btn>
    </v-container>
  </main>
</template>

<script>
export default {
  name: "ShoppingCart",
  components: {},
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
    addToCart(product) {
      this.$store.dispatch("addToCart", product);
    },
    removeFromCart(product) {
      this.$store.dispatch("removeFromCart", product);
    },
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