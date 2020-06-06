<template>
  <section class="wrapper">
    <div class="top">
      <h3 class="title">{{id?'Edit Product':'Add New Product'}}</h3>
      <h3 class="cursor cancel" @click="cancel()">
        <img class="cancel-icon" src="@/assets/close.svg" alt />
        <p>Cancel Input</p>
      </h3>
    </div>
    <div class="container">
      <div class="product">
        <div class="input">
          <p>Title</p>
          <input type="text" v-model="product.title" />
        </div>
        <div class="input">
          <p>Price</p>
          <input type="number" v-model="product.price" />
        </div>
        <div class="input">
          <p>Category</p>
          <input type="text" v-model="product.category" />
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
      product: this.id
        ? this.$store.getters.productById(this.id)
        : {
            title: "",
            price: null,
            category: "",
            shortDesc: "",
            longDesc: "",
            imgFile: ""
          }
    };
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    saveProduct(){
      if(this.id){
        this.$store.dispatch('editProduct',this.product)
      }else{
        this.$store.dispatch('createProduct',this.product)
      }
      this.cancel()
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
    p {
      flex: 2;
    }
    input[type="text"],
    input[type="number"],
    select {
      margin-left: 1rem;
      flex: 8;
    }
  }
}
</style>