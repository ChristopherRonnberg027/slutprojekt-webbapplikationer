<template>
  <header>
    <section class="logo">
      <img src="../assets/sinus-logo.svg" alt />
    </section>
    <section class="access">
      <div class="profil" @click="accesProfil()">
        <img src="../assets/icon-user-black.svg" alt />
      </div>
      <div class="cart" @click="accesCart()">
        <img src="../assets/icon-bag-black.svg" alt />
        <div class="display">
          <p v-if="getItemQuantity()" v-text="getItemQuantity()"></p>
        </div>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  methods: {
    getItemQuantity() {
      return 10;
    },
    accesProfil() {
      console.log("TO PROFIL");
    },
    accesCart() {
      console.log("TO CART/CHECKOUT");
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  background-color: #c4c4c4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  .logo {
    display: flex;
    justify-content: center;
    img {
      height: 3rem;
    }
  }
  .access {
    // display: grid;
    // grid-template-columns: 1fr 1fr;
    width: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .profil {
      background: white;
      clip-path: circle();
      height: 2rem;
      //   width: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: background 0.2s;

      img {
        width: 100%;
        height: 1.4rem;
      }
    }
    .profil:hover {
      background: #58e0b7;
    }

    .cart {
      padding-top: 0.5rem;
      display: grid;
      grid-template-rows: 1rem 1rem;
      cursor: pointer;

      .display {
        padding: 0.7rem;
        background: white;
        clip-path: circle();
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background 0.2s;
        p {
          font-weight: 800;
          color: black;
        }
      }
    }
    .cart:hover {
      .display {
        background: #58e0b7;
      }
    }
  }
}
</style>