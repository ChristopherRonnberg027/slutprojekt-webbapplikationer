<template>
  <div class="overlay">
    <div class="delete-box">
      <h2>
        Confirm removal of
        Product {{ productToDelete.title}}??
      </h2>
      <button v-on:click="deleteProduct(productToDelete._id)">Yes</button>
      <button v-on:click="toggleDeleteBox()">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteBox",
  props: {
    productToDelete: Object
  },
  methods: {
    deleteProduct(id) {
      this.$store.dispatch("deleteProduct", id);
      this.toggleDeleteBox()
    },
    toggleDeleteBox(){
        this.$emit('toggle')
    }
  }
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.774);
  top: 0;
  left: 0;
  .delete-box {
    position: relative;
    width: 300px;
    background: lightgray;
    border: 2px solid gray;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>