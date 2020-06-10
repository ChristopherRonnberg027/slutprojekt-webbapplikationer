<template>
  <section class="wrapper">
    <div class="top">
      <h3 class="title">{{id ? 'Edit Product' : 'Add New Product'}}</h3>
      <div class="cursor cancel" @click="cancel()">
        <img class="cancel-icon" src="@/assets/close.svg" alt />
        <h3>Cancel Input</h3>
      </div>
    </div>
    <div class="container">
      <div class="error" v-if="error">No empty fields allowed!</div>
      <div class="product">
        <div class="input product-title">
          <p>Title</p>
          <input type="text" v-model="product.title" />
        </div>
        <div class="input">
          <p>Price</p>
          <input type="number" v-model="product.price" />
        </div>
        <div class="input">
          <p>Short Description</p>
          <input type="text" v-model="product.shortDesc" />
        </div>
        <div class="input">
          <p>Long Description</p>
          <input type="text" v-model="product.longDesc" />
        </div>
        <div class="input">
          <p>Image</p>
          <select v-model="product.imgFile">
            <option disabled hidden></option>
            <option value="skateboard-generic.png">Skateboard Generic</option>
            <option value="skateboard-greta.png">Skateboard Greta</option>
            <option value="wheel-rocket.png">Wheel Rocket</option>
            <option value="wheel-spinner.png">Wheel Spinner</option>
            <option value="wheel-wave.png">Wheel Wave</option>
            <option value="hoodie-ash.png">Hoodie Ash</option>
            <option value="hoodie-fire.png">Hoodie Fire</option>
            <option value="hoodie-ocean.png">Hoodie Ocean</option>
          </select>
        </div>
      </div>
    </div>
    <button class="cursor save-product" @click="saveProduct()">Save Product</button>
  </section>
</template>

<script>
export default {
  name: "AdminEdit",
  props: {
    id: String
  },
  data() {
    return {
      productToCreateOrEdit: this.$store.getters.productById(this.id) || {
        title: "",
        price: null,
        shortDesc: "",
        longDesc: "",
        imgFile: ""
      },
      error: false
    };
  },
  computed: {
    product() {
      return {
        title: this.productToCreateOrEdit.title,
        price: this.productToCreateOrEdit.price,
        shortDesc: this.productToCreateOrEdit.shortDesc,
        longDesc: this.productToCreateOrEdit.longDesc,
        imgFile: this.productToCreateOrEdit.imgFile
      };
    }
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    async saveProduct() {
      if (
        !this.product.title ||
        !this.product.price ||
        !this.product.shortDesc ||
        !this.product.longDesc ||
        !this.product.imgFile
      ) {
        this.error = true;
      } else {
        if (this.id) {
          this.product._id = this.id;
          await this.$store.dispatch("editProduct", this.product);
        } else {
          this.$store.dispatch("createProduct", this.product);
        }
        this.cancel();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/admin-styles.scss";
.product {
  @include flex-column;
  .input {
    @include flex-row;
    align-items: center;
    p {
      flex: 2;
    }
    input[type="text"],
    input[type="number"],
    select {
      background: #e2e2e2;
      border: none;
      padding: 1rem;
      margin-left: 1rem;
      flex: 8;
    }
  }
  .product-title {
    padding-top: 0.5rem;
  }
}
.error {
  text-align: center;
  margin: 0.5rem;
  padding: 0.4rem;
  border: 1px solid crimson;
  color: crimson;
  font-weight: 700;
}
@media screen and (max-width: 448px) {
  .wrapper .container .product {
    .input {
      p {
        padding-bottom: 0.2rem;
      }
      @include flex-column;
      align-items: flex-start;
      margin: 0 0.5rem 1rem;
      input[type="text"],
      input[type="number"],
      select {
        margin-left: 0;
      }
    }
  }
}
</style>