<template>
  <div class="overlay">
    <div class="delete-box">
      <img class="cancel" @click="toggleDeleteBox()" src="@/assets/close.svg" alt />
      <p class="message">
        Confirm removal of
        <strong>{{productToDelete.title}}</strong>?
      </p>
      <div class="buttons">
        <button class="no" @click="toggleDeleteBox()">Cancel</button>
        <button class="yes" @click="deleteProduct(productToDelete._id)">Yes</button>
      </div>
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
      this.toggleDeleteBox();
    },
    toggleDeleteBox() {
      this.$emit("toggle");
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40vw;
    max-height: 50vh;
    padding: 2rem;
    background: #f2f2f2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .cancel {
      align-self: flex-start;
      &:hover {
        cursor: pointer;
      }
    }
    .message {
      font-size: 2rem;
      align-self: center;
      margin-bottom: 3rem;
      padding: 5vw;
    }
    .buttons {
      display: flex;
      justify-content: space-around;
      .no,
      .yes {
        border: 2px solid #000000;
        box-sizing: border-box;
        font-size: 1.2rem;
        font-weight: bold;
        padding: 0 1rem;
        &:hover {
          cursor: pointer;
        }
      }
      .no {
        background-color: #fb8383;
      }
      .yes {
        background-color: #83fbe5;
      }
    }
  }
}
</style>