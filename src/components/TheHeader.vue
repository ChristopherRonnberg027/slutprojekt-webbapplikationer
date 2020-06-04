<template>
  <header>
    
    <section class="logo">
      <img src="../assets/sinus-logo.svg" alt />
    </section>

    <section class="access">
      <div class="profile-container">
        <div class="role-container" v-if="user">
          <p class="display-role" ><strong>User: {{user.name}} role: {{user.role}}</strong></p>
        </div>

        <div class="profile" @click="accessProfile()">
          <img src="../assets/icon-user-black.svg" alt />
        </div>
      </div>

      <div class="cart" @click="accessCart()">
        <img src="../assets/icon-bag-black.svg" alt />
        <div class="display">
          <p v-text="getItemQuantity()"></p>
        </div>
      </div>

    </section>
  </header>
</template>

<script>
export default {
  computed:{
    user(){
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
      console.log("TO CART/CHECKOUT");
    },
    userLog() {
      return ;
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
    max-width: 12rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .profile-container {
      // display: grid;
      // grid-template-columns: 5rem 4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .profile {
        background-color: white;
        clip-path: circle();
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.2s;

        img {
          width: 100%;
          height: 1.4rem;
        }
      }
      .profile:hover {
        background: #58e0b7;
      }

      .role-container {
        color: black;


        .display-role{
        }
      }
    }

    .cart {
      padding-top: 0.5rem;
      display: grid;
      grid-template-rows: 1rem 1rem;
      cursor: pointer;

      .display {
        padding: 0.7rem;
        background-color: white;
        clip-path: circle();
        display: flex;
        justify-content: center;
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
}
</style>