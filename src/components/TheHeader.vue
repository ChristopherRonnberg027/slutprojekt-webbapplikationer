<template>
  <header>
    <div class="wrapper">
      <section class="logo">
        <img src="../assets/sinus-logo.svg" alt />
      </section>

      <section class="access">
        <div class="admin" @click="accessAdminArea()" v-if="user && user.role === 'admin'">
          <img src="../assets/icon-edit-white.svg" alt />
        </div>

        <div class="profile" @click="accessProfile()">
          <img src="../assets/icon-user-black.svg" alt />
        </div>

        <div class="cart" @click="accessCart()">
          <img src="../assets/icon-bag-black.svg" alt />

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
    <p v-else class="display-role">Logg in to buy shit</p>
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

.wrapper {
  background-color: #c4c4c4;
  @include flex-center-space;

  padding: 2rem 1rem 0rem 1rem;

  .logo {
    @include flex-content-center;
    img {
      height: 3rem;
    }
  }

  .access {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 1rem;

    .admin {
      padding: .5rem;
      background-color: black;
      clip-path: circle();
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: background-color 0.2s;
      img {
        width: 1rem;
        height: 100%;
      }
    }
    .admin:hover {
      background: #58e0b7;
    }

    .profile {
      padding: .3rem;
      background-color: white;
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
  }

  .cart {
    display: grid;
    grid-template-rows: 1rem 1rem;
    cursor: pointer;

    .display {
      padding: 0.7rem;
      background-color: white;
      clip-path: circle();
      display: flex;
      align-items: center;
      transition: background-color 0.2s;
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
.display-role {
  padding-right: 1.4rem;
  text-align: right;
  background-color: #c4c4c4;
}
</style>