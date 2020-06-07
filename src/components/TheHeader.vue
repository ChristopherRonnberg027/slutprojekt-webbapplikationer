<template>
  <header>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggleDrawer()"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-img max-height="4rem" contain src="../assets/sinus-logo.svg"></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="user">
      <span class="mr-2 font-weight-bold">User:</span>
      <span class="mr-5">{{user.name}}</span>
      <span class="mr-2 font-weight-bold">Role:</span>
      <span>{{user.role}}</span>
      </div>
      <v-spacer></v-spacer>
      <p class="d-flex d-sm-none">xs</p>
      <p class="d-none d-sm-flex d-md-none">sm</p>
      <p class="d-none d-md-flex d-lg-none">md</p>
      <p class="d-none d-lg-flex d-xl-none">lg</p>
      <p class="d-none d-xl-flex">xl</p>
      <v-spacer></v-spacer>
      <v-btn class="mr-5" @click="accessProfile()">
        <v-icon>person</v-icon>
        <span>My Account</span>
      </v-btn>
      <v-btn @click="accessCart()">
        <v-icon>shopping_cart</v-icon>
        <span>Shopping Cart</span>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-btn icon>
              <v-icon>{{link.icon}}</v-icon>
            </v-btn>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        {icon: 'home', text: 'Home', route:'/'},
        {icon: 'shopping_basket', text: 'Products', route:'/products'},
      ]
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },
    getItemQuantity() {
      return this.$store.state.cart.length;
    },
    async accessProfile() {
      if (this.$store.state.user) {
        await this.$store.dispatch("getOrders");
        this.$router.push({ name: "MyAccount" });
      } else {
        this.$router.push({ name: "Login" });
      }
    },
    accessCart() {
      this.$router.push("/shoppingcart");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>