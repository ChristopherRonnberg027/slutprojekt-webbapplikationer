<template>
  <main class="products">
    <h1>CHECK OUT OUR PRODUCTS</h1>
    <section class="product-list">
      <product v-for="(singleProduct,i) in productList" :key="i" :product="singleProduct" />
    </section>
  </main>
</template>

<script>
import Product from "@/components/Product";
export default {
  name: "Products",
  components: {
    Product
  },
  computed: {
    productList() {
      return this.$store.state.products;
    }
  },
  beforeCreate() {
    this.$store.dispatch("getProducts");
  }
};
</script>

<style lang="scss" scoped>
.products {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  h1 {
    text-align: center;
  }
  .product-list {
    padding-top: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    gap: 2rem;
    margin: 2rem 1rem;
  }
}
</style>