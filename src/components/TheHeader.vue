<template>
  <header>
    <div class="wrapper">
      <section class="logo" @click="toHome()">
        <img src="../assets/test/svg_test-black-sinus.svg" alt />
      </section>

      <section class="access">
        <div class="admin" @click="accessAdminArea()" v-if="user && user.role === 'admin'">
          <img src="../assets/icon-edit-white.svg" alt />
        </div>

        <div class="profile" @click="accessProfile()">
          <img src="../assets/test/svg_test-black-profile.svg" alt />
        </div>

        <div class="cart" @click="accessCart()">
          <img src="../assets/test/svg_test-black-cart.svg" alt />

          <div class="display">
            <p v-text="getItemQuantity"></p>
          </div>
        </div>
      </section>
    </div>

    <p class="display-role cursor" v-if="user" @click="accessProfile()">
      Logged in:
      <strong>{{user.name}}</strong> | Role:
      <strong>{{user.role}}</strong>
    </p>
    <p v-else class="display-role cursor" @click="accessProfile()">
      <strong>Log in to buy shit</strong>
    </p>
  </header>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
    getItemQuantity() {
      return this.$store.getters.amountOfItems;
    }
  },
  methods: {
    accessProfile() {
      if (this.$store.state.user) {
        if (this.$route.name !== "MyAccount") {
          this.$router.push({ name: "MyAccount" })
        }
      } else {
        if (this.$route.name !== "Login") {
          this.$router.push({ name: "Login" });
        }
      }
    },
    accessCart() {
      if (this.$route.name !== "ShoppingCart") {
        this.$router.push("/shoppingcart");
      }
    },
    toHome() {
      if (this.$route.name !== "Home") {
        this.$router.push("/");
      }  
    },
    accessAdminArea() {
      if (this.$route.name !== "AdminArea") {
        this.$router.push("/admin");
      }
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
      grid-template-columns: auto auto auto;
      grid-gap: 0.5rem;

      .admin {
        padding: 0.5rem;

        background-color: black;
        clip-path: circle();
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.2s;

        img {
          width: 1.5rem;
          height: 100%;
        }
      }
      .admin:hover {
        background: #58e0b7;
      }
      .profile {
        padding: 0.5rem;

        background-color: none;
        clip-path: circle();
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.2s;

        img {
          width: 1.5rem;
          height: 100%;
        }
      }

      .profile:hover {
        background: #58e0b7;
      }

      .display-role {
        color: black;
      }
      .cart {
        display: grid;
        grid-template-columns: 1.2rem 1rem;
        cursor: pointer;
        img {
          width: 1.5rem;
          height: 100%;
        }
        .display {
          margin-bottom: 1.2rem;
          padding: 0.7rem;
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
      .cart:hover {
        .display {
          background: black;
          p {
            color: white;
          }
        }
      }
    }
  }
  .display-role {
    text-align: right;
    color: black;
    border-bottom: 1px solid rgba(0, 0, 0, 0.55);
    margin: 0rem 1rem 0rem 1rem;
  }
  .cursor {
    cursor: pointer;
  }
}
@media screen and (max-width: 400px) {
  .logo {
    img {
      width: 5rem;
    }
  }
}
</style>
