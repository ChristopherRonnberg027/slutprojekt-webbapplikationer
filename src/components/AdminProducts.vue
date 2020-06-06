<template>
  <section class="wrapper">
    <div class="top">
      <h3 class="title">Edit Products</h3>
      <h3 class="cursor add" @click="addOrEditProduct()">
        <img class="add-icon" src="@/assets/add.svg" alt />
        <p>Add new Product</p>
      </h3>
    </div>
    <div class="container">
      <div class="product" v-for="(product,i) in productList" :key="i">
        <img
          class="cursor"
          @click="addOrEditProduct(product._id)"
          src="@/assets/icon-edit-white.svg"
          alt
        />
        <img class="cursor" @click="confirmDelete(product)" src="@/assets/close.svg" alt />
        <h3>{{product.title}}</h3>
      </div>
      <delete-box v-if="showDeleteBox" :productToDelete="productToDelete" @toggle="toggleDeleteBox()"/>
    </div>
  </section>
</template>

<script>
import DeleteBox from "@/components/DeleteBox";
export default {
  name: "AdminProducts",
  components: {
    DeleteBox
  },
  props: {
    productList: Array
  },
  data() {
    return {
      showDeleteBox: false,
      productToDelete: {}
    };
  },
  methods: {
    addOrEditProduct(id) {
      this.$emit("addeditproduct", id);
    },
    confirmDelete(product) {
      this.productToDelete = product;
      this.toggleDeleteBox()
    },
    toggleDeleteBox() {
      this.showDeleteBox = !this.showDeleteBox;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/admin-styles.scss";
</style>