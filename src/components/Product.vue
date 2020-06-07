<template>
  <v-card>
    <v-img max-height="460" contain :src="require('@/assets/'+product.imgFile)" />
    <v-card-title>{{product.title}}</v-card-title>
    <v-card-subtitle>{{product.shortDesc}}</v-card-subtitle>
    <v-card-subtitle v-if="singleProduct">{{product.category}}</v-card-subtitle>
    <v-card-subtitle v-if="singleProduct">{{product.longDesc}}</v-card-subtitle>
    <v-card-text>{{product.price}}</v-card-text>
    <v-card-actions>
      <v-btn @click="addToCart()">
        <v-icon class="mr-1">add_shopping_cart</v-icon>
        <span>Add to cart</span>
      </v-btn>
      <v-btn v-if="!singleProduct" router :to="'/products/'+product._id">
        <v-icon>search</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: Object,
    singleProduct: Boolean
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", this.product);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>