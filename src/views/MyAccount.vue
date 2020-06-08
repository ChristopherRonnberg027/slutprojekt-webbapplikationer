<template>
  <main>
    <h1>{{user.name}}'s account</h1>
    <section class="user-details">
      <h2>User details</h2>
      <p>
        <strong>Name:</strong>
        {{user.name}}
      </p>
      <p>
        <strong>Email:</strong>
        {{user.email}}
      </p>
      <p>
        <strong>Role:</strong>
        {{user.role}}
      </p>
      <p>
        <strong>City:</strong>
        {{user.adress.city}}
      </p>
      <p>
        <strong>Street:</strong>
        {{user.adress.street}}
      </p>
      <p>
        <strong>Zip:</strong>
        {{user.adress.zip}}
      </p>
    </section>
    <!-- <button @click="logout()">logout</button> -->
    <p class="logout-btn" @click="logout()">log out</p>
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
main {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 2rem 0;
  }

  section {
    //border: 1px solid red;
    min-width: 400px;
    margin: 2rem 0;

    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.15);

    article {
      border: 1px solid blue;
      margin: 1.5rem 0;
    }
  }
  .logout-btn {
    margin-top: 3rem;
    text-align: center;
    font-size: 0.8rem;
    background: #58e0b7;
    border: 2px solid #000000;
    padding: 0rem 0.5rem;
    &:hover {
      cursor: pointer;
      background: cornflowerblue;
    }
  }
}
</style>