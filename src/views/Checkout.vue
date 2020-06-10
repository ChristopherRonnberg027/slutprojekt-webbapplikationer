<template>
  <main>
    <h1>Thank you! Your order is on the way!</h1>
    <div class="shipping-container">
      <h4>
        Order total sum:
        <strong>{{totalSum}}:-</strong>
      </h4>
      <h3 class="totalsum">Your order and billing is shipped to:</h3>
      <p>Billing adress:</p>
      <p class="shipping-info">{{user.name}}</p>
      <p class="shipping-info">{{user.adress.street}}</p>
      <p class="shipping-info">{{user.adress.zip}}</p>
      <p class="shipping-info">{{user.adress.city}}</p>
      <p class="line"></p>
      <p class="back btn" @click="toProducts">Back to products!</p>
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
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    toProducts() {
      this.$router.push("/products");
    }
  },
  created() {
    if (!this.totalSum) {
      this.$router.push("/shoppingcart");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/button-style.scss";
main {
  h1 {
    text-align: center;
    padding: 3rem;
  }

  .shipping-container {
    max-width: 500px;
    background-color: rgba(0, 0, 0, 0.15);
    padding: 1rem;
    margin: 0 auto;
    margin-bottom: 3rem;

    h3,
    h4 {
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
    }

    .shipping-info {
      font-weight: 800;
    }
    .line {
      padding-top: 1rem;
    }
    h3,
    .line {
      border-bottom: 1px solid black;
    }
    .back {
      background: #58e0b7;
    }
  }
}
</style>
