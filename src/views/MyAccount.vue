<template>
  <main>
    <h1>{{user.name}}'s account</h1>
    <p class="logout btn" @click="logout()">Log out</p>
    <section class="user-details">
      <h2>Personal information</h2>
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

    <section class="user-orders">
      <h2>Order history</h2>
      <article v-for="order in orders" :key="order._id">
        <p><strong>Date for purchase: </strong>{{new Date(order.timeStamp)}}</p>
        <p><strong>Delivery status: </strong>{{order.status}}</p>
        <p><strong>Total sum: </strong>{{order.orderValue}}</p>

      </article>
    </section>
  </main>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$router.push({ name: "Home" });
      this.$store.dispatch("logout");
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
};
</script>

<style lang="scss" scoped>
@import "@/scss/button-style.scss";
main {
  min-height: 500px;
  padding: 0 1rem;
  margin: 3rem;

  h1 {
    margin-bottom: 1rem;
  }

  section {
    margin: 2rem 0;

    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.15);

    article {
      border: 1px solid black;
      padding: 0.5rem;
      margin: 1.5rem 0;
    }
  }
  .logout {
    max-width: 10rem;
    background: #58e0b7;
  }
}
</style>