<template>
  <main>
    <h1 class="ma-5">single product</h1>
    <v-container>
      <v-row justify="center">
        <v-col cols="10">
          <product :product="product" singleProduct />
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import Product from "@/components/Product";

export default {
  name: "SingeProduct",
  components: {
    Product
  },

  computed: {
    product() {
      return this.$store.state.product;
    }
  },

  beforeCreate() {
    this.$store.dispatch("getProduct", this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
</style>