<template>
  <main>
    <h1>Admin Page</h1>
    <admin-products
      v-if="!addOrEdit"
      :productList="productList"
      @addeditproduct="showCreateEditView"
    />
    <admin-create-edit v-else :id="productToEdit" @cancel="showProductsView()" />
  </main>
</template>

<script>
import AdminProducts from "@/components/AdminProducts";
import AdminCreateEdit from "@/components/AdminCreateEdit";
export default {
  name: "AdminArea",
  components: {
    AdminProducts,
    AdminCreateEdit
  },
  data() {
    return {
      addOrEdit: false,
      productToEdit: ""
    };
  },
  computed: {
    productList() {
      return this.$store.state.products;
    }
  },
  methods: {
    showCreateEditView(id) {
      this.productToEdit = id;
      this.addOrEdit = true;
    },
    showProductsView() {
      this.addOrEdit = false;
    }
  },
  beforeCreate() {
    this.$store.dispatch("getProducts");
  }
};
</script>

<style lang="scss" scoped>
@mixin flex-column {
  display: flex;
  flex-direction: column;
}
@mixin flex-column-center {
  @include flex-column;
  align-items: center;
}

main {
  @include flex-column-center;
}
</style>