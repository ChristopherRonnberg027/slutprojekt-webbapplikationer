<template>
  <header>
    <div class="wrapper">
      <section class="logo" @click="toHome()">
        <img src="../assets/test/svg_test-white-sinus.svg" alt />
        <!-- <img src="../assets/sinus-logo.svg" alt /> -->
      </section>

      <section class="access">
        <div class="admin" @click="accessAdminArea()" v-if="user && user.role === 'admin'">
          <img src="../assets/icon-edit-white.svg" alt />
        </div>

        <div class="profile" @click="accessProfile()">
          <!-- <img src="../assets/test/svg_test-black-profile.svg" alt /> -->
          <img src="../assets/test/svg_test-white-profile.svg" alt />
          <!-- <img src="../assets/icon-user-black.svg" alt /> -->
        </div>

        <div class="cart" @click="accessCart()">
          <!-- <img src="../assets/icon-bag-black.svg" alt /> -->
          <img src="../assets/test/svg_test-white-cart.svg" alt />

          <div class="display">
            <p v-text="getItemQuantity()"></p>
          </div>
        </div>
      </section>
    </div>

    <p class="display-role" v-if="user">
      Logged in:
      <strong>{{user.name}}</strong> | Role:
      <strong>{{user.role}}</strong>
    </p>
    <p v-else class="display-role elselog" @click="accessProfile()">Log in for buying shit</p>
  </header>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    getItemQuantity() {
      return this.$store.state.cart.length;
    },
    accessProfile() {
      if (this.$store.state.user) {
        this.$router.push({ name: "MyAccount" });
      } else {
        this.$router.push({ name: "Login" });
      }
    },
    accessCart() {
      this.$router.push("/shoppingcart");
    },
    toHome() {
      this.$router.push("/");
    },
    accessAdminArea(){
      this.$router.push("/admin");
      
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin flex-content-center {
  display: flex;
  justify-content: center;
}

@mixin flex-center-space {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header {
  .wrapper {
    // background-color: #c4c4c4;
    background-color: rgba(0, 0, 0, 0.85);
    @include flex-center-space;

    padding: 2rem 1rem 0rem 1rem;

    .logo {
      @include flex-content-center;
      cursor: pointer;
      img {
        height: 3rem;
      }
    }

    .access {
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 1rem;

      .profile {
        // remove padding, not og
        padding: 0.5rem;

        background-color: none;
        clip-path: circle();
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.2s;

        img {
          width: 2rem;
          height: 100%;
        }
      }

      .profile:hover {
        background: #58e0b7;
      }

      .display-role {
        color: black;
      }
    }

    .cart {
      display: grid;
      grid-template-columns: 1.8rem 1rem;
      cursor: pointer;
      img {
        width: 1.5rem;
        height: 100%;
      }
      .display {
        padding: .6rem;
        background-color: #58e0b7;
        clip-path: circle();
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.2s;
        p {
          font-weight: 800;
          color: black;
        }
      }
    }
    // .cart {
    //   display: grid;
    //   grid-template-rows: 1rem 1rem;
    //   cursor: pointer;

    //   .display {
    //     padding: 0.7rem;
    //     background-color: #58e0b7;
    //     clip-path: circle();
    //     display: flex;
    //     align-items: center;
    //     transition: background-color 0.2s;
    //     p {
    //       font-weight: 800;
    //       color: black;
    //     }
    //   }
    // }
    .cart:hover {
      .display {
        background: #58e0b7;
      }
    }
  }
  .display-role {
    padding-right: 1.4rem;
    text-align: right;
    color: white;
    // background-color: #c4c4c4;
    background-color: rgba(0, 0, 0, 0.85);
    //border-bottom: 1px solid black;
    //margin: 0rem 1rem 0rem 1rem;
  }
  .elselog {
    cursor: pointer;
  }
}
</style>