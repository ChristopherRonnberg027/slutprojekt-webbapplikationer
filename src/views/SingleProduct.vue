<template>
  <main class="single-product">
    <h1>{{product.title}}</h1>
    <product :product="product" singleProduct />
    <p>{{product.longDesc}}</p>
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
    if (!this.$store.state.product.title) {
      this.$store.dispatch("getProduct", this.$route.params.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.single-product {
    padding: 0 1rem;
    margin-top: 5rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    max-width: 600px;
    
    padding-bottom: 5rem;

    p{
      padding-top: 1rem;
    }
}
</style>