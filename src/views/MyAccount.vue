<template>
  <main>
    <h1>my account view</h1>
    <section class="user-details">
      <h2>User details</h2>
      <p>Name: {{user.name}}</p>
      <p>Email: {{user.email}}</p>
      <p>Role: {{user.role}}</p>
      <p>City: {{user.adress.city}}</p>
      <p>Street: {{user.adress.street}}</p>
      <p>Zip: {{user.adress.zip}}</p>
    </section>
    <button @click="logout()">logout</button>
    <section class="user-orders">
      <h2>User orders</h2>
      <article v-for="order in orders" :key="order._id">
        <p>Date: {{order.timeStamp}}</p>
        <p>Status: {{order.status}}</p>
        <p>Total sum: {{order.orderValue}}</p>
        <p v-for="item in order.items" :key="item.id">
          <span>Item id: {{item}}</span>
        </p>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push({name: 'Home'});
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
    this.$store.dispatch('getOrders');
  }
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 2rem 0;
  }

  section {
    border: 1px solid red;
    min-width: 400px;
    margin: 2rem 0;

    article {
      border: 1px solid blue;
      margin: 1.5rem 0;
    }
  }
}
</style>