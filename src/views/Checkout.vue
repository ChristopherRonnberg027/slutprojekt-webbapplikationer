<template>
  <main>
    <h1>Your order is on the way!</h1>
    <div class="shipping-container">
      <h3>Your order and billing is shipped to:</h3>
      <h4>total sum is: {{totalSum}}</h4>
      <p class="shipping-info">{{user.adress.street}}</p>
      <p class="shipping-info">{{user.adress.zip}}</p>
      <p class="shipping-info">{{user.adress.city}}</p>
      <p class="back-btn" @click="toProducts">Back to products!</p>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    totalSum: Number
  },
  computed: {
    // beforeCreate() {},
    total() {
      return this.$store.getters.cartTotalPrice;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    // user(){
    //   return this.$store.state.user;
    // }
    toProducts() {
      this.$router.push("/products");
    }
  },
  created(){
    if (!this.totalSum){
      this.$router.push("/shoppingcart");
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  h1 {
    text-align: center;
    padding-bottom: 3rem;
  }
  .shipping-container {
    max-width: 500px;
    background-color: rgba(0, 0, 0, 0.15);
    //border: 1px solid black;
    padding: 1rem;
    margin: 0 auto;
    margin-bottom: 3rem;
    //box-shadow: 0px 5px 1px -3px rgba(0, 0, 0, 0.75);
    h3 {
      border-bottom: 1px solid black;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
    }

    .shipping-info {
      font-weight: 800;
    }
    .back-btn {
      margin-top: 3rem;
      text-align: center;
      font-size: 1rem;
      font-weight: 700;
      background: #58e0b7;
      border: 2px solid #000000;
      padding: 0rem 1rem;
      &:hover {
        cursor: pointer;
        background: cornflowerblue;
      }
      &:active {
        transform: scale(0.98);
      }
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
