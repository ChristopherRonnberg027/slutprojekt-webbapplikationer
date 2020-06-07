<template>
  <main class="products">
    <h1 class="ma-5">CHECK OUT OUR PRODUCTS</h1>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="product in products" :key="product._id">
          <product :product="product" />
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import Product from '@/components/Product'

export default {
  name: "Products",
  components: {
    Product
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  beforeCreate() {
    this.$store.dispatch("getProducts");
  }
};
</script>

<style lang="scss" scoped>

</style>