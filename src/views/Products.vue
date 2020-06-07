<template>
  <main class="products">
    <h1 class="ma-5">CHECK OUT OUR PRODUCTS</h1>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="product in products" :key="product._id">
          <v-card>
            <v-img contain :src="require('@/assets/'+product.imgFile)"></v-img>
            <v-card-title>{{product.title}}</v-card-title>
            <v-card-subtitle>{{product.shortDesc}}</v-card-subtitle>
            <v-card-text>{{product.price}}</v-card-text>
            <v-card-actions>
              <v-btn @click="addToCart(product)">
                <v-icon class="mr-1">add_shopping_cart</v-icon>
                <span>Add to cart</span>
              </v-btn>
              <v-btn router :to="'/products/'+product._id">
                <v-icon>search</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>

export default {
  name: "Products",
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('addToCart', product);
    }
  },
  beforeCreate() {
    this.$store.dispatch("getProducts");
  }
};
</script>

<style lang="scss" scoped>

</style>