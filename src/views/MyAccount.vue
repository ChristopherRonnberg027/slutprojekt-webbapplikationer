<template>
  <main>
    <h1 class="ma-5">my account view</h1>
    <v-container>
      <v-row justify="center">
        <v-col cols="10" sm="8" md="6" lg="4">
          <v-card class="d-flex flex-column">
            <v-card-text>
              <v-card-title class="headline text--primary">User details</v-card-title>
              <p class="text--primary">
                <b>Name:</b>
                {{user.name}}
              </p>
              <p class="text--primary">
                <b>Email:</b>
                {{user.email}}
              </p>
              <p class="text--primary">
                <b>Role:</b>
                {{user.role}}
              </p>
              <p class="text--primary">
                <b>City:</b>
                {{user.adress.city}}
              </p>
              <p class="text--primary">
                <b>Street:</b>
                {{user.adress.street}}
              </p>
              <p class="text--primary">
                <b>Zip:</b>
                {{user.adress.zip}}
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="logout()">Logout</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-expansion-panels class="my-10">
        <v-expansion-panel v-for="order in orders" :key="order._id">
          <v-expansion-panel-header>Order id: {{order._id}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card flat>
              <v-card-text class="text--primary">
                <p><b>Date:</b> {{new Date(order.timeStamp)}}</p>
                <p><b>Status:</b> {{order.status}}</p>
                <p><b>Total sum:</b> {{order.orderValue}}</p>
                <p v-for="item in order.items" :key="item.id">
                  <span><b>Item id:</b> {{item}}</span>
                </p>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </main>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "Home" });
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    orders() {
      return this.$store.state.user.orders;
    }
  },
  beforeCreate() {
    this.$store.dispatch("getOrders");
  }
};
</script>

<style lang="scss" scoped>
</style>